import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  InputGroup,
  InputRightElement,
  Divider,
  CircularProgress,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryColor } from "../../theme/GlobalStyles";
import Logo from "../../assets/logoimg.png";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useLogin from "../../hooks/auth/useLogin";

export default function Login() {
  // LOGIN WITH GOOGLE ********************************************************
  const handleGoogleLogin = () => {
    window.open(
      `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  const navigate = useNavigate();

  // LOGIN WITH CUSTOM DETAILS *****************************************************
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isSuccess, isLoading, error, isError } = useLogin();
  const handleUserLogin = () => {
    mutate({ email, password });
    if (isSuccess) {
      navigate("/");
    } else if (isError) {
      console.log(error);
    }
  };

  // **********************************************************************************

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringPassword, setIsHoveringPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Mouse Over create account
  const handleMouseOver = () => {
    setIsHovering(true);
    // Other logic to handle mouse over event
  };

  // Mouse Over password
  const handleMouseOverPassword = () => {
    setIsHoveringPassword(true);
    // Other logic to handle mouse over event
  };

  // Mouse out create account
  const handleMouseOut = () => {
    setIsHovering(false);
    // Other logic to handle mouse out event
  };
  // Mouse out password
  const handleMouseOutPassword = () => {
    setIsHoveringPassword(false);
    // Other logic to handle mouse out event
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flexDir={"column"} p={{ sm: 1, lg: 6 }} flex={1} align={"center"}>
        <Stack bg="white" p={8} spacing={4} w={"full"} maxW={"md"}>
          <Link to="/">
            {" "}
            <Image src={Logo} w={200} />
          </Link>
          <Heading overflowY={"hidden"} fontSize={{ base: "2xl", lg: "3xl" }}>
            Sign in to Your Account
          </Heading>
          <Link to="/register">
            or{" "}
            <span
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{ color: isHovering ? PrimaryColor : "gray" }}
            >
              Create an Account
            </span>
          </Link>
          <FormControl isRequired id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </FormControl>
          <FormControl isRequired id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
              fontSize={{ base: 13, md: 15, lg: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
              <Link
                to="/"
                color={"blue.500"}
                onMouseOver={handleMouseOverPassword}
                onMouseOut={handleMouseOutPassword}
                style={{ color: isHoveringPassword ? PrimaryColor : "gray" }}
              >
                Forgot password?
              </Link>
            </Stack>
            <Button
              color={"white"}
              _hover={{ bgColor: "blue", color: "white" }}
              bgColor={PrimaryColor}
              variant={"solid"}
              onClick={handleUserLogin}
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="22px" color="white" />
              ) : (
                "Sign In"
              )}
            </Button>
          </Stack>

          <Flex align={"center"}>
            <Divider
              colorScheme={"blackAlpha"}
              w={{ base: "40%", lg: "45%" }}
              my={6}
            />
            <Box p={2}>OR</Box>
            <Divider
              colorScheme={"blackAlpha"}
              w={{ base: "40%", lg: "45%" }}
              my={6}
            />
          </Flex>

          {/* Add the "Login with Google" button */}
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            borderWidth="2px"
            borderColor="gray.200"
            display={"flex"}
            justifyContent="space-around"
            borderRadius={5}
          >
            <Image
              w={25}
              h={25}
              src={
                "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              }
              alt=""
            />
            Continue with Google
          </Button>
        </Stack>
        <Flex
          px={{ base: 6, lg: 1 }}
          justify={"space-around"}
          align="center"
          gap={3}
        >
          <Box fontSize={{ base: 8, md: 10, lg: 12 }}>
            {" "}
            © {new Date().getFullYear()} CodeWithVicent
          </Box>
          <Box fontSize={12} _hover={{ color: PrimaryColor }}>
            <Link to="/">Terms of Service</Link>
          </Box>
          <Box fontSize={12} _hover={{ color: PrimaryColor }}>
            <Link to="/">Privacy Policy</Link>
          </Box>
        </Flex>
      </Flex>

      <Flex display={{ base: "none", md: "flex" }} flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
