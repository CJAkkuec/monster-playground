function getBoundingBox(entityPosition, entityWidth, entityHeight) {
  return {
    top: entityPosition.y,
    left: entityPosition.x,
    right: 1000 - entityPosition.x - entityWidth,
    bottom: 1000 - entityPosition.y - entityHeight,
  };
}

export default getBoundingBox;
