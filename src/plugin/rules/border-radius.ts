import { CSSProperties } from "react"

export const convertBorderRadius = (layer: SceneNode): CSSProperties => {
    if ('cornerRadius' in layer) {
        if (layer.cornerRadius == figma.mixed) {
            if ('topLeftRadius' in layer) {
                const { topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius } = layer
                return {
                    borderRadius: `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`
                }
            } else {
                return {}
            }
        } else {
            return { borderRadius: layer.cornerRadius + 'px' }
        }
    }
    return {}
}
