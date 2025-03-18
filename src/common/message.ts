export type MessageFromPlugin = {
    type: 'html'
    data: string
}

export const sendMessageFromPlugin = (data: MessageFromPlugin) => {
    figma.ui.postMessage(data)
}
