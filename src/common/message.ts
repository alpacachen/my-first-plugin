export type MessageFromPlugin = {
    type: 'html'
    data: string
    zoom: number
}

export const sendMessageFromPlugin = (data: MessageFromPlugin) => {
    figma.ui.postMessage(data)
}
