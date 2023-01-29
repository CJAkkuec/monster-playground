import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background: var(--gum);
  width: 100px;
  height: 100px;
  font-size: 1.5rem;
  color: var(--cream);
`;

function Button({ onClick, action }) {
  return (
    <StyledButton
      onClick={() => {
        onClick(action);
      }}
    >
      {action === "happy"
        ? "Happy!"
        : action === "heart"
        ? "Like!"
        : action === "star"
        ? "Excite!"
        : null}
    </StyledButton>
  );
}

export default Button;
