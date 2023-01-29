import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

import { Fredoka_One } from "@next/font/google";
import { Covered_By_Your_Grace } from "@next/font/google";

const fredoka = Fredoka_One({ weight: "400", subsets: ["latin"] });
const yourGrace = Covered_By_Your_Grace({ weight: "400", subsets: ["latin"] });

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: var(--cream);
  background: var(--gum);
  box-shadow: 5px 5px 0px #bd4656;
  padding: 1rem 2rem;
  width: fit-content;
`;

const Headline = styled.div`
  position: relative;
`;

const Monster = styled(motion.h1)`
  position: absolute;
  z-index: 1;
  top: -160px;
  left: 220px;
  font-size: 12rem;
  margin: 0;
  color: var(--gum);
  text-shadow: 5px 5px 0px #bd4656;
`;

const Playground = styled(motion.h1)`
  font-size: 8rem;
  margin: 0;
  color: var(--fresh);
  text-shadow: 5px 5px 0px var(--gum);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export default function HomePage() {
  return (
    <Layout>
      <Wrapper>
        <Headline>
          <Monster
            className={yourGrace.className}
            initial={{ opacity: 0, scale: 0.1, rotate: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{
              type: "spring",
              delay: 1.5,
              damping: 20,
              stiffness: 1000,
              restDelta: 0.001,
            }}
          >
            Monster
          </Monster>
          <Playground
            className={fredoka.className}
            initial={{ opacity: 0, scale: 0.1, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              damping: 6,
              stiffness: 200,
              restDelta: 0.001,
            }}
          >
            Playground
          </Playground>
        </Headline>
        <motion.div
          initial={{ y: -1000, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            damping: 20,
            stiffness: 1000,
            restDelta: 0.001,
          }}
        >
          <StyledLink href="/playground">Play</StyledLink>
        </motion.div>
      </Wrapper>
    </Layout>
  );
}
