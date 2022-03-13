import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { colors } from "../../App.styled";

const MotionFlex = motion(Flex);

export const ProjectsStyled = styled(MotionFlex)`
  .cardCont {
    position: relative;
  }
  .card {
    background-repeat: no-repeat;
    background-size: cover;
    /* transition: 2s; */

    img {
      transition: 0.4s;
    }
  }

  .card:hover {
    background-image: none;

    img {
      opacity: 0;
    }
  }

  .card:hover + .text {
    opacity: 1;
  }

  .card img:hover ~ .text {
    opacity: 1;
  }

  .text {
    /* text-align: center; */
    /* width: 100%;
    height: 100%; */
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    opacity: 0;
    transition: 0.4s;

    p {
      font-size: 2rem;
    }
    p:last-child {
      font-size: 1rem;
      color: ${colors.dark700};
    }
  }
`;
