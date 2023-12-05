import { Flex, Heading, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="#2ecc71"
      color="white"
      boxShadow="md"
      rounded="lg"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      p={24}
    >
      <Flex maxW="screen-xl" mx="auto" w="full" align="center">
        <NextLink href="/" passHref>
          <Link _hover={{ textDecor: "none" }}>
            <Heading as="h1" fontSize="xl" fontWeight="bold">
              NewsHub
            </Heading>
          </Link>
        </NextLink>
        <Spacer />
        <Flex as="nav">
          <NextLink href="/" passHref>
            <Link mx={44} _hover={{ textDecor: "underline" }}>
              Home
            </Link>
          </NextLink>
          <NextLink href="/latest" passHref>
            <Link mx={44} _hover={{ textDecor: "underline" }}>
              Latest
            </Link>
          </NextLink>
          <NextLink href="/categories" passHref>
            <Link mx={44} _hover={{ textDecor: "underline" }}>
              Categories
            </Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link mx={44} _hover={{ textDecor: "underline" }}>
              About
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link mx={44} _hover={{ textDecor: "underline" }}>
              Contact
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
