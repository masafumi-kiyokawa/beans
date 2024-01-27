import {
  CSSReset,
  ChakraProvider,
  Grid,
  GridItem,
  Show,
  Text,
} from "@chakra-ui/react";
import BeansGrid from "./components/BeansGrid";
import Scrollbar from "./components/Scrollbar";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "sub"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
      mx={8}
    >
      <GridItem area="nav" m={2}>
        <NavBar onSearch={() => {}} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" my="20px">
          <Scrollbar>
            {" "}
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur amet repellendus iusto consequatur? Earum minima
              pariatur adipisci ea est saepe! Distinctio ea, minus nihil vitae
              eum doloribus cumque placeat laborum animi sapiente a
              necessitatibus reprehenderit sunt laboriosam iste aperiam quidem
              at consequuntur nam. Dolore quibusdam ratione soluta, fuga tenetur
              ullam ut, nam maxime consequatur repellendus est, modi odio
              repellat! Ipsam sequi delectus cupiditate possimus architecto at
              sapiente, vitae beatae quidem amet, laborum deleniti nobis
              consequuntur error unde doloremque ipsum corrupti dolor aliquid?
              Voluptatibus mollitia voluptas nemo sunt accusamus magnam illo a
              dolor accusantium, nam dolore minima odit eveniet ea ut placeat
              quod exercitationem labore! Delectus sapiente qui saepe,
              exercitationem voluptatibus provident atque. Doloribus nihil,
              maiores quas qui autem laudantium saepe. Tempora commodi tempore
              quam sapiente assumenda quaerat sunt necessitatibus nostrum id
              atque nemo non excepturi esse iste, libero dolores dignissimos
              similique nihil animi laboriosam ut. Laboriosam ipsa et animi
              dicta? Laboriosam eos corporis accusamus quos ipsa tempora facilis
              voluptatum, voluptatibus atque. Quo rerum beatae dolorum placeat
              facere laudantium deleniti, ipsam dignissimos labore ab, fugiat
              cum rem consequuntur repellendus repellat corporis fuga in atque
              saepe, dolore nisi quam nemo. Error officia quibusdam, ipsam modi
              repellat dicta? Quod dignissimos, vero minus assumenda eaque
              blanditiis sunt sequi totam excepturi autem consectetur commodi,
              exercitationem repudiandae iste nemo illo! Iste vero cumque,
              nostrum a voluptatum deserunt optio, at unde tempore omnis
              laboriosam ipsa mollitia esse excepturi laudantium! Corrupti ex
              vero porro, quam provident labore dolorem adipisci laborum
              quibusdam dolorum suscipit possimus ipsum numquam itaque velit
              placeat molestias voluptatem sint? Dicta officiis praesentium
              fugit laboriosam quas sapiente facere magnam, quidem odio est nisi
              animi beatae totam distinctio blanditiis sequi mollitia earum nam.
              Id quisquam voluptas iusto sunt, omnis vel accusamus aperiam nam
              ullam ad tempore delectus! Sed ex illum recusandae sunt quam
              debitis animi veniam quisquam beatae, in quibusdam, quis quod
              expedita non. Mollitia, nobis, enim aliquid facilis ab quo ut
              neque earum consequuntur necessitatibus iusto recusandae quibusdam
              omnis, libero nisi dicta quas eos cupiditate unde. Quisquam
              deserunt, ad debitis quae eligendi, id harum voluptates, sequi
              nulla tempore modi impedit? Voluptatibus odio dolore distinctio
              porro! Recusandae impedit illo quos ex optio natus accusantium
              officia accusamus quis rerum ad a modi, consequatur obcaecati
              labore quidem id voluptas praesentium est fugit ducimus laboriosam
              voluptatum? Perferendis nostrum enim voluptates vitae nemo facere
              sunt? Possimus omnis ab sed velit, dolore illo maxime quasi optio
              necessitatibus accusantium fuga perspiciatis minus iste quia quam
              dolorem, nulla nihil? Est voluptas consectetur possimus ipsum
              soluta, quibusdam ut consequuntur sequi tenetur eius eveniet
              incidunt et, deserunt, doloribus fugiat. Reiciendis asperiores
              consequuntur fuga, facere necessitatibus tempore excepturi
              reprehenderit soluta sit. Eligendi blanditiis ut necessitatibus
              dolores dolorem ducimus deserunt fugit totam corporis aperiam
              tenetur natus, odio, nobis provident ullam voluptate rerum
              doloremque inventore sed quibusdam repudiandae tempore aspernatur.
              Facilis distinctio impedit incidunt, numquam accusamus adipisci
              similique perferendis ut sequi officia corporis nobis ipsa
              consectetur error esse quisquam labore nisi inventore quo dolores
              ad dolore necessitatibus debitis? Corporis corrupti incidunt saepe
              quibusdam, sunt accusamus ea, architecto quidem, recusandae
              assumenda eligendi ipsa ex. Vero, hic commodi asperiores vitae
              quibusdam voluptatibus laudantium dolorem sunt ducimus architecto
              saepe a aliquid, mollitia sapiente? Praesentium voluptatum ex
              dolorem minus iusto nam, quas unde quaerat tenetur nihil ullam ad
              vero adipisci consequuntur velit. Nulla qui deleniti dolor, ut
              debitis molestiae. Itaque autem vero aut nulla quibusdam fugit
              perspiciatis impedit ad maxime, beatae, similique mollitia?
              Laboriosam deleniti sapiente nihil incidunt fuga deserunt? Totam
              non ex, ipsam officiis nesciunt saepe fugiat rem illum est
              consectetur, id possimus quos adipisci tenetur magnam enim
              delectus! Doloribus sunt consequatur quidem voluptatum atque
              deserunt quo. Voluptatibus necessitatibus assumenda voluptates
              repellat praesentium quod provident ea aperiam dolor iusto,
              molestiae aspernatur deserunt. Doloremque sapiente, vero quisquam
              maiores amet possimus ratione distinctio aspernatur dolor quasi
              veniam fugit repudiandae nisi exercitationem beatae deserunt,
              molestiae alias obcaecati atque consequatur cum. Ex consectetur
              recusandae aperiam dolorem nemo, veritatis enim, in tenetur
              distinctio quasi dolore consequatur ipsum. Sint officia nihil
              perspiciatis architecto quam dolorum vitae, eaque perferendis.
              Possimus ipsam quae, excepturi dolores dignissimos laudantium
              minima, in eos animi sint quaerat recusandae id pariatur ipsa?
              Beatae qui dolor odit officiis molestias laudantium eius deserunt
              voluptatem. Neque illum ratione vitae corrupti nostrum, vel
              fugiat. Obcaecati pariatur quasi sequi eaque tempora error quos
              asperiores cum aut adipisci autem facere, totam velit consequuntur
              corporis provident sapiente cupiditate molestias consectetur
              placeat. Dolores, dolor. Veritatis recusandae nesciunt voluptas
              tempora magni, dolores fuga hic iusto eius in sequi at amet
              aperiam? Nulla magni voluptatum dolorum alias, eos illum
              recusandae facere, inventore non sapiente atque! Consectetur ullam
              provident exercitationem beatae aliquid doloremque eaque rerum
              earum alias harum, dolor quidem magni dolorum temporibus, at nobis
              asperiores quae numquam pariatur, quo consequatur ducimus
              voluptatem mollitia? Tempora, delectus recusandae consequatur
              maiores necessitatibus animi. Atque ratione laborum facere
              inventore maiores ipsam voluptatibus vel quia ipsum, fugiat, nemo
              est suscipit, repellat quisquam perferendis voluptate cum aperiam
              quos vitae quibusdam. Officia doloremque eius cupiditate maiores
              veniam ex possimus placeat at, dolor nisi porro impedit vitae
              numquam, earum nobis culpa recusandae dolore reiciendis
              consectetur voluptates est architecto. Obcaecati, a! Neque qui non
              tempore corrupti debitis quia vero eius assumenda consectetur ad
              quam quo, ex blanditiis nihil corporis maiores nemo soluta autem!
              Alias, fugiat vero, sequi atque blanditiis error doloremque velit,
              quae commodi soluta non sit voluptatibus! Qui necessitatibus
              nesciunt architecto ab autem ex exercitationem repellendus! Maxime
              minima ipsum reiciendis quaerat molestiae, optio cumque impedit
              quas velit qui. Ullam cumque at vero eius voluptate mollitia eum
              labore quasi magnam. Dolor consectetur at culpa aspernatur quis
              esse deserunt, assumenda maxime nihil tenetur autem laboriosam ut
              eligendi. Ut aperiam commodi sunt quas voluptates, expedita
              tempora quo! Voluptatum rem necessitatibus impedit eum, quia
              dolorem ducimus libero repudiandae praesentium minus totam vitae,
              distinctio pariatur maiores veritatis similique blanditiis commodi
              cupiditate at a. Voluptatibus atque reprehenderit odio
              consequatur, quaerat magni ab! Rem, eligendi neque quasi quaerat
              et sunt earum exercitationem officia id placeat reprehenderit
              atque aut corporis quae labore ab quis delectus iure aspernatur
              doloribus soluta! Rem culpa aut voluptate modi blanditiis
              laudantium nam similique esse libero nemo.
            </Text>
          </Scrollbar>
        </GridItem>
      </Show>
      <GridItem area="main">
        <BeansGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
