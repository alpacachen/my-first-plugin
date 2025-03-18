import { isAutoLayout } from "./util"

export const convertPosition = (layer: SceneNode) => {
    // 如果有父元素，那么一定是 absolute
    if ('parent' in layer && layer.parent !== null) {
        // 如果父元素是 autolayout，那么就不设置绝对定位
        if (isAutoLayout(layer.parent)) {
            return {}
        }
        return { position: 'absolute' as const }
    }
    // 如果有子元素，那么一定是 relative
    if ('children' in layer) {
        return { position: 'relative' as const }
    }

    return {}
}
