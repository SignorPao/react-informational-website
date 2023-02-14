// images
// import Header1 from "../assets/mainPage/hero-1.webp";
// import Header2 from "../assets/mainPage/hero-2.webp";
// import Header3 from "../assets/mainPage/hero-3.webp";

import mainInterior from "../assets/mainPage/mainInterior.webp";
import mainInteriorSidebar1 from "../assets/mainPage/mainInteriorSidebar1.webp";
import mainInteriorSidebar2 from "../assets/mainPage/mainInteriorSidebar2.webp";
import mainInteriorSidebar3 from "../assets/mainPage/mainInteriorSidebar3.webp";

import mainGarden1 from "../assets/mainPage/mainGarden1.webp";
import mainGarden2 from "../assets/mainPage/mainGarden2.webp";
import mainGarden3 from "../assets/mainPage/mainGarden3.webp";

import mainMaterials from "../assets/mainPage/mainMaterials.webp";
import mainMaterialsSidebar1 from "../assets/mainPage/mainMaterialsSidebar1.webp";
import mainMaterialsSidebar2 from "../assets/mainPage/mainMaterialsSidebar2.webp";
import mainMaterialsSidebar3 from "../assets/mainPage/mainMaterialsSidebar3.webp";

import mainPlumbing1 from "../assets/mainPage/mainPlumbing1.webp";
import mainPlumbing2 from "../assets/mainPage/mainPlumbing2.webp";
import mainPlumbing3 from "../assets/mainPage/mainPlumbing3.webp";

import mainCountryHouse from "../assets/mainPage/mainCountryHouse.webp";

import mainEducation from "../assets/mainPage/mainEducation.webp";

// nav data
export const navData = [
  {
    link: "Главная",
    path: "/",
  },
  {
    link: "Интерьер",
    path: "interior",
  },
  {
    link: "Сад и огород",
    path: "garden",
  },
  {
    link: "Стройматериалы",
    path: "materials",
  },
  {
    link: "Сантехника",
    path: "plumbing",
  },
  {
    link: "Дача",
    path: "country",
  },
  {
    link: "Самообразование",
    path: "education",
  },
];

// header hero data
// export const headerData = [
//   {
//     background: "url('../assets/mainPage/hero-1.webp')",
//     // background: Header1,
//     text: "Текст 1",
//     btn: "Узнать больше",
//     path: "#",
//   },
//   {
//     background: "url('../assets/mainPage/hero-2.webp')",
//     // background: Header2,
//     text: "Текст 2",
//     btn: "Узнать больше",
//     path: "#",
//   },
//   {
//     background: "url('../assets/mainPage/hero-3.webp')",
//     // background: Header3,
//     text: "Текст 3",
//     btn: "Узнать больше",
//     path: "#",
//   },
// ];

// main data
export const mainInteriorData = {
  img: mainInterior,
  pretitle: "Интерьер",
  title: "Выбираем потолок",
  text: "Решили установить подвесной потолок? Но не можете определить какой именно выбрать? Тогда эта статья специально для вас. В ней вы узнаете ответы на основные вопросы.",
  link: "",
};

export const mainInteriorSidebarData = [
  {
    img: mainInteriorSidebar1,
    title: "Инструкция по выбору обоев",
    link: "",
  },
  {
    img: mainInteriorSidebar2,
    title: "Выбираем межкомнатные двери",
    link: "",
  },
  {
    img: mainInteriorSidebar3,
    title: "Виниловая плитка",
    link: "",
  },
];

export const mainGardenData = [
  {
    img: mainGarden1,
    pretitle: "Сад и огород",
    title: "Подготовка почвы для посева",
    link: "",
  },
  {
    img: mainGarden2,
    pretitle: "Сад и огород",
    title: "Выбор теплицы",
    link: "",
  },
  {
    img: mainGarden3,
    pretitle: "Сад и огород",
    title: "Подготовка плодовых деревьев и кустарников к зиме",
    link: "",
  },
];

export const mainMaterialsData = {
  img: mainMaterials,
  pretitle: "Стройматериалы",
  title: "Клееный брус",
  text: "Клееный профилированный брус — один из самых современных и востребованных строительных и столярных материалов. Технология, разработанная в 1960-1970 годах, представляет собой склеивание-спрессовывание досок различных хвойных пород",
  link: "",
};

export const mainMaterialsSidebarData = [
  {
    img: mainMaterialsSidebar1,
    title: "5 самых популярных строительных материалов",
    link: "",
  },
  {
    img: mainMaterialsSidebar2,
    title: "Газоблоки",
    link: "",
  },
  {
    img: mainMaterialsSidebar3,
    title: "Древесные плиты. Характеристики, область применения",
    link: "",
  },
];

export const mainPlumbingData = [
  {
    img: mainPlumbing1,
    pretitle: "Сантехника",
    title: "Выбираем ванну",
    link: "",
  },
  {
    img: mainPlumbing2,
    pretitle: "Сантехника",
    title: "Выбираем мойку для кухни",
    link: "",
  },
  {
    img: mainPlumbing3,
    pretitle: "Сантехника",
    title: "Выбор смесителя для кухни",
    link: "",
  },
];

export const mainCountryHouseData = {
  img: mainCountryHouse,
  pretitle: "Дача",
  title: "Искусственный водоем своими руками",
  text: "Искусственный пруд на вашем приусадебном участке создаст неповторимую атмосферу гармонии и безмятежности. Привлечет полезных насекомых и птиц.",
  link: "",
};

export const mainEducationData = {
  img: mainEducation,
  pretitle: "Самообразование",
  title: "Выбираем специализацию в программировании",
  link: "",
};

// footer data
export const footerData = {
  logo: "Лого",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nec enim tellus congue morbi sed proin a. Et sit nunc sit nec quis gravida",
  footerLinks: [
    {
      mainLink: "Интерьер",
      mainPath: "interior",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
    {
      mainLink: "Сад и огород",
      mainPath: "garden",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
    {
      mainLink: "Стройматериалы",
      mainPath: "materials",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
    {
      mainLink: "Сантехника",
      mainPath: "plumbing",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
    {
      mainLink: "Дача",
      mainPath: "country",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
    {
      mainLink: "Самообразование",
      mainPath: "education",
      subLinks: [
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
        {
          link: "SomeFooterSubLink",
          path: "#",
        },
      ],
    },
  ],
};
