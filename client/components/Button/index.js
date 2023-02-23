import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background: var(--gum);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: var(--cream);
`;

function Button({ onClick, action, fontFredoka }) {
  return (
    <StyledButton
      onClick={() => {
        onClick(action);
      }}
      className={fontFredoka}
    >
      {action === "happy"
        ? "Happy!"
        : action === "heart"
        ? "Like!"
        : action === "star"
        ? "Excite!"
        : action === "get"
        ? "Random"
        : null}
    </StyledButton>
  );
}

export default Button;
