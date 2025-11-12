import { Box, HStack, Image } from "@chakra-ui/react";
import heartIcon from "../assets/heart.png";
import heartRed from "../assets/heart-red.png";
import thumbsUp from "../assets/thumbs-up.png";
import thumbsUpRed from "../assets/thumbs-up-red.png";
import { useState } from "react";

interface Props {
  onHeartClick: () => void;
  onThumbsClick: () => void;
}

const IconBar = ({ onHeartClick, onThumbsClick }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [thumbHoverRed, setThumbHoverRed] = useState(false);
  return (
    <HStack justify="center" mb={20}>
      <Box
        as="button"
        p={2}
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
      <HStack>
        <Box
          as="button"
          p={2}
          flexDirection="column"
          bg="transparent"
          ml="100px"
          border="none"
          cursor="pointer"
          outline="none"
          onClick={onThumbsClick}
        >
          <Image
            src={thumbHoverRed ? thumbsUpRed : thumbsUp}
            boxSize="35px"
            border="none"
            onMouseEnter={() => setThumbHoverRed(true)}
            onMouseLeave={() => setThumbHoverRed(false)}
          ></Image>
        </Box>
      </HStack>
    </HStack>
  );
};

export default IconBar;
