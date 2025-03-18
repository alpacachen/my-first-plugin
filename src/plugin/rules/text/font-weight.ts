import { TextSegment } from "../util"

export const convertFontWeight = (segment: TextSegment) => {
    return {
        fontWeight: `${segment.fontWeight}`,
    }
}