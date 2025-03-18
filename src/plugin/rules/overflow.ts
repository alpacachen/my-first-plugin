export const convertOverflow = (layer: SceneNode) => {
    if ('clipsContent' in layer) {
        return { overflow: layer.clipsContent ? 'hidden' : 'visible' }
    }
    return {}
}
