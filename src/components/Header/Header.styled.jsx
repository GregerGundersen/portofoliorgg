import styled from "styled-components";
import { Flex, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export const HeaderStyled = styled(MotionFlex)`
  ul {
    list-style: none;
    font-size: 1.8rem;
    margin-left: 0;

    li {
      padding: 0 12px;
    }
  }
`;
