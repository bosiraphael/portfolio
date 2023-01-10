import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";

export default function Home() {
  const LaplandScene = dynamic(
    () => import("../components/LaplandScene/LaplandScene"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Suspense fallback={null}>
          <Header title="Raphaël Bosi" />
          {/* <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur provident a maxime ducimus similique repudiandae iste
            voluptatem distinctio! Officiis eveniet modi, blanditiis maiores
            quae facilis necessitatibus architecto nam. Ut nisi consequatur
            officia nesciunt ipsum quae omnis optio explicabo hic? Possimus, ea!
            Illo maxime nemo error, recusandae ad animi magni? Laboriosam,
            tenetur facere. Eveniet repellat blanditiis unde consequuntur
            expedita quaerat nihil molestiae explicabo numquam provident sed,
            corporis ad esse est accusamus, ex laborum earum cum magni tempora
            assumenda dolorem ea? Velit dignissimos nesciunt eaque pariatur
            magni quisquam facere labore aliquid! Repellat ex provident ab
            praesentium dicta alias, quasi hic voluptates fugit corrupti
            reiciendis error, veritatis ipsam obcaecati aliquam temporibus nulla
            totam necessitatibus perspiciatis. Eos eaque, adipisci animi magnam
            fuga, quo nihil vero hic illum blanditiis iste delectus earum enim
            nesciunt pariatur. Ex provident non nobis consequatur beatae quam at
            vitae numquam iure nam! Quisquam ut aspernatur neque soluta incidunt
            mollitia, magni in atque facilis. Laborum veniam harum beatae magnam
            provident unde magni voluptate minus vero nulla? Magni aut, quod
            nisi excepturi, quas maiores pariatur quae adipisci laborum dolor
            dignissimos mollitia? Harum nulla, nisi doloremque ea ex voluptatum,
            natus voluptatem, incidunt nam aliquam dolorum quibusdam ad ipsam
            temporibus dolore sint! Ipsa eveniet amet vero eligendi similique
            illo blanditiis, quia doloribus soluta a ducimus nostrum fugiat
            cupiditate nam accusantium vitae? Recusandae ullam quae nam,
            blanditiis quidem voluptates in esse reprehenderit, doloremque unde,
            quos totam? Corrupti error maxime pariatur, eligendi aspernatur modi
            ducimus nulla harum dolor tenetur repellendus recusandae sapiente
            blanditiis quaerat neque, autem aliquid quis omnis expedita vel quam
            dolore quod, sint itaque? Debitis dolores laborum fugit voluptatibus
            libero accusamus asperiores officiis magnam dignissimos facilis
            eaque, tempore architecto saepe ratione ab consequatur ipsum, illum
            numquam blanditiis! Soluta enim nobis ipsa non eveniet autem
            possimus, rem vitae. Non, numquam sapiente nesciunt quisquam enim
            architecto cupiditate ullam vero, culpa ipsa eaque optio
            dignissimos, dicta aperiam possimus laboriosam delectus? Modi
            delectus unde commodi possimus aperiam, doloremque reprehenderit
            consequatur dicta cumque accusamus, magnam earum ratione eligendi
            iure cum omnis culpa voluptas optio perspiciatis officia quasi
            nobis? Quaerat, ipsum! Fugit non aperiam repudiandae similique
            praesentium quaerat eaque sint, nobis possimus, laboriosam dolores
            sit dignissimos adipisci vel atque quas soluta itaque perferendis
            iste officiis quasi officia. Sed modi, rem fuga consequuntur
            quibusdam a. Quidem fugiat asperiores, laborum quia quod, voluptatum
            accusantium dolorum animi soluta facilis quos delectus nostrum.
            Suscipit aspernatur explicabo reiciendis cumque expedita sequi at
            dolor optio labore, impedit voluptas animi similique delectus
            reprehenderit facilis deserunt tenetur quibusdam ad odio non nemo
            atque quisquam. Exercitationem debitis sapiente, unde magnam
            dignissimos, vero ea quis ducimus voluptatibus sequi dolorem totam
            facere, inventore quam? Enim sapiente repudiandae necessitatibus
            voluptatum illum quasi, quae nobis dolores a numquam consectetur.
            Totam sit praesentium, sapiente voluptas provident architecto quia
            fuga, iure doloribus consequuntur in. Quia veniam voluptatibus eos
            perferendis ea excepturi accusamus quaerat dignissimos aspernatur
            facilis sed, labore nesciunt dicta nemo omnis minima delectus,
            expedita vel voluptas totam, cum qui exercitationem. Non cum
            repellat dolor maiores neque rerum adipisci cupiditate! Velit
            perferendis quod distinctio illum excepturi aut modi aliquid
            laborum! Fugiat, placeat, tempora distinctio minima esse amet
            obcaecati tenetur, doloremque ut quas minus ex dignissimos sed cum
            corrupti consequuntur error necessitatibus repellendus doloribus
            praesentium ratione animi possimus voluptatem? Voluptate esse
            aliquam odit laboriosam deleniti distinctio nostrum itaque. Minima
            itaque assumenda porro atque commodi obcaecati eius inventore
            perferendis vero, illum suscipit alias vitae ipsam excepturi in
            architecto, cumque cum quaerat recusandae laudantium nulla
            praesentium. Unde, et exercitationem itaque voluptatum totam iure
            iusto provident est nam, maiores beatae commodi similique vitae
            expedita architecto a autem ipsam voluptatibus, iste inventore!
            Aperiam dicta magnam quasi debitis porro, molestias ipsa
            necessitatibus ad inventore. Dolorum id enim exercitationem eum
            maiores dolorem! Deserunt, soluta tempora dignissimos officia iste
            provident vitae? Nulla eos minus aut reiciendis architecto libero
            nobis tempora commodi repudiandae vitae assumenda debitis cumque
            natus dolor voluptatum, quis culpa fuga perferendis consequatur
            laborum quia dolores eligendi! Libero quidem, at quas vel officia
            facere accusantium reprehenderit quam aperiam iusto ex voluptas
            repudiandae temporibus ipsa repellendus dolorem dolores excepturi,
            aliquid illum? Iure ex atque, debitis optio illum doloribus soluta
            necessitatibus sapiente. Nulla dicta perferendis esse unde eum
            asperiores suscipit maiores praesentium. Repellendus officia
            officiis dicta! Voluptatibus nostrum possimus eaque modi. Non
            deleniti cum quam dicta esse sit obcaecati alias dolore ab, aliquid
            tempora quaerat dignissimos laudantium, necessitatibus numquam odit
            debitis. Libero eveniet saepe, veniam tempore unde consequatur vel
            at repudiandae sapiente ratione sequi! Quidem voluptates est,
            laudantium facilis qui inventore repudiandae vero assumenda iusto
            sit recusandae error ut perspiciatis culpa nemo minus nobis magni!
            Distinctio, quas asperiores earum laboriosam dolorum, fugit
            reiciendis nisi architecto, cumque deserunt accusantium? Quas
            blanditiis voluptate autem beatae dolores quaerat fuga nulla
            obcaecati. Deleniti pariatur sit magnam accusantium officia sequi,
            repudiandae, dolorum quae expedita aliquam voluptas, perferendis
            odit error dignissimos similique nihil tempora corrupti! Earum qui
            asperiores sit natus autem aut officia eveniet architecto
            voluptatibus et, temporibus at repellat neque accusamus quis nihil
            quisquam dicta eligendi. Accusantium deleniti, ut fugit facilis quam
            molestiae placeat debitis odio, unde numquam assumenda cupiditate
            libero. Sunt porro dicta earum nesciunt repellendus maiores
            aspernatur, quos possimus perspiciatis inventore cupiditate rem non
            assumenda qui quas asperiores debitis, ullam numquam eius quam
            soluta. Saepe incidunt facilis dolorum odio corrupti? Unde, rem
            nostrum quis dignissimos consectetur eum numquam? Deserunt modi
            expedita, asperiores dolor commodi dignissimos consequatur ipsa
            cupiditate ullam fugiat possimus a alias dolorem nobis laborum
            impedit, saepe, culpa dolores! Non, tempora expedita quidem
            laboriosam, cumque officiis rem voluptatibus illo corporis numquam
            earum vero nostrum debitis ullam delectus sapiente dicta blanditiis
            saepe. Atque iure ratione nam quidem dolores nihil esse odit dolore
            repudiandae dignissimos sed, excepturi dolorum adipisci
            reprehenderit ipsum aliquam eum sunt omnis accusamus? Aperiam
            obcaecati eveniet veniam officiis ab. Rem esse recusandae a
            dignissimos quisquam quas reprehenderit ullam! Cupiditate fuga quis
            temporibus inventore ducimus numquam rem, obcaecati impedit tempore
            quos cumque molestiae eos ipsum sunt nihil pariatur libero corporis
            quaerat recusandae harum quod, repellat quae ipsa. Fugiat
            consequuntur veritatis neque libero voluptas, eaque nulla amet ipsum
            aspernatur eveniet, repellendus quis ut eligendi. Illo, sunt
            explicabo.
          </p> */}
        </Suspense>
      </main>
    </>
  );
}
