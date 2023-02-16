// images
import mainEducation from "../assets/mainPage/mainEducation.webp";
import sobiraemcomputer1 from "../assets/otherPages/education/sobiraem_computer_samostoyatelno.webp";
import kaknauchitsa1 from "../assets/otherPages/education/kak_nauchitsa_programmirovat.webp";

export const educationArticles = [
  // ARTICLE 1 START
  {
    id: "Выбираем специализацию в программировании",
    img: mainEducation,
    pretitle: "Самообразование",
    title: "Выбираем специализацию в программировании",
    tagString: "самообразование программирование специализация",
    tags: [
      {
        tag: "самообразование",
        tagLink: "#",
      },
      {
        tag: "программирование",
        tagLink: "#",
      },
      {
        tag: "специализация",
        tagLink: "#",
      },
    ],
    linkToArticle: "/interior/Выбираем специализацию в программировании",
    // text: "interior text",
  },
  // ARTICLE 1 END

  // ARTICLE 2 START
  {
    id: "Собираем компьютер самостоятельно",
    img: sobiraemcomputer1,
    pretitle: "Самообразование",
    title: "Собираем компьютер самостоятельно",
    tagString: "компьютер сборка",
    tags: [
      {
        tag: "компьютер",
        tagLink: "#",
      },
      {
        tag: "сборка",
        tagLink: "#",
      },
    ],
    linkToArticle: "/interior/Собираем компьютер самостоятельно",
    // text: "interior text",
  },
  // ARTICLE 2 END

  // ARTICLE 3 START
  {
    id: "Как научиться программировать",
    img: kaknauchitsa1,
    pretitle: "Самообразование",
    title: "Как научиться программировать",
    tagString: "программирование самообразование",
    tags: [
      {
        tag: "программирование",
        tagLink: "#",
      },
      {
        tag: "самообразование",
        tagLink: "#",
      },
    ],
    linkToArticle: "/interior/Как научиться программировать",
    // text: "interior text",
  },
  // ARTICLE 3 END
];
