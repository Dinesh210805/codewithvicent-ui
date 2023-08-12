import {
  Flex,
  Box,
  Heading,
  Code,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PrimaryYellowColor } from "../../../theme/GlobalStyles";

const Hero = () => {
  const isLargeDevice = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <Box>
      <Box
        w="100vw"
        h={570}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        bg='linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("https://i.pinimg.com/originals/51/bc/09/51bc0996c7a74ff83b9b2dfc24a45b7f.jpg") center'
        backgroundSize={"cover"}
        className="headerSection"
        p={3}
      >
        <Box>
          <Text
            fontSize={24}
            color="white"
            mb={4}
            style={{
              textAlign: "center",
            }}
          >
            Welcome to
          </Text>
          <Heading
            overflowY={"hidden"}
            color="white"
            fontSize={{ base: 35, md: 45, lg: 55 }}
            mb={4}
            style={{ textAlign: "center" }}
          >
            <span style={{ color: PrimaryYellowColor }}>CODE</span> WITH{" "}
            <span style={{ color: PrimaryYellowColor }}>VICENT</span>
          </Heading>
          <Text
            fontSize={{ base: 18, md: 20, lg: 22 }}
            color="white"
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            We are an AI powered web-based application where anyone can learn to
            {isLargeDevice && <br />} code for free and with mentorship. Learn a
            Skill Today and Thank Me
            {isLargeDevice && <br />} Later
          </Text>
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Link to="/courses">
              <Button
                rightIcon={<FaArrowRight />}
                // colorScheme={""}
                backgroundColor="transparent"
                border={`1px solid ${PrimaryYellowColor}`}
                color="white"
                variant="solid"
                mt={5}
                overflowY={"hidden"}
                p={5}
                height={8}
                borderRadius={5}
                _hover={{ backgroundColor: "orange", color: "white" }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
