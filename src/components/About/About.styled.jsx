import styled from "styled-components";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../App.styled";

const MotionFlex = motion(Flex);

export const AboutStyled = styled(MotionFlex)`
  img {
    -webkit-filter: drop-shadow(1px 1px 1px 40px #0f0f0f);
    filter: drop-shadow(0.5rem 0.5rem 0.55rem rgba(0, 0, 20, 0.61));
  }
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
