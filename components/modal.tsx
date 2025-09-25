import { createRoot } from 'react-dom/client'
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/dialog'
import { Button } from '@/components/button'

export interface BaseModalProps {
  title?: string
  content: React.ReactNode
  description?: string
  okText?: string
  cancelText?: string
  onOk?: () => void
  onCancel?: () => void
  onClose?: () => void
}

export interface ModalFuncProps extends BaseModalProps {
  icon?: React.ReactNode
}

interface ModalConfig extends ModalFuncProps {
  type?: 'info' | 'success' | 'error' | 'warning' | 'confirm'
}

const ModalContent: React.FC<{
  config: ModalConfig
  onClose: () => void
}> = ({ config, onClose }) => {
  const {
    title,
    description,
    content,
    okText = '确认',
    cancelText = '取消',
    onOk,
    onCancel,
    type = 'info'
  } = config

  const handleOk = () => {
    onOk?.()
    onClose()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose()
  }

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="size-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="size-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        )
      case 'error':
        return (
          <div className="size-6 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="size-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        )
      case 'warning':
        return (
          <div className="size-6 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg className="size-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open onOpenChange={() => handleCancel()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-start gap-3">
            {getIcon()}
            <div className="flex-1">
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </div>
          </div>
        </DialogHeader>
        <div className="py-4">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {content}
          </div>
        </div>
        <DialogFooter>
          {(type === 'confirm' || type === 'warning') && (
            <Button variant="outline" onClick={handleCancel}>
              {cancelText}
            </Button>
          )}
          <Button
            variant={type === 'error' ? 'destructive' : 'default'}
            onClick={handleOk}
          >
            {okText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const createModal = (config: ModalConfig) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const root = createRoot(div)

  const handleClose = () => {
    config.onClose?.()
    root.unmount()
    div.remove()
  }

  root.render(<ModalContent config={config} onClose={handleClose} />)
}

export const Modal = {
  info: (config: ModalFuncProps) => createModal({ ...config, type: 'info' }),
  success: (config: ModalFuncProps) => createModal({ ...config, type: 'success' }),
  error: (config: ModalFuncProps) => createModal({ ...config, type: 'error' }),
  warning: (config: ModalFuncProps) => createModal({ ...config, type: 'warning' }),
  confirm: (config: ModalFuncProps) => createModal({ ...config, type: 'confirm' })
}

export type ModalType = keyof typeof Modal