import { Box, Stack, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaDonate, FaMoon, FaSun } from "react-icons/fa";
import { AuthContext, AuthContextType } from "../../../store/AuthContext";
import { PrimaryYellowColor } from "../../../theme/GlobalStyles";
import { MenuItem } from "./MenuItem";

export const MenuLinks = ({
  isOpen,
  active,
  setIsOpen,
}: {
  isOpen: boolean;
  active: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // ?TEMPORARY DARK MODE TOGGLER
  const [darkMode, setDarkMode] = useState(false);

  // CHECK IF USER IS LOGGED IN
  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext) ?? ({} as AuthContextType);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem bdr={"bdr"} setIsOpen={setIsOpen} active={active} to="/">
          Home
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/blog">
          Blog
        </MenuItem>
        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/courses"
        >
          Courses
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/forum">
          Forum
        </MenuItem>
        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/tutorials"
        >
          Tutorials
        </MenuItem>
        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/datastructures"
        >
          Data Structures
        </MenuItem>
        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/algorithms"
        >
          Algorithms
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/login">
          {isLoggedIn ? "Logout" : "Login"}
        </MenuItem>
        {/* <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/login"> */}
          <Button
          onClick={() => setDarkMode(!darkMode)}
            leftIcon={darkMode ? <FaSun /> : <FaMoon />}
            colorScheme={PrimaryYellowColor}
            color="white"
            variant="solid"
            py={4.5}
            height={8}
            borderRadius={25}
          ></Button>
        {/* </MenuItem> */}
        <MenuItem setIsOpen={setIsOpen} active={active} to="/donate">
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Button
              leftIcon={<FaDonate />}
              colorScheme={PrimaryYellowColor}
              color="white"
              variant="solid"
              py={4.5}
              height={8}
              borderRadius={25}
            >
              Donate
            </Button>
          </Box>
        </MenuItem>
      </Stack>
    </Box>
  );
};
