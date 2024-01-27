// StickyHeader.tsx

import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      bg={isSticky ? "white" : "transparent"}
      borderBottom={isSticky ? "1px solid gray" : "none"}
      p="4"
      transition="background-color 0.3s ease, border 0.3s ease"
    >
      <Heading size="md" color={isSticky ? "teal.500" : "white"}>
        Your Logo/Title
      </Heading>
    </Box>
  );
};

export default Header;
