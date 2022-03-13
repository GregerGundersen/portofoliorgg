import React from "react";
import { StyledIntroduction } from "./StyledIntroduction";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { colors, fonts } from "../../../App.styled";

const Introduction = () => {
  const bgColor = useColorModeValue(colors.dark900, "gray.50");
  const secondaryColor = useColorModeValue(
    colors.textColorDark,
    colors.textColorLight
  );

  return (
    <StyledIntroduction>
      <Text
        lineHeight="48px"
        color={secondaryColor}
        fontSize="3rem"
        marginBottom="10%"
        fontFamily={fonts.heading}
      >
        Hello! I'm <Text as="span">Greger</Text>,<br /> Nice to meet you!
      </Text>
    </StyledIntroduction>
  );
};

export default Introduction;
