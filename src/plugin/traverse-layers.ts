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
export function traverseLayer(layer: SceneNode) {
    const div = new DIV()
    div.addStyle(convertWidth(layer))
    div.addStyle(convertHeight(layer))
    div.addStyle(convertBackgroundColor(layer))
    div.addStyle(convertOpacity(layer))
    div.addStyle(convertBorderRadius(layer))
    div.addStyle(convertTransform(layer))
    div.addStyle(convertBorderWidth(layer))
    div.addStyle(convertBorderColor(layer))
    div.addStyle(convertBoxShadow(layer))
    if ('children' in layer) {
        for (const child of layer.children) {
            const childDiv = traverseLayer(child)
            div.addChild(childDiv)
        }
    }
    return div
}