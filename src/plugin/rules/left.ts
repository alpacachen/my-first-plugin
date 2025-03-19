export const convertLeft = (layer: SceneNode, leftParentId: string, parent: SceneNode | null) => {
    if (layer.id === leftParentId) {
        return {}
    }
    return {
        left: (layer.absoluteBoundingBox?.x || 0) - (parent?.absoluteBoundingBox?.x || 0) + 'px',
    }
}
