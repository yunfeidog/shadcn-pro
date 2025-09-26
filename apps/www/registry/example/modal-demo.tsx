"use client"

import * as React from "react"

import { Modal } from "@/registry/shadcn-pro/components/modal"

export default function ModalTestPage() {
  const showInfoModal = () => {
    Modal.info({
      title: "Information",
      content: (
        <div>
          <p>This is an information message.</p>
          <p>Some additional content here.</p>
        </div>
      ),
      onOk() {
        console.log("Info modal closed")
      },
    })
  }

  const showSuccessModal = () => {
    Modal.success({
      title: "Success",
      content: "Operation completed successfully!",
    })
  }

  const showErrorModal = () => {
    Modal.error({
      title: "Error occurred",
      content: "Failed to perform the operation. Please try again.",
    })
  }

  const showWarningModal = () => {
    Modal.warning({
      title: "Warning",
      content: "This is a warning message that you should pay attention to.",
    })
  }

  const showConfirmModal = () => {
    Modal.confirm({
      title: "Confirm action",
      content: "Are you sure you want to perform this action?",
      onOk() {
        console.log("Confirmed")
      },
      onCancel() {
        console.log("Cancelled")
      },
    })
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Command Modal Test
        </h1>
        <p className="text-muted-foreground">
          Test page for the command modal component
        </p>
      </header>
      <main className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={showInfoModal}
          >
            Show Info Modal
          </button>
          <button
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            onClick={showSuccessModal}
          >
            Show Success Modal
          </button>
          <button
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={showErrorModal}
          >
            Show Error Modal
          </button>
          <button
            className="rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700"
            onClick={showWarningModal}
          >
            Show Warning Modal
          </button>
          <button
            className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            onClick={showConfirmModal}
          >
            Show Confirm Modal
          </button>
        </div>
      </main>
    </div>
  )
}
