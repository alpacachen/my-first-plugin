import { CSSProperties } from "react"

export const convertOpacity = (layer: SceneNode): CSSProperties => {
    if ('opacity' in layer) {
        return { opacity: layer.opacity }
    }
    return {}
}
