import { isAutoLayout } from "./util"

export const convertJustifyContent = (layer: SceneNode) => {
    if (isAutoLayout(layer)) {
        if ('primaryAxisAlignItems' in layer) {
            switch (layer.primaryAxisAlignItems) {
                case 'SPACE_BETWEEN':
                    return { justifyContent: 'space-between' }
                case 'CENTER':
                    return { justifyContent: 'center' }
                case 'MIN':
                    return { justifyContent: 'flex-start' }
                case 'MAX':
                    return { justifyContent: 'flex-end' }
            }
        }
    }
    return {}
}
