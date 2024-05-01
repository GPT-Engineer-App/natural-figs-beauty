// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="black" color="white">
      <Heading as="h1" size="4xl" mb={4} fontFamily="serif" letterSpacing="wider">
        Figs by Grace
      </Heading>
      <Text fontSize="xl" mb={6}>
        Natural Body Scrubs
      </Text>
      <Image src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWdzJTIwb24lMjBhJTIwYmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNDU5MDM4NXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="full" mb={4} />
      <Text fontSize="lg" fontStyle="italic">
        Modern Style • Aesthetic Minimalism • Beauty
      </Text>
    </Flex>
  );
};

export default Index;
