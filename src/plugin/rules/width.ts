import { CSSProperties } from "react"
import { strokeAvailable } from "./util"

export const convertWidth = (layer: SceneNode): CSSProperties => {
    if ('width' in layer) {
        if (strokeAvailable(layer) && 'strokeTopWeight' in layer) {
            const { strokeRightWeight, strokeLeftWeight, strokeAlign } = layer
            switch (strokeAlign) {
                case 'INSIDE':
                    return { width: layer.width + 'px' }
                case 'OUTSIDE':
                    return { width: layer.width + strokeRightWeight + strokeLeftWeight + 'px' }
                case 'CENTER':
                    return { width: layer.width + strokeRightWeight / 2 + strokeLeftWeight / 2 + 'px' }
            }
        }
        return { width: layer.width + 'px' }
    }
    return {}
}