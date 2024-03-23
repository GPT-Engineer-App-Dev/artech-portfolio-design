import React from "react";
import { Box, Heading, Text, Flex, Image, Link, List, ListItem, ListIcon, Progress, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaCode, FaPaperPlane } from "react-icons/fa";
import ComingSoon from "../components/ComingSoon";
import FamilySection from "../components/FamilySection";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Artech
          </Heading>
          <Text ml={3} fontSize="xl" fontWeight="medium">
            Front-End Developer
          </Text>
        </Flex>
        <Box>
          <Link mx={2} href="#about">
            About
          </Link>
          <Link mx={2} href="#experience">
            Experience
          </Link>
          <Link mx={2} href="#projects">
            Projects
          </Link>
          <Link mx={2} href="#contact">
            Contact
          </Link>
        </Box>
      </Flex>

      <Box padding="2rem">
        {/* About Section */}
        <Box id="about" mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Flex align="center">
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTEyMTQ0NDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Artech" mr={8} />
            <Box>
              <Text fontSize="lg">
                👋 Hey there! I'm an enthusiastic and dedicated front-end developer with a passion for crafting amazing digital experiences. 🚀 With expertise in HTML, CSS, JavaScript, and React, I thrive on tackling complex user experience challenges and transforming them into beautiful, intuitive interfaces. 💡
                <br />
                <br />
                I believe that great design and seamless functionality go hand in hand, and I'm always excited to learn and grow in this ever-evolving field. 🌱 When I'm not coding, you can find me exploring the latest web design trends, collaborating with fellow developers, or seeking inspiration in the world around me. 🌍
                <br />
                <br />
                Let's create something incredible together! 🙌
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Experience Section */}
        <Box id="experience" mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Work Experience
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Flex align="center">
                <ListIcon as={FaBriefcase} color="green.500" />
                <Text fontWeight="bold">Front-End Developer</Text>
              </Flex>
              <Text>ABC Company | 2020 - Present</Text>
              <Text fontSize="sm">Developed responsive user interfaces using React and optimized website performance.</Text>
            </ListItem>
            <ListItem>
              <Flex align="center">
                <ListIcon as={FaBriefcase} color="green.500" />
                <Text fontWeight="bold">UI Designer</Text>
              </Flex>
              <Text>XYZ Agency | 2018 - 2020</Text>
              <Text fontSize="sm">Designed wireframes and high-fidelity mockups for client websites.</Text>
            </ListItem>
          </List>
        </Box>

        {/* Projects Section */}
        <Box id="projects" mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <Flex wrap="wrap">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTEyMTQ0NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 1
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A responsive e-commerce website built with React and Node.js.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">Live Demo</Link>
                </Flex>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMTIxNDQ0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 2
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A cross-platform mobile app developed using React Native.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">App Store</Link>
                </Flex>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlfGVufDB8fHx8MTcxMTIxNDQ1MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 3
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A real-time chat application built with React, Node.js, and Socket.io.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">Live Demo</Link>
                </Flex>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fHx8MTcxMTIxNDQ1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 4" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 4
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A weather forecast application using React and OpenWeatherMap API.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">Live Demo</Link>
                </Flex>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwd2Vic2l0ZXxlbnwwfHx8fDE3MTEyMTQ0NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 5" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 5
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A news aggregator website developed with React and NewsAPI.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">Live Demo</Link>
                </Flex>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b2RvJTIwYXBwfGVufDB8fHx8MTcxMTIxNDQ1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 6" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontSize="sm" fontWeight="semibold">
                    Project 6
                  </Text>
                </Box>
                <Text mt={2} fontSize="sm">
                  A task management application built with React and Firebase.
                </Text>
                <Flex mt={3}>
                  <Link href="#" mr={4}>
                    <FaGithub />
                  </Link>
                  <Link href="#">Live Demo</Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* Skills Section */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <Flex wrap="wrap">
            <Box width="50%" pr={4} mb={4}>
              <Text mb={1}>HTML</Text>
              <Progress value={90} size="xs" colorScheme="green" />
            </Box>
            <Box width="50%" pr={4} mb={4}>
              <Text mb={1}>CSS</Text>
              <Progress value={85} size="xs" colorScheme="green" />
            </Box>
            <Box width="50%" pr={4} mb={4}>
              <Text mb={1}>JavaScript</Text>
              <Progress value={80} size="xs" colorScheme="green" />
            </Box>
            <Box width="50%" pr={4} mb={4}>
              <Text mb={1}>React</Text>
              <Progress value={75} size="xs" colorScheme="green" />
            </Box>
          </Flex>
        </Box>

        {/* Contact Section */}
        <Box id="contact">
          <Heading as="h2" size="xl" mb={4}>
            Get In Touch
          </Heading>
          <Flex>
            <Box mr={8}>
              <form>
                <FormControl id="name" mb={4}>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="email" mb={4}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="message" mb={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea />
                </FormControl>
                <Button leftIcon={<FaPaperPlane />} colorScheme="teal" variant="solid">
                  Send
                </Button>
              </form>
            </Box>
            <Box>
              <Link href="#" mb={4} display="block">
                <FaEnvelope /> artech@email.com
              </Link>
              <Link href="#" mb={4} display="block">
                <FaLinkedin /> linkedin.com/in/artech
              </Link>
              <Link href="#" display="block">
                <FaGithub /> github.com/artech
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <FamilySection />
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }} bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Flex direction={{ base: "column", md: "row" }} spacing={{ base: "4", md: "12" }} justify="center" mb={{ base: "6", md: 0 }}>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </Flex>
          <Flex direction="row" align="center">
            <Link href="#" mr={4}>
              <FaGithub />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </Flex>
        </Flex>
        <Text mt={8} textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} Artech. All rights reserved.
        </Text>
      </Box>
      <ComingSoon />
    </Box>
  );
};

export default Index;
