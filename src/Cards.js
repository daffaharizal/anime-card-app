import { Box, Image, Heading, Container, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
   return (
      <Container maxW="75%" centerContent>
         {card.map((value) => (
            <Link to={`/card/${value.id}`}>
               <Box className="yugioh-card">
                  <Image src={value.card_images[0].image_url} />
                  <Heading as="h2" size="sm">
                     {value.name}
                  </Heading>
               </Box>
            </Link>
         ))}
      </Container>
   ); // TODO: replace this
}

export default Card;
