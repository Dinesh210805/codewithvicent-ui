import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { faqsData } from "../../../api/fakeApi";

const FAQ = ({ activeIndex, handleAccordionChange }: any) => {
  return (
    <Box p={{ base: 0, md: 3, lg: 6 }} pl={0} flex={1}>
      <Accordion allowToggle onChange={handleAccordionChange}>
        {faqsData.map((faq: any, index: any) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
