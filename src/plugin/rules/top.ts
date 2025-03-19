import { getLayerAbsoluteRenderBounds } from "./util"

export const convertTop = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    if (layer.id === topParentId) {
        return {}
    }
    const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    return {
        top: (layerAbsoluteBoundingBox?.y || 0) - (parentAbsoluteBoundingBox?.y || 0) + 'px',
    }
}
