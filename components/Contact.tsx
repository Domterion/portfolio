import { Box, Text, Icon, useColorModeValue, As } from "@chakra-ui/react";

type Props = {
    name: string;
    icon: As<any> | undefined;
};

const Contact = ({ name, icon }: Props) => {
    const contactsColor = useColorModeValue("gray.700", "gray.400");

    // return <Badge>{name}</Badge>;
    return (
        <Box color={contactsColor}>
            <Icon as={icon} boxSize="24px" verticalAlign="middle" />
            <Text
                mt="-3px"
                ml="6px"
                display="inline-block"
                fontSize="md"
                verticalAlign="middle"
            >
                {name}
            </Text>
        </Box>
    );
};

export default Contact;
