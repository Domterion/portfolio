import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "Portfolio" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Container maxW="2xl" mt="30px">
            {children}
            <br />
            <footer>
                <ThemeToggle />
            </footer>
        </Container>
    </div>
);

export default Layout;
