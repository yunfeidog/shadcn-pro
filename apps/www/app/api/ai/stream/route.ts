export async function GET() {
  // 创建一个可读流
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()

      // 模拟AI生成文本
      const messages = [
        "Hello! ",
        "I am ",
        "an AI ",
        "assistant. ",
        "How can ",
        "I help ",
        "you today? ",
        "\n\n",
        "I can help ",
        "with various ",
        "tasks like ",
        "writing code, ",
        "answering questions, ",
        "and more!",
      ]

      let index = 0

      const sendMessage = () => {
        if (index < messages.length) {
          const message = messages[index]
          const data = `data: ${message}\n\n`
          controller.enqueue(encoder.encode(data))
          index++
          if (index == messages.length - 1) {
            index = 0
          }

          // 模拟打字效果，每200ms发送一个词
          setTimeout(sendMessage, 2)
        } else {
          // 发送结束信号
          controller.enqueue(encoder.encode("data: [DONE]\n\n"))
          controller.close()
        }
      }

      // 开始发送消息
      setTimeout(sendMessage, 100)
    },
  })

  // 返回SSE响应
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
