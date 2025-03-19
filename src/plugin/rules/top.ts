export const convertTop = (layer: SceneNode, topParentId: string, parent: SceneNode | null) => {
    if (layer.id === topParentId) {
        return {}
    }
    return {
        top: (layer.absoluteBoundingBox?.y || 0) - (parent?.absoluteBoundingBox?.y || 0) + 'px',
    }
}
