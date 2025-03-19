import { getLayerAbsoluteRenderBounds } from "./util"

export const convertRight = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    if (!('constraints' in layer)) {
        return {}
    }
    const constraints = layer.constraints.horizontal
    const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (!parentAbsoluteBoundingBox) {
        return {}
    }
    if (!layerAbsoluteBoundingBox) {
        return {}
    }
    const right = parentAbsoluteBoundingBox.x + parentAbsoluteBoundingBox.width - (layerAbsoluteBoundingBox.x + layerAbsoluteBoundingBox.width)

    switch (constraints) {
        case 'CENTER':
        case 'STRETCH':
        case 'MAX': {
            return {
                right: right + 'px',
            }
        }
        case 'SCALE': {
            return {
                right: (right / parentAbsoluteBoundingBox.width) * 100 + '%',
            }
        }
        case 'MIN': {
            return {}
        }
    }
}
