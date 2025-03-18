import { CSSProperties } from "react"
import { isAutoLayout } from "./util"
export const convertGap = (layer: SceneNode): CSSProperties => {
    if (isAutoLayout(layer)) {
        if ('itemSpacing' in layer) {
            return { gap: layer.itemSpacing + 'px' }
        }
    }
    return {}
}
