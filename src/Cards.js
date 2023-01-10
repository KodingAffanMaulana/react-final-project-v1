// TODO: answer here
import { Box, Image, Heading } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    card &&
    card.length > 0 && (
      <>
        {card.map((e) => (
          <Link key={e.id} to={`/card/${e.id}`}>
            <Box className="yugioh-card">
              {e.card_images.map((c) => (
                <Image src={c.image_url} alt="picture" />
              ))}
              <Heading textAlign="center" as="h2" fontSize="30px">{e.name}</Heading>
            </Box>
          </Link>
        ))
        }
      </ >
    )
  ); // TODO: replace this
};

export default Card;
