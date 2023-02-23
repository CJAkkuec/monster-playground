import styled from "styled-components";

const Form = styled.form``;

function MessageForm({ onSubmit, onChange, message, value }) {
  return (
    <Form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        maxLength={30}
        placeholder="30 char max"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Form>
  );
}

export default MessageForm;
