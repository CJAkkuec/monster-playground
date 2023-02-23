import Button from "../components/Button";
import Layout from "../components/Layout";
import Monster from "../components/Monster";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: var(--cream);
  background: var(--gum);
  box-shadow: 5px 5px 0px #bd4656;
  padding: 1rem 2rem;
  width: fit-content;
`;

function CreatePage({
  onRandomizeMonster,
  myMonster,
  fontFredoka,
  onSubmitId,
}) {
  return (
    <Layout page="create">
      <h1 className={fontFredoka}>Create your monster</h1>
      {myMonster && <Monster monster={myMonster} randomizeMode />}
      <Button
        action="get"
        onClick={onRandomizeMonster}
        fontFredoka={fontFredoka}
      />
      <StyledLink
        href="/playground"
        onClick={onSubmitId}
        className={fontFredoka}
      >
        Play
      </StyledLink>
    </Layout>
  );
}

export default CreatePage;
