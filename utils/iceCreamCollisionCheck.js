function iceCreamCollisionCheck(myMonsterBox, iceCreamBox, iceCreamWidth) {
  if (iceCreamBox.left > 0 && iceCreamBox.right <= 1000) {
    return (
      myMonsterBox.left > iceCreamBox.left - iceCreamWidth &&
      myMonsterBox.left < iceCreamBox.left + iceCreamWidth &&
      myMonsterBox.top + iceCreamWidth > iceCreamBox.top - iceCreamWidth &&
      myMonsterBox.top < iceCreamBox.top + iceCreamWidth
    );
  }
}

export default iceCreamCollisionCheck;
