function iceCreamCollisionCheck(
  myMonsterBox,
  iceCreamBox,
  iceCreamWidth,
  monsterWidth
) {
  if (iceCreamBox.left > 0 && iceCreamBox.right <= 1000) {
    return (
      //This looks pretty stupid
      //...but it works
      Number(iceCreamBox.left) + Number(iceCreamWidth) >=
        Number(myMonsterBox.left) &&
      Number(iceCreamBox.left) <=
        Number(myMonsterBox.left) + Number(monsterWidth) &&
      Number(iceCreamBox.top) + Number(iceCreamWidth) >=
        Number(myMonsterBox.top) &&
      Number(iceCreamBox.top) <= Number(myMonsterBox.top) + Number(monsterWidth)
    );
  }
}

module.exports = iceCreamCollisionCheck;
