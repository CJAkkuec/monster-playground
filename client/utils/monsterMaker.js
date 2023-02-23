import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import { nanoid } from "nanoid";

function monsterMaker() {
  function getImage() {
    const colors = ["green", "blue", "yellow", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const monsterColor = colors[randomIndex];

    let monsterSrc = "";

    switch (monsterColor) {
      case "green":
        {
          monsterSrc = "./assets/monsters/green.gif";
        }
        break;
      case "purple":
        {
          monsterSrc = "./assets/monsters/purple.gif";
        }
        break;
      case "blue":
        {
          monsterSrc = "./assets/monsters/blue.gif";
        }
        break;
      case "yellow":
        {
          monsterSrc = "./assets/monsters/yellow.gif";
        }
        break;
      default:
        break;
    }

    return monsterSrc;
  }

  const initialMonster = {
    userId: null,
    name: uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
    }),
    emote: "",
    message: "",
    iceCream: 0,
    x: Math.floor(Math.random() * 900),
    y: Math.floor(Math.random() * 900),
    width: 100,
    height: 100,
    img: getImage(),
  };

  return initialMonster;
}

export default monsterMaker;
