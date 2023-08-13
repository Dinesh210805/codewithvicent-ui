import { Flex, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { myAPIClient } from "../../api/axiosInstance";
import { HomeInfo, tutorialsData } from "../../api/fakeApi";
import Course from "../../components/layout/course/Course";
import Hero from "../../components/layout/hero/Hero";
import HomeComponent from "../../components/uicomponents/homecomponent/HomeComponent";
import { AuthContext, AuthContextType } from "../../store/AuthContext";
import { PrimaryBasicColor, PrimaryColor } from "../../theme/GlobalStyles";

export const Home = () => {
  const isLargeDevice = useBreakpointValue({ base: false, md: true, lg: true });
  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext) ?? ({} as AuthContextType);
  const [user, setUser] = useState<any>([]);

  // WHEN USER SIGNED IN WITH GOOGLE ************************************************

  const getLogedInUser = async () => {
    try {
      const res = await myAPIClient.get(`/auth/login/success`, {
        withCredentials: true,
      });
      console.log(res.data);
      setIsLoggedIn(true); 
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLogedInUser();
    console.log(user?.user);
    if (
      user?.user?.displayName !== "" &&
      user?.user?.displayName !== undefined
    ) {
      console.log("User is logged in!");
      console.log(user?.user?.displayName);
      setIsLoggedIn(true);
    } else {
      console.log("no user logged in!");
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);
  // WHEN  USER SIGNS IN WITH CUSTOM DETAILS **********************************************

  const logout = async () => {
    try {
      const res = await myAPIClient.get("/auth/logout", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // **************************************************************************************

  // WHEN  USER SIGNS IN WITH CUSTOM DETAILS **********************************************
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext) ?? {} as AuthContextType;

  useEffect(() => {
    console.log(isLoggedIn, setIsLoggedIn);
  }, []);

  return (
    <Flex bg="#f8f8f8" flexDirection={"column"}>
      <Hero />
      <Box>
        <Flex
          p={{ base: 5, md: 10, lg: 20 }}
          bg="white"
          alignItems={"center"}
          justifyContent="center"
          flexDir={"column"}
        >
          {/* CHECKOUT OUT WISTIA FOR VIDEO HOSTING AFTER INCLUDING ACTUAL VIDEO */}
          <Box bgColor={PrimaryBasicColor}>
            <video width="720" height="450" controls>
              <source
                src="https://dsqqu7oxq6o1v.cloudfront.net/preview-9650dW8x3YLoZ8.mp4"
                type="video/mp4"
              />
              <source
                src="https://dsqqu7oxq6o1v.cloudfront.net/preview-9650dW8x3YLoZ8.mp4"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
            <Text
              textAlign={"center"}
              color={PrimaryColor}
              fontWeight={"bold"}
              my={3}
              onClick={logout}
            >
              Hi {user ? user?.user?.displayName : "There"}
            </Text>
            <Box display={"flex"} alignItems="center" justifyContent={"center"}>
              <img src={user?.user?.photos[0]?.value} alt="" />
            </Box>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={30} mb={5}>
              I am Vicent Abeinemukama.
            </Text>
            <Box>
              <Text textAlign={"center"}>
                A fullstack web and mobile engineer by passion and with
                experience and expertise to help you master
                {isLargeDevice && <br />}
                atleast a skill in web and/or mobile development. Whether youre
                a complete beginner, a mid level
                {isLargeDevice && <br />} software developer, or an experienced
                or seniour software engineer, CodeWithVicent is for you.{" "}
                {isLargeDevice && <br />} Be sure you will master atleast a
                skill and it will help you at your job or ace{" "}
                {isLargeDevice && <br />} your first job. I am thrilled teaching
                you how to code.
              </Text>
            </Box>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              gap={5}
              align={"center"}
              justify="center"
              mt={7}
            >
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  5+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Years of Experience
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  250+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Developed Applications
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  1000+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Youtube Audience
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  20
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Top Notch Courses
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box>
          {HomeInfo.map((item: any, index:any) => (
            <HomeComponent key={index} item={item} />
          ))}
        </Box>
        {/* COURSES HERE-- */}
        <Box>
          <Heading textAlign={"center"}>Trending Courses</Heading>
          <Box
            margin={"auto"}
            p={{ base: 1, md: 8, lg: 20 }}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            gap={10}
            flexWrap="wrap"
            w="100%"
            maxW="100%"
          >
            {tutorialsData.map((tutorial: any) => (
              <Course key={tutorial.title} tutorial={tutorial} />
            ))}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
