// TODO: answer here
import { Routes, Route } from "react-router-dom";
import { Box, Center, Heading } from "@chakra-ui/react";
import Home from "./Home"
import Cards from "./Cards"
import Detail from "./Detail"

const App = () => {
  const MyRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card">
          <Route index element={<Cards />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        {/* {page } */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }; // TODO: replace this

  const PageNotFound = () => {
    return (
      <div>
        <Center p={300}>
          <h1>404 Page not found!</h1>
        </Center>
      </div>
    )
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;