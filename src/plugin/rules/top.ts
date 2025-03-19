import { strokeAvailable } from "./util"

export const convertTop = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    if (layer.id === topParentId) {
        return {}
    }
    let borderTopHeight = 0
    if (strokeAvailable(layer) && 'strokeTopWeight' in layer) {
        const { strokeTopWeight, strokeAlign } = layer
        switch (strokeAlign) {
            case 'INSIDE':
                break
            case 'OUTSIDE':
                borderTopHeight = strokeTopWeight
                break
            case 'CENTER':
                borderTopHeight = strokeTopWeight / 2
                break
        }
    }
    return {
        top: (layer.absoluteBoundingBox?.y || 0) - (parent?.absoluteBoundingBox?.y || 0) - borderTopHeight + 'px',
    }
}
