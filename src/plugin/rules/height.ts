import { CSSProperties } from "react"

export const convertHeight = (layer: SceneNode): CSSProperties => {
    if ('height' in layer) {
        return { height: layer.height + 'px' }
    }
    return {}
}