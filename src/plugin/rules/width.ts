import { CSSProperties } from "react"
import { getLayerAbsoluteRenderBounds } from "./util"

export const convertWidth = (layer: SceneNode): CSSProperties => {
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (layerAbsoluteBoundingBox?.width) {
        return { width: layerAbsoluteBoundingBox.width + 'px' }
    }
    return {}
}