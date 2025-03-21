import { getLayerAbsoluteRenderBounds } from "./util"

export const convertTop = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    if (layer.id === topParentId) {
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
    const top = layerAbsoluteBoundingBox.y - parentAbsoluteBoundingBox.y
    const constraints = layer.constraints.vertical
    switch (constraints) {
        case 'MIN':
        case 'CENTER':
        case 'STRETCH':
            return {
                top: top + 'px',
            }
        case 'SCALE':
            return {
                top: (top / parentAbsoluteBoundingBox.height) * 100 + '%',
            }
        case 'MAX':
            return {}
    }
}
