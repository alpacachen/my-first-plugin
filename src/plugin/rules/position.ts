export const convertPosition = (layer: SceneNode) => {
    // 如果有父元素，那么一定是 absolute
    if ('parent' in layer) {
        return { position: 'absolute' as const }
    }
    // 如果有子元素，那么一定是 relative
    if ('children' in layer) {
        return { position: 'relative' as const }
    }
    
    return {}
}
