import React from "react";
import type { ReactNode } from "react";
import type { Bean } from "./types/Bean";
import { Box, Divider, Flex, HStack, Heading } from "@chakra-ui/react";
import DeleteBeanButton from "./buttons/DeleteBeanButton";
import EditBeanButton from "./buttons/EditBeanButton";

interface Props {
  bean: Bean;
}

const BeanInfo = ({ bean }: Props): ReactNode => {
  return (
    <Box>
      <HStack
        h="4.5rem"
        alignItems="center"
        mt={5}
        justifyContent="space-between"
      >
        <Heading fontSize="2xl">Bean Info</Heading>
        <Flex justify="flex-end">
          <EditBeanButton id={bean.id} />
          <DeleteBeanButton bean={bean} />
        </Flex>
      </HStack>
      <Divider mb={5} />
      <Box>
        <ul>
          <li>{bean.name}</li>
          <li>{bean.country}</li>
          <li>{bean.variety}</li>
          <li>{bean.process}</li>
          <li>{bean.roast_level}</li>
          <li>{bean.producer}</li>
          <li>{bean.roaster}</li>
          <li>{bean.note}</li>
        </ul>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eaque nam
        odio unde possimus asperiores nihil architecto animi! Laudantium
        voluptatibus cum dolor, est tempore labore, non quas aliquid
        consequuntur quidem optio rerum vel totam quos autem recusandae impedit
        iste nobis voluptatum veniam! Deserunt dignissimos modi animi
        repellendus, autem quia porro, vel iure aliquam quas quo quisquam
        placeat vero! Aliquid voluptates libero alias repellendus facilis
        dignissimos dolores maxime magni fugit. A suscipit ut omnis ea dolorem
        quae ullam qui saepe nobis mollitia animi, dicta placeat vero ipsam
        praesentium autem officia fugit, sed culpa voluptatum enim quisquam modi
        repudiandae? Deserunt magni harum maiores quam corrupti numquam expedita
        dicta, esse accusantium veritatis ut rerum atque tempore, non voluptatem
        perferendis pariatur odit, natus fuga ipsam dolor! Dolore deserunt
        consequatur ratione facilis harum iusto ut molestias enim, culpa
        necessitatibus accusamus doloremque? Perspiciatis, illum! Nam
        exercitationem nihil quas commodi minus placeat molestias obcaecati
        illum provident quia ut ipsa vero sit fuga soluta tempore harum fugiat
        deleniti saepe laborum, eligendi animi quibusdam perspiciatis? Deserunt
        et nostrum suscipit error nihil voluptas dolore, reiciendis magnam neque
        quod eveniet maiores sunt consectetur laudantium aliquid alias iste at
        quis ipsam quidem quo necessitatibus similique! Omnis aspernatur eaque
        eum facere. Qui repellat impedit saepe repellendus temporibus vel velit
        quam laborum itaque! Deleniti, quaerat porro. Voluptas recusandae magnam
        aliquid doloremque aperiam modi, in dolorem debitis sunt fugit eaque
        atque minus quo ipsam velit explicabo veniam rerum blanditiis earum
        molestiae accusamus veritatis officiis est. Ipsum eos provident quia
        explicabo harum repellat amet magnam nesciunt nisi minima asperiores
        debitis labore illo corrupti optio ipsam laudantium ratione, placeat
        totam quibusdam in distinctio consequatur accusantium voluptate?
        Voluptas reprehenderit quia aperiam, perspiciatis ipsum labore a
        molestiae, rem necessitatibus dolorum provident atque? Fuga minima dicta
        laboriosam animi ipsum a, distinctio odio natus recusandae quo rem
        labore dolores molestias impedit ullam, cumque praesentium, deserunt
        dolore ipsam magnam deleniti? Molestias sit rem sunt neque facilis
        doloribus, optio distinctio unde! Aperiam commodi at exercitationem
        soluta necessitatibus velit pariatur! Modi perferendis enim quis
        accusamus, voluptatem voluptas aliquam dolorem neque? Dolorem nisi
        corrupti maxime doloribus blanditiis natus tenetur aliquam ad nam eius
        ratione explicabo laboriosam eos praesentium pariatur aliquid voluptate,
        quod, beatae illo cum cupiditate officiis nihil iusto? Qui, nulla
        asperiores! Dolorem ea at laborum, voluptatum consequatur amet deleniti
        delectus! Ratione veritatis ea dolorem quidem fugit quos deleniti porro
        pariatur reprehenderit, illum tempora perspiciatis totam, odio quibusdam
        eaque vel, incidunt sunt! Non rerum quibusdam, iste vero velit
        voluptates quidem? Blanditiis nemo explicabo, earum ullam officia
        voluptas cumque fuga tempora consequuntur a, voluptates, corporis nam ad
        optio! Cumque numquam iusto optio vero repudiandae incidunt reiciendis?
        Iste exercitationem temporibus odio facilis ratione reprehenderit omnis,
        accusamus quaerat. Error praesentium obcaecati officiis mollitia? Modi
        perspiciatis eligendi qui perferendis quae molestias impedit alias
        facilis consequatur delectus deleniti magni sed iste, rerum obcaecati
        fuga vitae reprehenderit recusandae quam numquam aliquid dolorem tempora
        at! Cumque consequatur veniam id vitae dignissimos fugiat laborum ullam
        ut? Voluptatum beatae quis laborum molestias necessitatibus nisi quos
        veritatis ducimus dignissimos labore optio, enim tempore excepturi
        magni?
      </Box>
    </Box>
  );
};

export default BeanInfo;
