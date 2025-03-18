import { CSSProperties } from "react"
import { isAutoLayout } from "./util"

export const convertDisplay = (layer: SceneNode): CSSProperties => {
    // 如果是组  display: contents
    if (layer.type == 'GROUP') {
        return { display: 'contents' }
    }
    if (isAutoLayout(layer)) {
        return { display: 'flex' }
    }
    return {}
}
