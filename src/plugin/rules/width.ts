import { CSSProperties } from "react"
import { getLayerAbsoluteRenderBounds } from "./util"

export const convertWidth = (layer: SceneNode): CSSProperties => {
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (!layerAbsoluteBoundingBox) {
        return {}
    }
    if (layer.type == 'TEXT') {
        const { textAutoResize } = layer
        switch (textAutoResize) {
            case 'NONE':
            case 'TRUNCATE':
            case 'HEIGHT':
                return {
                    width: layerAbsoluteBoundingBox.width + 'px',
                }
            case 'WIDTH_AND_HEIGHT':
                return {}

        }
    }
    if (!('constraints' in layer)) {
        return {}
    }
    const constraints = layer.constraints.horizontal
    switch (constraints) {
        case 'MIN':
        case 'MAX': {
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