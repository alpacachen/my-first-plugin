import { CSSProperties } from "react"
import { filterVisibleSolidPaints, solidPaintToCode } from "./util"
export const convertBorderColor = (layer: SceneNode): CSSProperties => {
    if (!('strokes' in layer)) {
        return {}
    }
    const strokes = filterVisibleSolidPaints(layer.strokes)
    if (strokes.length === 0) {
        return {}
    }
    const stroke = strokes[0]
    return { borderColor: solidPaintToCode(stroke) }

}