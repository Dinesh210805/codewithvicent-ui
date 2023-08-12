import { Box, Flex, Image, Text } from "@chakra-ui/react";
import UnderConstruction from "../../../assets/images/underconst.png";
import { PrimaryColor } from "../../../theme/GlobalStyles";

const HomeComponent = ({ item }: { item: any }) => {
  return (
    <Flex
      p={{ base: 5, md: 10, lg: 20 }}
      //   my={5}
      bg={item.backgroundColor}
      alignItems={"center"}
      flexDir={{
        base: item.isRowReversed ? "column" : "column",
        lg: item.isRowReversed ? "row-reverse" : "row",
      }}
    >
      <Box flex={1}>
        <Text color={PrimaryColor} fontWeight={"bold"} mb={3}>
          {item.subHeading}
        </Text>
        <Text fontWeight={"bold"} fontSize={30} mb={5}>
          {item.heading}
        </Text>
        <Box>
          <Text>{item.paragraph}</Text>
          <Text>{item.paragraph}</Text>
          <Text>{item.paragraph}</Text>
        </Box>
      </Box>
      <Box flex={1}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            w={{ base: "100%", lg: "50%" }}
            h={{ base: "100%", lg: "50%" }}
            src={UnderConstruction}
            alt=""
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeComponent;
