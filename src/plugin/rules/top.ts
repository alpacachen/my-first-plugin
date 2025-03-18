export const convertTop = (layer: SceneNode, topParentId: string) => {
    if (layer.id === topParentId) {
        return {}
    }
    return {
        top: layer.y + 'px',
    }
}
