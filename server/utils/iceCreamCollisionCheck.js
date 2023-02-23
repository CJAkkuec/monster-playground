function iceCreamCollisionCheck(
  myMonsterBox,
  iceCreamBox,
  iceCreamWidth,
  monsterWidth
) {
  if (iceCreamBox.left > 0 && iceCreamBox.right <= 1000) {
    return (
      /*       
      myMonsterBox.left > iceCreamBox.left - iceCreamWidth &&
      myMonsterBox.left < iceCreamBox.left + iceCreamWidth &&
      myMonsterBox.top + iceCreamWidth > iceCreamBox.top - iceCreamWidth &&
      myMonsterBox.top < iceCreamBox.top + iceCreamWidth 
      */

      iceCreamBox.left + iceCreamWidth >= myMonsterBox.left &&
      iceCreamBox.left <= myMonsterBox.left + monsterWidth &&
      iceCreamBox.top + iceCreamWidth >= myMonsterBox.top &&
      iceCreamBox.top <= myMonsterBox.top + monsterWidth
    );
  }
}

module.exports = iceCreamCollisionCheck;
