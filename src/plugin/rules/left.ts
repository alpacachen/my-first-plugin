import { getLayerAbsoluteRenderBounds } from "./util"

export const convertLeft = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    // figma 绝对定位是起点不带边框，但是 html 带
    const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    return {
        left: (layerAbsoluteBoundingBox?.x || 0) - (parentAbsoluteBoundingBox?.x || 0) + 'px',
    }
}
