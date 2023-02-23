import styled from "styled-components";

const AppWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
  ${({ page }) => (page === "create" ? "align-content: center;" : null)}
  ${({ page }) => (page === "create" ? "gap: 6rem;" : null)}
  background: var(--butter);
`;

function Layout({ children, page }) {
  return <AppWrapper page={page}>{children}</AppWrapper>;
}

export default Layout;
