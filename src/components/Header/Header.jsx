import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode";
import { Text, Box, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import { colors } from "../../App.styled";
import { BsFillMoonFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const bgColor = useColorModeValue(colors.lightBg, colors.darkBg);
  const bgColor = useColorModeValue(colors.dark900, "gray.50");
  const secondaryColor = useColorModeValue(
    colors.textColorLight,
    colors.textColorDark
  );

  return (
    <HeaderStyled
      bg={bgColor}
      w="100vw"
      h="100px"
      justify="space-between"
      align="center"
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      exit={{ y: -120 }}
    >
      <Link to="/">
        <Text fontSize="1.8rem" px="3" color={secondaryColor}>
          Greger
        </Text>
      </Link>
      <UnorderedList display="flex" color={secondaryColor}>
        <ListItem>
          <Link color={secondaryColor} to="/">
            Home
          </Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link to="/about">About</Link>{" "}
        </ListItem>
        {/* <ListItem>
          {" "}
          <Link to="/stack">My stack</Link>{" "}
        </ListItem> */}
        <ListItem>
          {" "}
          <Link to="/projects">Projects</Link>{" "}
        </ListItem>
        {/* <ListItem>
          {" "}
          <Link to="/contact">Contact</Link>{" "}
        </ListItem> */}
        <ListItem display="flex" alignItems="center">
          {" "}
          {colorMode === "dark" ? (
            <WiDaySunny
              size="2rem"
              cursor="pointer"
              onClick={toggleColorMode}
              color={secondaryColor}
            />
          ) : (
            <BsFillMoonFill
              size="1.6rem"
              cursor="pointer"
              onClick={toggleColorMode}
              color={secondaryColor}
            />
          )}
        </ListItem>
        <UnorderedList />
      </UnorderedList>
    </HeaderStyled>
  );
};

export default Header;
