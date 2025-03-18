import { CSSProperties } from "react"
import { filterVisibleEffect, RGBAtoRGBA } from "./util"

export const convertBoxShadow = (layer: SceneNode): CSSProperties => {
    if (!('effects' in layer)) {
        return {}
    }
    const effects = filterVisibleEffect(layer.effects)
    if (effects.length === 0) {
        return {}
    }
    let code = ''
    for (const effect of effects) {
        if (effect.type === 'DROP_SHADOW') {
            code += `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.spread}px ${RGBAtoRGBA(effect.color)},`
        } else if (effect.type === 'INNER_SHADOW') {
            code += `inset ${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.spread}px ${RGBAtoRGBA(effect.color)},`
        }
    }
    if (code.length > 0) {
        code = code.slice(0, -1)
        return { boxShadow: code }
    }
    return {}
}
