// TODO: answer here
import { useState, useEffect } from "react"
import { Box, Image, Heading, Text, Center, Button } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
// import Card from "./Cards";

function Detail() {
  const [cards, setCards] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [error] = useState(null);

  const fetchData = async (id) => {
    setLoading(true)
    const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
    const data = await response.json();
    setCards(data.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchData(id)
  }, [id]);

  if (loading) return <h1>Loading...</h1>

  if (error) return "Error!";

  return (
    <Box p={'50px'}>
      <Box>
        <Link to={`/`}>
          <Button>back</Button>
        </Link>
      </Box>
      <Box>
        {cards.map((e) => (
          <Box>
            <Center>
              <Grid templateColumns='repeat(2, 1fr)' gap="10px">
                <GridItem w='100%'>
                  <Box paddingRight="0px" paddingLeft="200px">
                    {e.card_images.map((c) => (
                      <Image src={c.image_url} alt="image" />
                    ))}
                  </Box>
                </GridItem>
                <GridItem w='100%' paddingRight="100px">
                  <Heading as='h2'>{e.name}</Heading>
                  <Text as='b'>Level: {e.level}</Text>
                  <br />
                  <Text as='b'>{e.attribute}</Text>
                  <br />
                  <Text as='b'>ATK/{e.atk} DEF/{e.def} </Text>
                  <br />
                  <Text>[ {e.type} / {e.race} ]</Text>
                  <Text>Description: {e.desc}</Text>
                </GridItem>
              </Grid>
            </Center>
            <Box textAlign="center">
              <Heading as="h3">Card Set</Heading>
              {console.log(e.card_sets)}
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {e.card_sets.map((i) => (
                  <GridItem textAlign="left" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p="10px">
                    <Text>Name: {i.set_name}</Text>
                    <Text>Code: {i.set_code}</Text>
                    <Text>Rarity: {i.set_rarity}</Text>
                    <Text>Price: {i.set_price}</Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
      </Box>
    </Box >
  ); // TODO: replace this
};

export default Detail;
