import { CSSProperties } from "react"
import { getLayerAbsoluteRenderBounds } from "./util"

export const convertHeight = (layer: SceneNode): CSSProperties => {
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (!layerAbsoluteBoundingBox) {
        return {}
    }
    if (layer.type == 'TEXT') {
        const { textAutoResize } = layer
        switch (textAutoResize) {
            case 'NONE':
            case 'TRUNCATE':
                return {
                    height: layerAbsoluteBoundingBox.height + 'px',
                }
            case 'HEIGHT':
            case 'WIDTH_AND_HEIGHT':
                return {}

        }
    }
    if (!('constraints' in layer)) {
        return {}
    }
    const constraints = layer.constraints.vertical
    switch (constraints) {
        case 'MIN':
        case 'MAX': {
            if (layerAbsoluteBoundingBox?.height) {
                return { height: layerAbsoluteBoundingBox.height + 'px' }
            }
            return {}
        }
        case 'CENTER':
        case 'STRETCH':
        case 'SCALE':
            return {}
    }
}