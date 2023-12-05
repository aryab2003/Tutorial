import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="#2ecc71"
      color="white"
      boxShadow="md"
      rounded="lg"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      p={24}
    >
      <Flex maxW="screen-xl" mx="auto" w="full" align="center">
        <Flex as="nav">
          <NextLink href="/" passHref>
            <ChakraLink _hover={{ textDecoration: "underline" }} mx={44}>
              About
            </ChakraLink>
          </NextLink>
          <NextLink href="/privacy" passHref>
            <ChakraLink _hover={{ textDecoration: "underline" }} mx={44}>
              Privacy Policy
            </ChakraLink>
          </NextLink>
          <NextLink href="/licensing" passHref>
            <ChakraLink _hover={{ textDecoration: "underline" }} mx={44}>
              Licensing
            </ChakraLink>
          </NextLink>
          <NextLink href="/contact" passHref>
            <ChakraLink _hover={{ textDecoration: "underline" }} mx={44}>
              Contact
            </ChakraLink>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
