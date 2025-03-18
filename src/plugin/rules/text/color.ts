import { filterVisibleSolidPaints, solidPaintToCode, TextSegment } from "../util"

export const convertTextColor = (segment: TextSegment) => {
    const fills = filterVisibleSolidPaints(segment.fills)
    if (fills.length === 0) {
        return {}
    }
    const fill = fills[0]
    return {
        color: solidPaintToCode(fill),
    }
}