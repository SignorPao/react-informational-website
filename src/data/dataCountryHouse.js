// images
import mainCountryHouse from "../assets/mainPage/mainCountryHouse.webp";
import opisaniebanisaun1 from "../assets/otherPages/countryHouse/opisanie_ban_i_saun.webp";
import vybiraemgazonokosilku from "../assets/otherPages/countryHouse/vybiraem_gazonokosilku.webp";

// country house articles
export const countryHouseArticles = [
  // ARTICLE 1 START
  {
    id: "Искусственный водоем своими руками",
    img: mainCountryHouse,
    pretitle: "Дача",
    title: "Искусственный водоем своими руками",
    tagString: "дача искусственный водоем пруд",
    tags: [
      {
        tag: "дача",
        tagLink: "#",
      },
      {
        tag: "искусственный",
        tagLink: "#",
      },
      {
        tag: "водоем",
        tagLink: "#",
      },
      {
        tag: "пруд",
        tagLink: "#",
      },
    ],
    linkToArticle: "/country/Искусственный водоем своими руками",
    // text: "interior text",
  },
  // ARTICLE 1 END

  // ARTICLE 2 START
  {
    id: "Описание бань и саун",
    img: opisaniebanisaun1,
    pretitle: "Дача",
    title: "Описание бань и саун",
    tagString: "баня сауна терма хаммам",
    tags: [
      {
        tag: "баня",
        tagLink: "#",
      },
      {
        tag: "сауна",
        tagLink: "#",
      },
      {
        tag: "терма",
        tagLink: "#",
      },
      {
        tag: "хаммам",
        tagLink: "#",
      },
    ],
    linkToArticle: "/country/Описание бань и саун",
    // text: "interior text",
  },
  // ARTICLE 2 END

  // ARTICLE 3 START
  {
    id: "Выбираем газонокосилку",
    img: vybiraemgazonokosilku,
    pretitle: "Дача",
    title: "Выбираем газонокосилку",
    tagString: "газонокосилка газон трава",
    tags: [
      {
        tag: "газонокосилка",
        tagLink: "#",
      },
      {
        tag: "газон",
        tagLink: "#",
      },
      {
        tag: "трава",
        tagLink: "#",
      },
    ],
    linkToArticle: "/country/Выбираем газонокосилку",
    // text: "interior text",
  },
  // ARTICLE 3 END
];
