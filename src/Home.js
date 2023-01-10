// TODO: answer here
import { useState, useEffect } from "react"
import { Box } from '@chakra-ui/react'
import { Select, SimpleGrid } from '@chakra-ui/react'
import Cards from "./Cards";

function Home() {
  // TODO: answer here
  const [value] = useState('sort');
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4`)
      .then((response) => response.json())
      .then((json) => {
        setResData(json.data)
        setLoading(false);
      })
  }, [value]);

  function sortData(type) {
    if (type === 'Name') {
      setResData([...resData].sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (type === 'Attack') {
      setResData([...resData].sort((a, b) => a.atk - b.atk));
    }
    else if (type === 'Defence') {
      setResData([...resData].sort((a, b) => a.def - b.def));
    };
  };

  return (
    <SimpleGrid p="50px">
      <Box paddingBottom="40px">
        <Select name="sort" padding="-10" boxSizing="border-box" onChange={(e) => sortData(e.target.value)} placeholder='Sort by'>
          <option value='Name'>Name</option>
          <option value='Attack'>Attack</option>
          <option value='Defence'>Defence</option>
        </Select>
      </Box>
      <SimpleGrid columns={4} spacing={10}>
        {loading ? <h2>Loading...</h2> : <Cards card={resData} />}
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default Home;
