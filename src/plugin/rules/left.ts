import { getLayerAbsoluteRenderBounds } from "./util"

export const convertLeft = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    if (!('constraints' in layer)) {
        return {}
    }
    const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (!parentAbsoluteBoundingBox) {
        return {}
    }
    if (!layerAbsoluteBoundingBox) {
        return {}
    }
    const left = layerAbsoluteBoundingBox.x - parentAbsoluteBoundingBox.x
    const constraints = layer.constraints.horizontal
    switch (constraints) {
        case 'CENTER':
        case 'STRETCH':
        case 'MIN': {
            return {
                left: left + 'px',
            }
        }
        case 'SCALE': {
            return {
                left: (left / parentAbsoluteBoundingBox.width) * 100 + '%',
            }
        }
        case 'MAX': {
            return {}
        }
    }
}
