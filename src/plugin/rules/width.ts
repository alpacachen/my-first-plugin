import { CSSProperties } from "react"

export const convertWidth = (layer: SceneNode): CSSProperties => {
    if ('width' in layer) {
        return { width: layer.width + 'px' }
    }
    return {}
}