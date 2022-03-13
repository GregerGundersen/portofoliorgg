import React from "react";
import { Link } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text, Center, Flex } from "@chakra-ui/layout";
import { HomeStyled } from "./Home.styled";
import Introduction from "./Introduction/Introduction";
import { homeAnimations } from "../../utils/animations";
import { motion } from "framer-motion";
import { colors } from "../../App.styled";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MotionFlex } from "./Home.styled";

const Home = () => {
  return (
    <HomeStyled
      display="flex"
      justify="center"
      align="center"
      direction="column"
      minH="95vh"
      w="100vw"
      variants={homeAnimations}
      exit="pageExit"
      initial="pageInitial"
      animate="pageEnter"
    >
      <Introduction />
      <MotionFlex
        id="seeWork"
        align="center"
        justify="space-between"
        fontSize="1.2rem"
        px="10"
        py="3"
        border="2px"
        borderColor={colors.dark700}
      >
        <Link mr="2" _hover={{ textDecoration: "none" }} href="/about">
          About Me
        </Link>
        <AiOutlineArrowRight
          _hover={{
            transform: "rotate(90deg)",
          }}
        />
      </MotionFlex>
    </HomeStyled>
  );
};

export default Home;
