import { useEffect, useState } from "react";
import Cards from "./Cards";
import { SimpleGrid, Link, Box, Select, Div } from "@chakra-ui/react";

function Home() {
   const [datas, setDatas] = useState();
   const [isLoading, setIsLoading] = useState(true);
   const [sorting, setSorting] = useState();

   useEffect(() => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
         .then((res) => res.json())
         .then((json) => {
            setDatas(json.data);
            setIsLoading(false);
         });
   }, []);

   console.log(datas);

   function sortData(type) {
      console.log(type.target.value);

      if (type.target.value == "attack") {
         const sortAttack = [...datas].sort((a, b) => a.atk - b.atk);
         setDatas(sortAttack);
      } else if (type.target.value == "name") {
         const sortName = [...datas].sort((a, b) => a.name.localeCompare(b.name));
         setDatas(sortName);
      } else if (type.target.value == "defence") {
         const sortDefence = [...datas].sort((a, b) => a.def - b.def);
         setDatas(sortDefence);
      }
   }

   if (isLoading)
      return (
         <Box>
            <h1>Loading...</h1>
         </Box>
      );

   return (
      <Box p={3}>
         <Select name="sort" maxW="50%" m={4} mx="auto" onChange={(type) => sortData(type)}>
            <option value="sortBy">Sort By</option>
            <option value="name">Name</option>
            <option value="attack">Attack</option>
            <option value="defence">Defence</option>
         </Select>
         <SimpleGrid>
            <Cards card={datas} />
         </SimpleGrid>
      </Box>
   );
}

export default Home;
