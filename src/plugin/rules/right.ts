import { getLayerAbsoluteRenderBounds } from "./util"

export const convertRight = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
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
        case 'MAX': {
            const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
            const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
            return {
                right: (layerAbsoluteBoundingBox?.x || 0) - (parentAbsoluteBoundingBox?.x || 0) + 'px',
            }
        }
        case 'SCALE': {
            const parentAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(parent)
            const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
            return {
                right: (((layerAbsoluteBoundingBox?.x || 0) - (parentAbsoluteBoundingBox?.x || 0)) / (parent?.width || 1)) * 100 + '%',
            }
        }
        case 'MIN': {
            return {}
        }
    }
    // figma 绝对定位是起点不带边框，但是 html 带

}
