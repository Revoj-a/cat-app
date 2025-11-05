import { Box, HStack, Image, Text } from "@chakra-ui/react";
import voteIcon from "../assets/vote.svg";
import magnifyingIcon from "../assets/magnifying.png";
import heartIcon from "../assets/heart.png";

interface Props {
  onVoteClick: () => void;
  onFavClick: () => void;
}

const NavBar = ({ onVoteClick, onFavClick }: Props) => {
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
        onClick={onVoteClick}
        overflow="hidden"
        _hover={{ bg: "transparent", transform: "scale(1.1)" }}
        _active={{ transform: "sacle(0.95)" }}
        _focus={{ boxShadow: "none" }}
      >
        <Image src={voteIcon} boxSize="35px" objectFit="cover" />
        <Text fontSize="lg" fontWeight="semibold" _hover={{ color: "red.500" }}>
          Voting
        </Text>
      </Box>
      <Box
        as="button"
        p="5"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="transparent"
        border="none"
        outline="none"
        overflow="hidden"
        _hover={{ bg: "transparent", transform: "scale(1.1)" }}
        _active={{ transform: "sacle(0.95)" }}
        _focus={{ boxShadow: "none" }}
      >
        <Image src={magnifyingIcon} boxSize="35px" objectFit="cover" />
        <Text fontSize="lg" fontWeight="semibold" _hover={{ color: "red.500" }}>
          Breeds
        </Text>
      </Box>
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
        onClick={onFavClick}
        overflow="hidden"
        _hover={{ bg: "transparent", transform: "scale(1.1)" }}
        _active={{ transform: "sacle(0.95)" }}
        _focus={{ boxShadow: "none" }}
      >
        <Image src={heartIcon} boxSize="35px" objectFit="cover" />
        <Text fontSize="lg" fontWeight="semibold" _hover={{ color: "red.500" }}>
          Favs
        </Text>
      </Box>
    </HStack>
  );
};

export default NavBar;
