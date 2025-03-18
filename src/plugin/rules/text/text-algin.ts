
export const convertTextAlign = (layer: SceneNode) => {
    if ('textAlignHorizontal' in layer) {
        switch (layer.textAlignHorizontal) {
            case 'LEFT':
                return { textAlign: 'left' }
            case 'RIGHT':
                return { textAlign: 'right' }
            case 'CENTER':
                return { textAlign: 'center' }
            case 'JUSTIFIED':
                return { textAlign: 'justify' }
        }
    }
}
