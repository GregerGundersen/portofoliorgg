import styled from "styled-components";
import { Flex, Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { colors } from "../../App.styled";

export const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export const HomeStyled = styled(MotionFlex)`
  svg,
  #seeWork {
    transition: 0.6s;
  }

  #seeWork:hover {
    background-color: ${colors.dark700};
    color: white;

    svg {
      transform: rotate(90deg);
    }
  }
`;
