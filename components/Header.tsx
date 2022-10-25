import { Heading } from "@chakra-ui/react";

type Props = {
    text: string;
};

const Header = ({ text }: Props) => {
    return (
        <Heading size="md" mb="15px">
            {text}
        </Heading>
    );
};

export default Header;
