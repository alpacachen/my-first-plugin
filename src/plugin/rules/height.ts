import { CSSProperties } from "react"
import { getLayerAbsoluteRenderBounds } from "./util"

export const convertHeight = (layer: SceneNode): CSSProperties => {
    const layerAbsoluteBoundingBox = getLayerAbsoluteRenderBounds(layer)
    if (layerAbsoluteBoundingBox?.height) {
        return { height: layerAbsoluteBoundingBox.height + 'px' }
    }
    return {}
}