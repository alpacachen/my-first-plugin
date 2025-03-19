import { CSSProperties } from "react"
import { strokeAvailable } from "./util"

export const convertHeight = (layer: SceneNode): CSSProperties => {
    if ('height' in layer) {
        if (strokeAvailable(layer) && 'strokeTopWeight' in layer) {
            const { strokeTopWeight, strokeBottomWeight, strokeAlign } = layer
            switch (strokeAlign) {
                case 'INSIDE':
                    return { height: layer.height + 'px' }
                case 'OUTSIDE':
                    return { height: layer.height + strokeTopWeight + strokeBottomWeight + 'px' }
                case 'CENTER':
                    return { height: layer.height + strokeTopWeight / 2 + strokeBottomWeight / 2 + 'px' }
            }
        }
        return { height: layer.height + 'px' }
    }
    return {}
}