import { DIV } from "./rules/util/div";
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
import { Img } from "./rules/util/image";
import { convertPosition } from "./rules/position";
import { convertLeft } from "./rules/left";
import { convertTop } from "./rules/top";
import { convertPadding } from "./rules/padding";
const generateStyle = (layer: SceneNode, topParentId: string) => {
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
        convertPosition(layer),
        convertLeft(layer, topParentId),
        convertTop(layer, topParentId),
        convertPadding(layer),
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

const generateImageStyle = (layer: SceneNode, topParentId: string) => {
    return Object.assign(
        {},
        convertPosition(layer),
        convertLeft(layer, topParentId),
        convertTop(layer, topParentId),
    )
}

export async function traverseLayer(layer: SceneNode, topParentId: string) {
    if (layer.type == 'TEXT') {
        const div = new DIV()
        const segments = getTextSegments(layer)
        const textString = segments.map(segment => {
            const style = generateTextStyle(segment)
            return `<span style="${styleToString(style)}">${segment.characters}</span>`
        }).join('')
        div.addText(textString)
        return div
    } else if (layer.type == 'STAR' || layer.type == 'ELLIPSE' || layer.type == 'POLYGON' || layer.type == 'VECTOR') {
        const image = new Img(await layer.exportAsync({
            format: 'PNG',
        }))
        image.addStyle(generateImageStyle(layer, topParentId))
        return image
    } else {
        const div = new DIV()
        if ('children' in layer) {
            for (const child of layer.children) {
                const childDiv = await traverseLayer(child, topParentId)
                div.addChild(childDiv)
            }
        }
        div.addStyle(generateStyle(layer, topParentId))
        return div
    }
}