import { CSSProperties } from "react"

// RGB 0-1 0-1 0-1
export const solidPaintToCode = (paint: SolidPaint) => {
    return `rgba(${paint.color.r * 255}, ${paint.color.g * 255}, ${paint.color.b * 255}, ${paint.opacity})`
}

export const filterVisiabelPaints = (paints: readonly Paint[]) => {
    return paints.filter((paint) => paint.visible)
}

export const filterVisibleSolidPaints = (paints: readonly Paint[]) => {
    return filterVisiabelPaints(paints).filter((paint) => paint.type === 'SOLID')
}

export const filterVisibleEffect = (effects: readonly Effect[]) => {
    return effects.filter((effect) => effect.visible)
}

export const rgbaToRGBA = (rgba: RGBA) => {
    return `rgba(${rgba.r * 255}, ${rgba.g * 255}, ${rgba.b * 255}, ${rgba.a})`
}

export const getTextSegments = (layer: TextNode) => {
    return layer.getStyledTextSegments(['fills', 'fontSize', 'fontWeight'])
}

export type TextSegment = ReturnType<typeof getTextSegments>[number]

export const camelToDash = (str: string) => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export const styleToString = (style: CSSProperties) => {
    return Object.entries(style).map(([key, value]) => `${camelToDash(key)}: ${value}`).join('; ')
}