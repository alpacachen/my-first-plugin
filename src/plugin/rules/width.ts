import { CSSProperties } from "react"
import { getLayerAbsoluteRenderBounds } from "./util"

export const convertWidth = (layer: SceneNode): CSSProperties => {
    if (!('constraints' in layer)) {
        return {}
    }
    const constraints = layer.constraints.horizontal
    switch (constraints) {
        case 'MIN':
        case 'MAX': {
            const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
            if (layerAbsoluteBoundingBox?.width) {
                return { width: layerAbsoluteBoundingBox.width + 'px' }
            }
            return {}
        }
        case 'CENTER':
        case 'STRETCH':
        case 'SCALE':
            return {}
    }
}