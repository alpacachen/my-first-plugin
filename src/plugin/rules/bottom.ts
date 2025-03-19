import { getLayerAbsoluteRenderBounds } from "./util"

export const convertBottom = (layer: SceneNode, TopParentId: string, parent: SceneNode | null) => {
    if (layer.id === TopParentId) {
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
    if (!('constraints' in layer)) {
        return {}
    }
    const bottom = parentAbsoluteBoundingBox.y + parentAbsoluteBoundingBox.height - (layerAbsoluteBoundingBox.y + layerAbsoluteBoundingBox.height)
    const constraints = layer.constraints.vertical
    switch (constraints) {
        case 'MAX':
        case 'CENTER':
        case 'STRETCH':
            return {
                bottom: bottom + 'px',
            }
        case 'SCALE':
            return {
                bottom: (bottom / parentAbsoluteBoundingBox.height) * 100 + '%',
            }
        case 'MIN':
            return {}
    }
}
