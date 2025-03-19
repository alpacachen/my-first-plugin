import { strokeAvailable } from "./util"

export const convertLeft = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    // figma 绝对定位是起点不带边框，但是 html 带
    let borderLeftWidth = 0
    if (strokeAvailable(layer) && 'strokeLeftWeight' in layer) {
        const { strokeLeftWeight, strokeAlign } = layer
        switch (strokeAlign) {
            case 'INSIDE':
                break
            case 'OUTSIDE':
                borderLeftWidth = strokeLeftWeight
                break
            case 'CENTER':
                borderLeftWidth = strokeLeftWeight / 2
                break
        }
    }
    return {
        left: (layer.absoluteBoundingBox?.x || 0) - (parent?.absoluteBoundingBox?.x || 0) - borderLeftWidth + 'px',
    }
}
