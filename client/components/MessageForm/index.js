import styled from "styled-components";

const Form = styled.form``;

function MessageForm({ onSubmit, onChange, message, value }) {
  return (
    <Form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        maxLength={30}
        placeholder="30 char max"
        value={message !== null ? "Wait ..." : value}
        onChange={(event) => onChange(event.target.value)}
        disabled={message !== null}
      />
    </Form>
  );
}

export default MessageForm;
