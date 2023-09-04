import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoImage from "../../../assets/logoimg.png";

type LogoProps = {
  w: string;
  color: string[];
};

export const Logo = (props: LogoProps) => {
  return (
    <Box {...props} >
      <Link to="/">
        <Text fontSize={45} color={"orange"} fontWeight="bold">
          <Image src={LogoImage} h={{base: 5, md: 6, lg: 10}} alt="logo" />
        </Text>
      </Link>
    </Box>
  );
};
