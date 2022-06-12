import React from "react";
import { ProjectsStyled } from "./Projects.styled";
import { aboutAnim } from "../../utils/animations";
import { fonts } from "../../App.styled";
import {
  Image,
  Text,
  Heading,
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import SimpleSlider from "./Carousel";
import tft from "../../media/projects/tft_db-min.png";
import tft2 from "../../media/projects/tft_db_2-min.png";
import diceGame from "../../media/projects/dice_game-min.png";
import csm from "../../media/projects/csm-min.png";
import csm2 from "../../media/projects/csm_2-min.png";
import csm3 from "../../media/projects/csm_3-min.png";
import semesterProj from "../../media/projects/semester_project-min.png";
import semesterProj2 from "../../media/projects/semester_project_2-min.png";
import semesterProj3 from "../../media/projects/semester_project_3-min.png";
import projectExam2 from "../../media/projects/Project_exam_2.png";
import jsfca from "../../media/projects/jsfca.png";

const Projects = () => {
  const {
    isOpen: isTftOpen,
    onOpen: onTftOpen,
    onClose: onTftClose,
  } = useDisclosure({ id: "tft" });
  const {
    isOpen: isDiceOpen,
    onOpen: onDiceOpen,
    onClose: onDiceClose,
  } = useDisclosure({ id: "dice" });
  const {
    isOpen: isCsmOpen,
    onOpen: onCsmOpen,
    onClose: onCsmClose,
  } = useDisclosure({ id: "csm" });
  const {
    isOpen: isSmOpen,
    onOpen: onSmOpen,
    onClose: onSmClose,
  } = useDisclosure({ id: "sm" });
  const {
    isOpen: isPeOpen,
    onOpen: onPeOpen,
    onClose: onPeClose,
  } = useDisclosure({ id: "Pe" });
  const {
    isOpen: isJSFCAOpen,
    onOpen: onJSFCAOpen,
    onClose: onJSFCAClose,
  } = useDisclosure({ id: "JSFCA" });

  return (
    <ProjectsStyled
      exit="pageExit"
      initial="pageInitial"
      animate="pageEnter"
      variants={aboutAnim}
      justify="center"
      align="center"
      maxW="1200px"
      minH="95vh"
      margin="auto"
    >
      <Box>
        <Heading
          textAlign="center"
          my="10"
          fontSize="2.4rem"
          fontFamily={fonts.heading}
        >
          Projects
        </Heading>
        <Flex justify="center" align="center" wrap="wrap">
          <Box
            // className="cardCont"
            position="relative"
            cursor="pointer"
            onClick={onTftOpen}
            h="300px"
            w="390px"
          >
            <Box h="300px" className="card">
              {/* bgImg={tft} */}
              <Image src={tft} />
            </Box>

            <Box className="text">
              <Text>Teamfight Tactics DB</Text>
              <Text>Strapi / React / Styled-Components</Text>
            </Box>
          </Box>

          <Box
            h="300px"
            w="390px"
            onClick={onDiceOpen}
            className="cardCont"
            cursor="pointer"
          >
            <Box h="300px" className="card">
              <Image src={diceGame} />
            </Box>
            <Box className="text">
              <Text>Dice Game</Text>
              <Text>React / CSS</Text>
            </Box>
          </Box>
          <Box
            className="cardCont"
            h="300px"
            w="390px"
            onClick={onCsmOpen}
            cursor="pointer"
          >
            <Box h="300px" className="card">
              <Image src={csm3} />
            </Box>
            <Box className="text">
              {" "}
              <Text>Community Science Museum</Text>
              <Text>HTML / CSS / JS</Text>
            </Box>
          </Box>
          <Box
            className="cardCont"
            h="300px"
            w="390px"
            onClick={onSmOpen}
            cursor="pointer"
          >
            <Box h="300px" className="card">
              <Image src={semesterProj} />
            </Box>
            <Box className="text">
              <Text>Semester Project</Text>
              <Text>HTML / SCSS / JS</Text>
            </Box>
          </Box>
          <Box
            className="cardCont"
            h="300px"
            w="390px"
            onClick={onPeOpen}
            cursor="pointer"
          >
            <Box h="300px" className="card">
              <Image src={projectExam2} />
            </Box>
            <Box className="text">
              <Text>Project Exam 2</Text>
              <Text>React / Styled Components / Strapi</Text>
            </Box>
          </Box>
          <Box
            className="cardCont"
            h="300px"
            w="390px"
            onClick={onJSFCAOpen}
            cursor="pointer"
          >
            <Box h="300px" className="card">
              <Image src={jsfca} />
            </Box>
            <Box className="text">
              <Text>Javascript Frameworks CA</Text>
              <Text>Next</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* ALL MODALS GO HERE */}
      <Modal
        motionPreset="slideInBottom"
        isOpen={isTftOpen}
        onClose={onTftClose}
      >
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider img1={tft} img2={tft2} />
          <ModalHeader>Teamfight Tactics DB</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This site was built as a practice project for setting up a Strapi
              API. It lists the champions in the game Teamfight Tactics as well
              as their traits and origins.
            </Text>
            <Flex mt="5">
              <Link isExternal href="https://github.com/GregerGundersen/strapi">
                <AiFillGithub size="30" />
              </Link>
              <Link
                isExternal
                href="https://confident-hypatia-cd5ce0.netlify.app/"
                ml="5"
              >
                <HiExternalLink size="32" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isDiceOpen}
        onClose={onDiceClose}
      >
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider img1={diceGame} />
          <ModalHeader>Dice Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              A simple dice game where each play rolls their dice and the first
              one to 20 is the winner! Made using React to practice some simple
              JS logic and React Hooks
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/dicegame"
              >
                <AiFillGithub size="30" />
              </Link>
              <Link
                isExternal
                href="https://elated-khorana-6b9758.netlify.app/"
                ml="5"
              >
                <HiExternalLink size="32" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isCsmOpen}
        onClose={onCsmClose}
      >
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider img1={csm3} img2={csm2} img3={csm} />
          <ModalHeader>Community Science Museum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This site was made for the semester project my first year at
              Noroff. It's a site for a community science museum which is fully
              responsive. The site made in plain HTML,CSS and JS.{" "}
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/SemesterProject"
              >
                <AiFillGithub size="30" />
              </Link>
              <Link
                isExternal
                href="https://elated-khorana-6b9758.netlify.app/"
                ml="5"
              >
                <HiExternalLink size="32" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal motionPreset="slideInBottom" isOpen={isSmOpen} onClose={onSmClose}>
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider
            img1={semesterProj}
            img2={semesterProj2}
            img3={semesterProj3}
          />
          <ModalHeader>E-Commerce site</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This site was made for our second semester project. It is an
              e-commerce site made with HTML/SCSS and JS. The site has a lot of
              functionality, such as login, cart and an admin page where you can
              add and delete products.
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/rolf-greger-gundersen-semester-project-2"
              >
                <AiFillGithub size="30" />
              </Link>
              <Link
                isExternal
                href="https://adoring-blackwell-737bf7.netlify.app/"
                ml="5"
              >
                <HiExternalLink size="32" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isDiceOpen}
        onClose={onDiceClose}
      >
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider img1={diceGame} />
          <ModalHeader>Dice Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              A simple dice game where each play rolls their dice and the first
              one to 20 is the winner! Made using React to practice some simple
              JS logic and React Hooks
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/dicegame"
              >
                <AiFillGithub size="30" />
              </Link>
              <Link
                isExternal
                href="https://elated-khorana-6b9758.netlify.app/"
                ml="5"
              >
                <HiExternalLink size="32" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal motionPreset="slideInBottom" isOpen={isPeOpen} onClose={onPeClose}>
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider
            img1={projectExam2}
            img2={projectExam2}
            img3={projectExam2}
          />
          <ModalHeader>Project Exam 2</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This site was made for the project exam in my final year at
              Noroff. It includes responsive design and many features.
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/projectexam2"
              >
                <AiFillGithub size="30" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        motionPreset="slideInBottom"
        isOpen={isJSFCAOpen}
        onClose={onJSFCAClose}
      >
        <ModalOverlay />
        <ModalContent>
          <SimpleSlider img1={jsfca} img2={jsfca} img3={jsfca} />
          <ModalHeader>Project Exam 2</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              This site was made for the project exam in my final year at
              Noroff. It includes responsive design and many features.
            </Text>
            <Flex mt="5">
              <Link
                isExternal
                href="https://github.com/GregerGundersen/projectexam2"
              >
                <AiFillGithub size="30" />
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ProjectsStyled>
  );
};

export default Projects;
