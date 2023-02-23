// Zustand
const { createStore } = require("zustand/vanilla");

const playgroundWidth = 1000;
const playgroundHeight = 1000;
const monsterWidth = 100;
const monsterHeight = 100;
const iceCreamWidth = 50;
const iceCreamHeight = 50;

// Utils
const getBoundingBox = require("./utils/getBoundingBox");
const iceCreamCollisionCheck = require("./utils/iceCreamCollisionCheck");

// Store
const store = createStore((set, get) => ({
  monstersArray: [],
  updatePosition(monsterObject, move) {
    set({
      monstersArray: get().monstersArray.map((monster) => {
        if (monster.userId === monsterObject.userId) {
          const oldY = monster.y;
          let newY = oldY;
          const oldX = monster.x;
          let newX = oldX;
          const boost = get().boost;

          switch (move) {
            case "ArrowUp":
              newY = oldY - (boost ? 10 : 20);
              if (newY + monsterHeight > playgroundHeight) {
                newY = playgroundHeight - monsterHeight;
              }
              if (newY < 0) newY = 0;
              break;

            case "ArrowDown":
              newY = Number(oldY) + (boost ? 10 : 20);
              if (newY + monsterHeight > playgroundHeight) {
                newY = playgroundHeight - monsterHeight;
              }
              if (newY < 0) newY = 0;

              break;

            case "ArrowLeft":
              newX = oldX - (boost ? 10 : 20);
              if (newX + monsterWidth > playgroundWidth) {
                newX = playgroundWidth - monsterWidth;
              }
              if (newX < 0) newX = 0;
              break;

            case "ArrowRight":
              newX = Number(oldX) + (boost ? 10 : 20);
              if (newX + monsterWidth > playgroundWidth) {
                newX = playgroundWidth - monsterWidth;
              }
              if (newX < 0) newX = 0;
              break;

            default:
              break;
          }
          return { ...monster, y: newY.toString(), x: newX.toString() };
        } else return monster;
      }),
    });
  },
  iceCreamPosition: { x: "-1000", y: "-1000" },
  updateIceCreamPosition(value) {
    set(() => {
      if (value) {
        return {
          iceCreamPosition: {
            x: value.toString(),
            y: value.toString(),
          },
        };
      } else
        return {
          iceCreamPosition: {
            x: Math.floor(Math.random() * 900).toString(),
            y: Math.floor(Math.random() * 900).toString(),
          },
        };
    });
  },
}));
const { getState, setState } = store;

// Socket.io
const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

// IceCream Random Movement
const updateIceCreamPosition = getState().updateIceCreamPosition;
updateIceCreamPosition(-1000);
setTimeout(() => {
  updateIceCreamPosition();
  // check for collision
  io.emit("updateIceCreamPosition", getState().iceCreamPosition);
  setInterval(() => {
    updateIceCreamPosition(-1000);
    io.emit("updateIceCreamPosition", getState().iceCreamPosition);
    setTimeout(() => {
      updateIceCreamPosition();
      // check for collision
      io.emit("updateIceCreamPosition", getState().iceCreamPosition);
    }, 10000);
  }, 20000);
}, 10000);

// Connection  ❌
// Status: Ice Cream doesn't get loaded in immediately
io.on("connection", (socket) => {
  io.emit("updateIceCreamPosition", getState().iceCreamPosition);
  //this doesn't work? maybe the interval is whack

  const monstersArray = getState().monstersArray;
  const monsterObject = socket.handshake.query;

  if (
    monstersArray
      .map((monster) => monster.userId)
      .includes(monsterObject.userId)
  )
    return;

  setState({ monstersArray: [...monstersArray, monsterObject] });

  io.emit("allMonsters", getState().monstersArray);

  //Messages ✅
  socket.on("monsterMessage", ({ message }) => {
    const monstersArray = getState().monstersArray;
    const monsterToUpdate = monstersArray.find(
      (monster) => monster.userId === monsterObject.userId
    );

    const updatedMonsterObject = {
      ...monsterToUpdate,
      message: message,
    };

    const updatedMonstersArray = monstersArray.map((monster) => {
      if (monster.userId === updatedMonsterObject.userId) {
        return updatedMonsterObject;
      } else {
        return monster;
      }
    });

    setState({ monstersArray: updatedMonstersArray });

    io.emit("allMonsters", getState().monstersArray);
  });

  //Emotes ✅
  socket.on("monsterEmote", ({ emote }) => {
    const monstersArray = getState().monstersArray;
    const monsterToUpdate = monstersArray.find(
      (monster) => monster.userId === monsterObject.userId
    );

    const updatedMonsterObject = {
      ...monsterToUpdate,
      emote: emote,
    };

    const updatedMonstersArray = monstersArray.map((monster) => {
      if (monster.userId === updatedMonsterObject.userId) {
        return updatedMonsterObject;
      } else {
        return monster;
      }
    });

    setState({ monstersArray: updatedMonstersArray });

    io.emit("allMonsters", getState().monstersArray);
  });

  //Movement + Collision Check ✅
  socket.on("monsterMove", ({ move }) => {
    const updatePosition = getState().updatePosition;
    updatePosition(monsterObject, move);

    const monstersArray = getState().monstersArray;
    const monsterToCheck = monstersArray.find(
      (monster) => monster.userId === monsterObject.userId
    );

    const currentMonsterPosition = { x: monsterToCheck.x, y: monsterToCheck.y };

    const myMonsterBox = getBoundingBox(
      currentMonsterPosition,
      monsterWidth,
      monsterHeight
    );

    const currentIceCreamPosition = {
      x: getState().iceCreamPosition.x,
      y: getState().iceCreamPosition.y,
    };

    const iceCreamBox = getBoundingBox(
      currentIceCreamPosition,
      iceCreamWidth,
      iceCreamHeight
    );

    console.log(myMonsterBox);
    console.log(iceCreamBox);

    //Something about this is wonky
    if (
      iceCreamCollisionCheck(
        myMonsterBox,
        iceCreamBox,
        iceCreamWidth,
        monsterWidth
      )
    ) {
      const updateIceCreamPosition = getState().updateIceCreamPosition;
      updateIceCreamPosition(-1000);
      io.emit("updateIceCreamPosition", getState().iceCreamPosition);

      const monsterToUpdate = monstersArray.find(
        (monster) => monster.userId === monsterObject.userId
      );

      const newIceCreamNumber = Number(monsterToUpdate.iceCream) + 1;

      const updatedMonsterObject = {
        ...monsterToUpdate,
        iceCream: `${newIceCreamNumber}`,
      };

      const updatedMonstersArray = monstersArray.map((monster) => {
        if (monster.userId === updatedMonsterObject.userId) {
          return updatedMonsterObject;
        } else {
          return monster;
        }
      });

      setState({ monstersArray: updatedMonstersArray });

      io.emit("allMonsters", getState().monstersArray);
    } else {
      io.emit("allMonsters", getState().monstersArray);
    }
  });

  //Disconnect ✅
  socket.on("disconnect", () => {
    const monstersArray = getState().monstersArray;
    const filterId = monsterObject.userId;

    const newMonsterArray = monstersArray.filter(
      (monster) => monster.userId !== filterId
    );
    setState({ monstersArray: newMonsterArray });
    io.emit("allMonsters", getState().monstersArray);
  });
});
