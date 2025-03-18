import { DIV } from "./div";
import { convertBackgroundColor } from "./rules/background-color";
import { convertHeight } from "./rules/height";
import { convertOpacity } from "./rules/opacity";
import { convertWidth } from "./rules/width";
import { convertBorderRadius } from "./rules/border-radius";
import { convertTransform } from "./rules/transform";
import { convertBorderWidth } from "./rules/border-width";
import { convertBorderColor } from "./rules/border-color";
import { convertBoxShadow } from "./rules/box-shadow";
import { getTextSegments, styleToString, TextSegment } from "./rules/util";
import { convertTextColor } from "./rules/text/color";
import { convertFontSize } from "./rules/text/font-size";
import { convertFontWeight } from "./rules/text/font-weight";

const generateStyle = (layer: SceneNode) => {
    return Object.assign(
        {},
        convertWidth(layer),
        convertHeight(layer),
        convertBackgroundColor(layer),
        convertOpacity(layer),
        convertBorderRadius(layer),
        convertTransform(layer),
        convertBorderWidth(layer),
        convertBorderColor(layer),
        convertBoxShadow(layer),
    )
}

const generateTextStyle = (segment: TextSegment) => {
    return Object.assign(
        {},
        convertTextColor(segment),
        convertFontSize(segment),
        convertFontWeight(segment),
    )
}

export function traverseLayer(layer: SceneNode) {
    const div = new DIV()
    if (layer.type == 'TEXT') {
        const segments = getTextSegments(layer)
        const textString = segments.map(segment => {
            const style = generateTextStyle(segment)
            return `<span style="${styleToString(style)}">${segment.characters}</span>`
        }).join('')
        div.addText(textString)
    } else {
        if ('children' in layer) {
            for (const child of layer.children) {
                const childDiv = traverseLayer(child)
                div.addChild(childDiv)
            }
        }
        div.addStyle(generateStyle(layer))
    }
    return div
}