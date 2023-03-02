import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { 
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
 } from "@chakra-ui/react";

 import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="https://billiken.lat/wp-content/uploads/2022/02/harry.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>Harry Potter</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Catalogue
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Harry"}`}>
                  <MenuItem>Harry</MenuItem>
                </Link>
                <Link to={`/category/${"Hermione"}`}>
                  <MenuItem>Hermione</MenuItem>
                </Link>
                <Link to={`/category/${"Ron"}`}>
                  <MenuItem>Ron</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;