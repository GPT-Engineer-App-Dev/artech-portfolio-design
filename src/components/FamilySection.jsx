import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const FamilySection = () => {
  return (
    <Box id="family" my={10}>
      <Heading as="h2" size="xl" mb={4}>
        Family in Oregon
      </Heading>
      <Text fontSize="lg">I come from a warm and loving family based in Oregon. We enjoy the breathtaking landscapes and the vibrant community life. Family is important to me, and it's where I draw a lot of my inspiration and values.</Text>
    </Box>
  );
};

export default FamilySection;
