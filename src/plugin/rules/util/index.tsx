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
    return layer.getStyledTextSegments(['fills', 'fontSize', 'fontWeight', 'lineHeight'])
}

export type TextSegment = ReturnType<typeof getTextSegments>[number]

export const camelToDash = (str: string) => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export const styleToString = (style: CSSProperties) => {
    return Object.entries(style).map(([key, value]) => `${camelToDash(key)}: ${value}`).join('; ')
}

export const hasImageFill = (layer: SceneNode) => {
    if ('fills' in layer && layer.fills !== figma.mixed) {
        return filterVisiabelPaints(layer.fills).filter((fill) => fill.type === 'IMAGE').length > 0
    }
    return false
}

export const isAutoLayout = (layer: BaseNode) => {
    if ('layoutMode' in layer) {
        return layer.layoutMode !== 'NONE'
    }
    return false
}

// 子图层中有 mask 就直接生成图片
export const childrenHasMask = (layer: SceneNode) => {
    if ('children' in layer) {
        return layer.children.some((child) => 'isMask' in child && child.isMask)
    }
    return false
}

export const strokeAvailable = (layer: SceneNode) => {
    if ('strokes' in layer) {
        return filterVisibleSolidPaints(layer.strokes).length > 0
    }
    return false
}
