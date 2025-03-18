export const convertLeft = (layer: SceneNode, leftParentId: string) => {
    if (layer.id === leftParentId) {
        return {}
    }
    return {
        left: layer.x + 'px',
    }
}
