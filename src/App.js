import { chakra } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import { Box, Center, Heading } from "@chakra-ui/react";
import Home from "./Home";

const App = () => {
   const MyRouter = () => (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="card">
               <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="*" element={<div>404 Page not found!</div>} />
         </Routes>
      </div>
   ); // TODO: replace this

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
