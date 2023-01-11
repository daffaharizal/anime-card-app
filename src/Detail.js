import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Image, Heading, Text, HStack } from "@chakra-ui/react";

function Detail() {
   let { id } = useParams();
   const [values, setValues] = useState();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
         .then((res) => res.json())
         .then((json) => {
            setValues(json);
            setLoading(false);
         });
   }, []);

   if (loading) return <h1>Loading...</h1>;

   console.log(JSON.stringify(values));

   return (
      <>
         {values.data.map((value) => (
            <>
               <HStack>
                  <Image src={value.card_images[0].image_url} />
                  <tr>
                     <Heading as="h2">{value.name}</Heading>
                     <Text fontSize="lg">Level: {value.level}</Text>
                     <Text fontSize="lg">{value.attribute}</Text>
                     <Text fontSize="lg">{`ATK/${value.atk} DEF/${value.def}`}</Text>
                     <Text fontSize="lg">{`[ ${value.type} / ${value.race} ]`}</Text>
                     <Text fontSize="md">{value.desc}</Text>
                  </tr>
               </HStack>
               <h2>Card Set</h2>
               {value.card_sets.map((datas) => (
                  <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4}>
                     <Text fontSize="lg">{`Name: ${datas.set_name}`}</Text>
                     <Text fontSize="lg">{`Code: ${datas.set_code}`}</Text>
                     <Text fontSize="lg">{`Rarity: ${datas.set_rarity}`}</Text>
                     <Text fontSize="lg">{`Price: ${datas.set_price}`}</Text>
                  </Box>
               ))}
            </>
         ))}
      </>
   ); // TODO: replace this
}

export default Detail;
