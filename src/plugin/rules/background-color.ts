import { CSSProperties } from "react"
import { filterVisiabelPaints, solidPaintToCode } from "./util"

export const convertBackgroundColor = (layer: SceneNode): CSSProperties => {
    if ('fills' in layer && layer.fills !== figma.mixed) {
        const fills = filterVisiabelPaints(layer.fills)
        if (fills && fills.length > 0) {
            const fill = fills[0]
            if (fill.type === 'SOLID') {
                return { backgroundColor: solidPaintToCode(fill) }
            }
        }
    }
    return {}
}