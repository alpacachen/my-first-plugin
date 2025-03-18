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

export const RGBAtoRGBA = (rgba: RGBA) => {
    return `rgba(${rgba.r * 255}, ${rgba.g * 255}, ${rgba.b * 255}, ${rgba.a})`
}