import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://play-lh.googleusercontent.com/WAaIa9mMfZOl1Bi2piXFzXX7RJ8MWc_P1lXRuWh75Thr1P6NwKXSs-5lZzGKmK82XmY"
            alt="bike"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;