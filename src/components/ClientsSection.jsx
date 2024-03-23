import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const ClientsSection = () => {
  return (
    <Box id="clients" my={10}>
      <Heading as="h2" size="xl" mb={4}>
        Our Clients
      </Heading>
      <Flex justify="center" align="center" wrap="wrap">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Schibsted_logo.svg/1200px-Schibsted_logo.svg.png" alt="Schibsted" boxSize="150px" objectFit="contain" m={4} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Volvo_logo.svg/1200px-Volvo_logo.svg.png" alt="Volvo" boxSize="150px" objectFit="contain" m={4} />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Martini_Logo.svg/1200px-Martini_Logo.svg.png" alt="Martini" boxSize="150px" objectFit="contain" m={4} />
      </Flex>
    </Box>
  );
};

export default ClientsSection;
