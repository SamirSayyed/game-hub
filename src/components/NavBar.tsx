import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
