import { CSSProperties } from "react"
import { isAutoLayout } from "./util"

export const convertDisplay = (layer: SceneNode, parent: SceneNode | null): CSSProperties => {
    if (layer.type == 'GROUP') {
        if (parent && isAutoLayout(parent)) {
            // 组在自动布局中需要占位
            return {}
        }
        // 如果是组  display: contents
        // return { display: 'contents' }
        return {  }
    }
    if (isAutoLayout(layer)) {
        return { display: 'flex' }
    }
    return {}
}
