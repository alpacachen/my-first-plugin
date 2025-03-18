import { isAutoLayout } from "./util"

export const convertFlexDirection = (layer: SceneNode) => {
    if (isAutoLayout(layer)) {
        if ('layoutMode' in layer) {
            if (layer.layoutMode == 'HORIZONTAL') {
                return { flexDirection: 'row' }
            } else {
                return { flexDirection: 'column' }
            }
        }
    }
    return {}
}
