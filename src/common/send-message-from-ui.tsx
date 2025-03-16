export type MessageFromUI = {
    type: 'resize';
    data: {
        width: number;
        height: number;
    }
} | {
    type: 'refresh';
    data: null;
}

export const sendMessageFromUI = (message: MessageFromUI) => {
    window.parent.postMessage({ pluginMessage: message }, '*');
}