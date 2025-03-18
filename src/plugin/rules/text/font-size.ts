import { TextSegment } from "../util"

export const convertFontSize = (segment: TextSegment) => {
    return {
        fontSize: `${segment.fontSize}px`,
    }
}
