import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={
                colorMode == "dark" ? <Icon as={FaMoon} /> : <Icon as={FaSun} />
            }
            onClick={toggleColorMode}
        />
    );
};

export default ThemeToggle;
