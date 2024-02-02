import React from "react";
import { ReactNode } from "react";
import type { Recipe } from "./types/Recipe";
import { Flex, Heading, Divider, Box } from "@chakra-ui/react";
import { data } from "autoprefixer";
import DeleteRecipeButton from "./buttons/DeleteRecipeButton";
import EditRecipeButton from "./buttons/EditRecipeButton";

interface Props {
  recipe: Recipe;
}
const RecipeInfo = ({ recipe }: Props): ReactNode => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mt={20} mb={5}>
        <Heading fontSize="3xl">{recipe.title}</Heading>
        <Flex justify="flex-end">
          <EditRecipeButton id={recipe.id} />
          <DeleteRecipeButton recipe={recipe} />
        </Flex>
      </Flex>
      <Divider mb={5} />
      <Box>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, itaque
        maxime praesentium officiis, asperiores nostrum nobis rem rerum quia
        molestias aliquam incidunt nesciunt! Quae, nemo. Perferendis excepturi
        nostrum, earum eum modi, ullam totam tenetur eligendi eius reprehenderit
        similique nemo at maiores voluptates hic, voluptatem atque iure
        necessitatibus sequi. Asperiores porro at provident officia esse vitae
        sapiente quod magnam consequuntur a eaque necessitatibus unde
        praesentium ut perferendis dolor saepe temporibus voluptas possimus
        distinctio quis, doloremque inventore quas. Beatae consequuntur
        recusandae sunt itaque. Quam aspernatur nesciunt fugiat necessitatibus
        ab optio dignissimos. Doloremque quis placeat molestias at et
        dignissimos, ab ipsa incidunt tempora natus voluptatum? Error earum
        rerum eveniet architecto vel nostrum, doloribus ad neque dolorem
        obcaecati, veniam expedita corporis modi maxime laudantium iste laborum
        fugit eos! Enim, aut obcaecati quaerat deleniti nesciunt fuga velit
        vitae voluptatum, molestiae recusandae similique rem aspernatur labore?
        Necessitatibus adipisci laudantium ipsum tempora! Beatae quis sapiente
        aspernatur quo rerum molestias fugit dolorum, quod consequatur,
        recusandae, obcaecati excepturi possimus deserunt quas doloribus nam
        officiis ipsa maxime eum. Corrupti adipisci, perferendis est, rerum
        vitae dolore reiciendis amet ipsa, nulla quaerat quod velit
        necessitatibus repellat alias. Dignissimos rerum ducimus autem dolores
        eaque repellendus nobis. Quam at laudantium quae eum minus excepturi,
        quia tempore dolores consequatur, culpa numquam inventore doloribus
        temporibus, officiis quis repudiandae aliquid fuga sapiente? Expedita
        similique, porro autem in hic, ipsa quo atque facilis, saepe aspernatur
        dolore corporis molestias optio quod adipisci laboriosam placeat labore
        magnam. Et quasi unde ab officiis dolorum voluptate vitae aliquam ipsum
        nesciunt, libero similique eveniet dolores perferendis nam hic adipisci
        beatae quis natus? Illo ex facilis libero ad eos voluptate impedit,
        quidem harum nihil at tempore incidunt recusandae laboriosam id eius
        officia error cupiditate odio quasi ipsa aperiam tenetur nobis iusto
        magnam. Repellat ea voluptas totam temporibus veniam aut, cumque dolorum
        accusamus possimus eos quidem, laudantium reiciendis distinctio vel
        exercitationem nam consectetur debitis ut iusto! Nihil, dicta nostrum?
        Temporibus amet, nam explicabo deserunt eos fugit voluptates quae ad
        eligendi minima doloribus impedit non dolore, quasi recusandae
        praesentium! Sed nam minima ullam quis, libero animi esse in atque
        inventore ipsam ducimus eius quos, laboriosam quod, veritatis vero
        nesciunt nisi. Adipisci saepe amet natus vitae quibusdam molestiae illo
        itaque incidunt nobis deleniti ab obcaecati esse, quisquam nostrum
        voluptatum, nesciunt harum optio neque minus voluptates perspiciatis
        aliquam quae quo maxime. Vitae vel dicta cum laudantium nihil, facere
        quas nesciunt eaque voluptates consequatur magni debitis. Delectus vitae
        illum atque soluta iste error nesciunt fugit laboriosam perspiciatis,
        dolor quam veritatis ullam accusantium alias obcaecati quas minus
        voluptates accusamus quasi temporibus? Aut, quaerat adipisci. Dolore,
        praesentium! Dolorem consequatur laborum, sequi nulla veniam tenetur
        excepturi quas quos illo doloribus facilis dicta repellendus officia
        suscipit voluptas molestias, perferendis odit aspernatur illum iusto!
        Voluptates neque est expedita cumque sapiente incidunt nostrum magni
        excepturi officiis dolores ipsam in vitae nam dolore earum inventore,
        facere, quibusdam laboriosam perferendis natus eum tempore harum enim
        dicta. Asperiores repellat cupiditate praesentium quod sunt accusamus
        cum, quis amet odio ut nostrum ullam! Natus possimus minus fugiat sequi
        consequuntur provident?
      </Box>
    </>
  );
};

export default RecipeInfo;
