import React from "react";
import { AboutStyled } from "./About.styled";
import profilePic from "../../media/profile_pic.png";
import { Image, Text, Flex, Heading } from "@chakra-ui/react";
import { fonts, colors } from "../../App.styled";
import { aboutAnim } from "../../utils/animations";
import { Link } from "@chakra-ui/react";
import resume from "../../media/RGG_CV_22_F.pdf";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MotionFlex } from "../Home/Home.styled";

const About = () => {
  return (
    <>
      <AboutStyled
        variants={aboutAnim}
        exit="pageExit"
        initial="pageInitial"
        animate="pageEnter"
        minH="95vh"
        flexDirection={["column", "column", "row"]}
        justify="center"
        align="center"
        my={[10, 0]}
      >
        <Image src={profilePic} alt="Picture of Greger Gundersen" />
        <Flex p="10" w={["90vw", "35vw"]} direction="column">
          <Heading fontSize="2.4rem" fontFamily={fonts.heading}>
            Greger Gundersen
          </Heading>
          <Text fontSize="1.3rem" py="4">
            Hi! I'm Greger, a 26 year old web developer from Arendal. I live in
            a cozy apartment with my fiancé and our two cats while finishing up
            my degree in Frontend development at Noroff. In my spare time I play
            games, go to concerts and lots more!
          </Text>
          <Text fontSize="1.3rem">
            I have from a young age had an interest in how things work which I
            think naturally drew me towards technology. For the last two or so
            years coding has been a huge part of my life and I absolutley love
            it!
          </Text>
          <Link
            fontWeight="bold"
            mt="1"
            fontSize="1.2rem"
            color={colors.dark700}
            href={resume}
            isExternal
          >
            My resume(PDF)
          </Link>
          <MotionFlex
            id="seeWork"
            align="center"
            justify="space-between"
            fontSize="1.2rem"
            px="10"
            py="3"
            border="2px"
            borderColor={colors.dark700}
            w="13rem"
            my="3"
          >
            <Link mr="2" _hover={{ textDecoration: "none" }} href="/projects">
              Projects
            </Link>
            <AiOutlineArrowRight
              _hover={{
                transform: "rotate(90deg)",
              }}
            />
          </MotionFlex>
        </Flex>
      </AboutStyled>
    </>
  );
};

export default About;
