import { TextSegment } from "../util"

export const convertLineHeight = (segment: TextSegment) => {
    switch (segment.lineHeight.unit) {
        case 'AUTO':
            return {}
        case 'PIXELS':
            return { lineHeight: `${segment.lineHeight.value}px` }
        case 'PERCENT':
            return { lineHeight: `${segment.lineHeight.value}%` }
    }
}

