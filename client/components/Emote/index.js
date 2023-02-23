import styled from "styled-components";

const StyledImg = styled.img`
  width: 20%;
`;

function Emote({ emote }) {
  let emoteSrc = "";

  switch (emote) {
    case "happy":
      {
        emoteSrc = "./assets/emotes/happy.png";
      }
      break;
    case "heart":
      {
        emoteSrc = "./assets/emotes/heart.png";
      }
      break;
    case "star":
      {
        emoteSrc = "./assets/emotes/star.png";
      }
      break;
    case "get":
      {
        emoteSrc = "./assets/emotes/get.png";
      }
      break;
    default:
      break;
  }

  return <>{emote !== null && <StyledImg src={emoteSrc} alt="An emote" />}</>;
}

export default Emote;
