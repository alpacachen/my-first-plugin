import { getLayerAbsoluteRenderBounds } from "./util"

export const convertLeft = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    if (!('constraints' in layer)) {
        return {}
    }
    const constraints = layer.constraints.horizontal
    switch (constraints) {
        case 'CENTER':
        case 'STRETCH':
        case 'MIN': {
            const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
            const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
            return {
                left: (layerAbsoluteBoundingBox?.x || 0) - (parentAbsoluteBoundingBox?.x || 0) + 'px',
            }
        }
        case 'SCALE': {
            const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
            const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
            return {
                left: (((layerAbsoluteBoundingBox?.x || 0) - (parentAbsoluteBoundingBox?.x || 0)) / (parent?.width || 1)) * 100 + '%',
            }
        }
        case 'MAX': {
            return {}
        }
    }
    // figma 绝对定位是起点不带边框，但是 html 带

}
