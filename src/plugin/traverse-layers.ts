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
import { childrenHasMask, getTextSegments, hasImageFill, styleToString, TextSegment } from "./rules/util";
import { convertTextColor } from "./rules/text/color";
import { convertFontSize } from "./rules/text/font-size";
import { convertFontWeight } from "./rules/text/font-weight";
import { Img } from "./rules/util/image";
import { convertPosition } from "./rules/position";
import { convertLeft } from "./rules/left";
import { convertTop } from "./rules/top";
import { convertPadding } from "./rules/padding";
import { convertGap } from "./rules/gap";
import { convertDisplay } from "./rules/display";
import { convertFlexDirection } from "./rules/flex-direction";
import { convertLineHeight } from "./rules/text/line-height";
import { convertTextAlign } from "./rules/text/text-algin";
import { convertAlignItems } from "./rules/aligin-items";
import { convertJustifyContent } from "./rules/justify-content";
import { convertOverflow } from "./rules/overflow";
import { convertRight } from "./rules/right";
import { convertBottom } from "./rules/bottom";
const generateStyle = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
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
        convertPosition(layer, topParentId),
        convertLeft(layer, topParentId, parent),
        convertRight(layer, topParentId, parent),
        convertTop(layer, topParentId, parent),
        convertBottom(layer, topParentId, parent),
        convertPadding(layer),
        convertGap(layer),
        convertDisplay(layer, parent),
        convertFlexDirection(layer),
        convertAlignItems(layer),
        convertJustifyContent(layer),
        convertOverflow(layer),
    )
}

const generateTextStyle = (segment: TextSegment) => {
    return Object.assign(
        {},
        convertTextColor(segment),
        convertFontSize(segment),
        convertFontWeight(segment),
        convertLineHeight(segment),
    )
}

const generateTextContainerStyle = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    return Object.assign(
        {},
        convertLeft(layer, topParentId, parent),
        convertRight(layer, topParentId, parent),
        convertTop(layer, topParentId, parent),
        convertBottom(layer, topParentId, parent),
        convertPosition(layer, topParentId),
        convertWidth(layer),
        convertHeight(layer),
        convertTextAlign(layer),
    )
}
const generateImageStyle = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    return Object.assign(
        {},
        convertPosition(layer, topParentId),
        convertLeft(layer, topParentId, parent),
        convertRight(layer, topParentId, parent),
        convertTop(layer, topParentId, parent),
        convertBottom(layer, topParentId, parent),
        convertBoxShadow(layer),
    )
}

export async function traverseLayer(layer: SceneNode, rootId: string, parent: SceneNode | null) {
    if (!layer.visible) {
        return null
    }
    if (layer.type == 'TEXT') {
        const div = new DIV()
        const segments = getTextSegments(layer)
        const textString = segments.map(segment => {
            const style = generateTextStyle(segment)
            return `<span style="${styleToString(style)}">${segment.characters.replace(/\n/g, '<br />')}</span>`
        }).join('')
        div.addText(textString)
        div.addStyle(generateTextContainerStyle(layer, rootId, parent))
        return div
    } else if (layer.type == 'BOOLEAN_OPERATION' || layer.type == 'STAR' || layer.type == 'ELLIPSE' || layer.type == 'POLYGON' || layer.type == 'VECTOR' || hasImageFill(layer)) {
        const image = new Img(await layer.exportAsync({
            format: 'PNG',
            useAbsoluteBounds: true,
        }))
        image.addStyle(generateImageStyle(layer, rootId, parent))
        return image
    } else {
        const div = new DIV()
        if ('children' in layer) {
            if (childrenHasMask(layer)) {
                const image = new Img(await layer.exportAsync({
                    format: 'PNG',
                }))
                image.addStyle(generateImageStyle(layer, rootId, parent))
                return image
            } else {
                for (const child of layer.children) {
                    const childDiv = await traverseLayer(child, rootId, layer)
                    div.addChild(childDiv)
                }
            }
        }
        div.addStyle(generateStyle(layer, rootId, parent))
        return div
    }
}