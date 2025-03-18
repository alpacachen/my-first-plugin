import { CSSProperties } from "react"
import { filterVisiabelPaints } from "./util"

export const convertBorderWidth = (layer: SceneNode): CSSProperties => {
    if (!('strokes' in layer)) {
        return {}
    }
    const strokes = filterVisiabelPaints(layer.strokes)
    if (strokes.length === 0) {
        return {}
    }
    if ('strokeWeight' in layer) {
        if (layer.strokeWeight !== figma.mixed) {
            return { borderWidth: layer.strokeWeight + 'px' }
        } else {
            if ('strokeTopWeight' in layer) {
                const { strokeTopWeight, strokeRightWeight, strokeBottomWeight, strokeLeftWeight } = layer
                return {
                    borderWidth: `${strokeTopWeight}px ${strokeRightWeight}px ${strokeBottomWeight}px ${strokeLeftWeight}px`
                }
            } else {
                return {}
            }
        }
    }

    return {}
}
