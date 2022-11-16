import {
    Box,
    Divider,
    Flex,
    Heading,
    Hide,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Technology from "../components/Technology";
import Header from "../components/Header";
import { FaDiscord, FaEnvelope, FaGithub, FaMastodon } from "react-icons/fa";
import Contact from "../components/Contact";

const technologies = [
    "docker",
    "git",
    "linux",
    "github",
    "rust",
    "vscode",
    "postgres",
    "ts",
    "vim",
    "md",
];

const Home: NextPage = () => {
    const conatctsColor = useColorModeValue("gray.700", "gray.400");

    return (
        <Layout>
            <Flex direction="column">
                {/* Start beginning section */}
                <Flex>
                    <Hide below="546px">
                        <Box mt="8px" mr="15px" boxSize="77px">
                            <Image
                                borderRadius="full"
                                src="/me.jpg"
                                alt="Picture of me"
                            />
                        </Box>
                    </Hide>
                    <Box mt="12px">
                        <Heading size="lg">Dominic Harris</Heading>
                        <Text>
                            💻 Software Developer, 🔧 System Administrator, 🤓
                            Technical goofball
                        </Text>
                    </Box>
                </Flex>
                {/* End beginning section */}
                <Divider mt="15px" mb="15px" />
                {/* Start about section */}
                <Flex direction="column">
                    <Header text="About" />
                    <Text>
                        Hello 👋 I&#39;m Dominic Harris, a self-taught software
                        developer and self-driven system administrator. I
                        currently administare my own homelab and I love to write
                        free and open-source software!
                    </Text>
                </Flex>
                {/* End about section */}
                <Divider mt="15px" mb="15px" />
                {/* Start technologies section */}
                <Flex direction="column">
                    <Header text="Technologies" />
                    <Flex gap="8px" wrap="wrap">
                        {technologies.map((technology, index) => (
                            <Technology name={technology} key={index} />
                        ))}
                    </Flex>
                </Flex>
                {/* End technologies section */}
                <Divider mt="15px" mb="15px" />
                {/* Start experience section */}
                <Flex direction="column">
                    <Header text="Experience" />
                    <Text>You could be the first! Email me.</Text>
                </Flex>
                {/* End experience section */}
                <Divider mt="15px" mb="15px" />
                {/* Start contact section */}
                <Flex direction="column">
                    <Header text="Contact" />
                    <Flex direction="column" gap="8px" ml="3px">
                        <Contact name="dominic@domm.me" icon={FaEnvelope} />
                        <Contact name="mellowmarshe#0001" icon={FaDiscord} />
                        <Contact name="domterion" icon={FaGithub} />
                        {/*
                        <a rel="me" href="https://wires.gg/@dominic">
                            Mastodon
                        </a>
                        */}
                        <Contact name="wires.gg/@dominic" icon={FaMastodon} />
                    </Flex>
                </Flex>
                {/* End contact section */}
            </Flex>
        </Layout>
    );
};

export default Home;
