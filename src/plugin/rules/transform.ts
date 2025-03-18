import { CSSProperties } from "react"

export const convertTransform = (layer: SceneNode): CSSProperties => {
    if ('rotation' in layer) {
        return { transform: `rotate(${-layer.rotation}deg)`, transformOrigin: 'center' }
    }
    return {}
}
