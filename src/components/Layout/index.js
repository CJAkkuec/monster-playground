import styled from "styled-components";

const AppWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--butter);
`;

function Layout({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}

export default Layout;
