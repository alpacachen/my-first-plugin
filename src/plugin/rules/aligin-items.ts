import { isAutoLayout } from "./util"

export const convertAlignItems = (layer: SceneNode) => {
    if (isAutoLayout(layer)) {
        if ('counterAxisAlignItems' in layer) {
            switch (layer.counterAxisAlignItems) {
                case 'MIN':
                    return { alignItems: 'flex-start' }
                case 'CENTER':
                    return { alignItems: 'center' }
                case 'MAX':
                    return { alignItems: 'flex-end' }
                case 'BASELINE':
                    return { alignItems: 'baseline' }
            }
        }
    }
    return {}
}
