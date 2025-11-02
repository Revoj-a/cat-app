import { Box, HStack, Image } from "@chakra-ui/react";
import heartIcon from "../assets/heart.png";
import heartRed from "../assets/heart-red.png";
import { useState } from "react";

interface Props {
  onHeartClick: () => void;
}

const IconBar = ({ onHeartClick }: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <HStack justify="center">
      <Box
        as="button"
        p="5"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="transparent"
        border="none"
        cursor="pointer"
        outline="none"
        onClick={onHeartClick}
      >
        <Image
          src={hovered ? heartRed : heartIcon}
          boxSize="35px"
          border="none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </Box>
    </HStack>
  );
};

export default IconBar;
