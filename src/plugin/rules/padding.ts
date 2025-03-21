import { isAutoLayout } from "./util"

export const convertPadding = (layer: SceneNode) => {
    // 只有自动布局才展示padding
    if (!isAutoLayout(layer)) {
        return {}
    }
    if ('paddingTop' in layer) {
        const paddingTop = layer.paddingTop
        const paddingRight = layer.paddingRight
        const paddingBottom = layer.paddingBottom
        const paddingLeft = layer.paddingLeft
        return {
            padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
        }
    }
    return {}
}
