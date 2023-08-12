import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link as LinkTo } from "react-router-dom";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaAppStore,
  FaFacebook,
  FaDiscord,
  FaLinkedin,
  FaFly,
} from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      fontSize={14}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            {/* <ListHeader>Quick Links</ListHeader> */}
            <Text>
              CodeWithVicent is a non profit, donor-supported and AI powered
              web-based application where anyone can learn to code for free and
              with mentorship.
            </Text>
            <Text>
              CodeWithVicent's mission is to unleash IT knowdledge, programming
              skills and mentorship to all the people willing to acquire them
              including the disadvantaged regardless of their race, gender or
              social or religious affliations at a free cost.
            </Text>
            <Text>
              All the donations to CodeWithVicent help expand the outreach of
              services rendered and maintain the servers used.
            </Text>
            <Text fontSize={16} fontWeight={500}>
              You can make a{" "}
              <LinkTo to="/">
                <span style={{ textDecoration: "underline" }}>
                  Donation Here
                </span>{" "}
              </LinkTo>
              or buy Vicent some{" "}
              <LinkTo to="/">
                <span style={{ textDecoration: "underline" }}>Coffee Here</span>
              </LinkTo>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Donate</Link>
            <Link href={"#"}>Forum</Link>
            <Link href={"#"}>Courses</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Data Structures</Link>
            <Link href={"#"}>Algorithms</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>YouTube</Link>
            <Link href={"#"}>Login</Link>
            <Link href={"#"}>Register</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>FAQ</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Courses</ListHeader>
            <Link href={"#"}>HTMl & CSS</Link>
            <Link href={"#"}>Modern JavaScript Full Course</Link>
            <Link href={"#"}>TypeScript Full Course</Link>
            <Link href={"#"}>JS Data Structures & Algorithms</Link>
            <Link href={"#"}>React Full Course</Link>
            <Link href={"#"}>NextJS Full Course</Link>
            <Link href={"#"}>SolidJS Full Course</Link>
            <Link href={"#"}>React Native Full Course</Link>
            <Link href={"#"}>TensorflowJS Full Course</Link>
            <Link href={"#"}>BrainJS Full Course</Link>
            <Link href={"#"}>NodeJS & Express With MongoDB</Link>
            <Link href={"#"}>NodeJS & Express With Sequelize & MySQL</Link>
            <Link href={"#"}>Docker With NodeJS Full Course</Link>
            <Link href={"#"}>Kubernetes Full Course</Link>
            <Link href={"#"}>GIT Full Course</Link>
            <Link href={"#"}>AWS Full Course</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Common Guides</ListHeader>
            <Link href={"#"}>Documenting React Components with Storybook</Link>
            <Link href={"#"}>JavaScript Closures Explained</Link>
            <Link href={"#"}>Documenting Express APIS with Postman</Link>
            <Link href={"#"}>How to Build a React Component Library with TypeScript and Deploy it on NPM</Link>
            <Link href={"#"}>How to Build a NodeJS Library with TypeScript and Deploy it on NPM</Link>
            <Link href={"#"}>JavaScript Closures Explained in Plain English</Link>
            <Link href={"#"}>React Query Explained in Plain English</Link>
            <Link href={"#"}>How to Test Express APIs with Jest</Link>
            <Link href={"#"}>How to Document Express APIs with Swagger</Link>
            <Link href={"#"}>How to Set Up a  Testing Environment With Jest for a React TypeScript App</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Get Our News Letter</ListHeader>
            <Text>
              Subscribe to our weekly newsletter to get a tailored list of our
              blog posts, tutorials and discusions direct to your inbox
            </Text>
            <Input
              border="1px solid gray"
              _focus={{ outline: "none", border: "1px solid gray" }}
              w="100%"
              type={"email"}
              placeholder="Enter your email"
            />
            <Button colorScheme={"orange"} w="100%">
              Subscribe
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text textAlign={"center"}>
            © {new Date().getFullYear()} CodeWithVicent. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
