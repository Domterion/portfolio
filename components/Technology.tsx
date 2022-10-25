import { Image, useColorMode } from "@chakra-ui/react";

type Props = {
    name: string;
};

const Technology = ({ name }: Props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    // return <Badge>{name}</Badge>;
    return (
        <Image
            src={`https://skillicons.dev/icons?i=${name}&theme=${colorMode}`}
            boxSize="35px"
        />
    );
};

export default Technology;
