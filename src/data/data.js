// images
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
  link: "/interior/Выбираем потолок",
};

export const mainInteriorSidebarData = [
  {
    img: mainInteriorSidebar1,
    title: "Инструкция по выбору обоев",
    link: "/interior/Инструкция по выбору обоев",
  },
  {
    img: mainInteriorSidebar2,
    title: "Выбираем межкомнатные двери",
    link: "/interior/Выбираем межкомнатные двери",
  },
  {
    img: mainInteriorSidebar3,
    title: "Виниловая плитка",
    link: "/interior/Виниловая плитка",
  },
];

export const mainGardenData = [
  {
    img: mainGarden1,
    pretitle: "Сад и огород",
    title: "Подготовка почвы для посева",
    link: "/garden/Подготовка почвы для посева",
  },
  {
    img: mainGarden2,
    pretitle: "Сад и огород",
    title: "Выбор теплицы",
    link: "/garden/Выбор теплицы",
  },
  {
    img: mainGarden3,
    pretitle: "Сад и огород",
    title: "Подготовка плодовых деревьев и кустарников к зиме",
    link: "/garden/Подготовка плодовых деревьев и кустарников к зиме",
  },
];

export const mainMaterialsData = {
  img: mainMaterials,
  pretitle: "Стройматериалы",
  title: "Клееный брус",
  text: "Клееный профилированный брус — один из самых современных и востребованных строительных и столярных материалов. Технология, разработанная в 1960-1970 годах, представляет собой склеивание-спрессовывание досок различных хвойных пород",
  link: "/materials/Клееный брус",
};

export const mainMaterialsSidebarData = [
  {
    img: mainMaterialsSidebar1,
    title: "5 самых популярных строительных материалов",
    link: "/materials/5 самых популярных строительных материалов",
  },
  {
    img: mainMaterialsSidebar2,
    title: "Газоблоки",
    link: "/materials/Газоблоки",
  },
  {
    img: mainMaterialsSidebar3,
    title: "Древесные плиты. Характеристики, область применения",
    link: "/materials/Древесные плиты. Характеристики, область применения",
  },
];

export const mainPlumbingData = [
  {
    img: mainPlumbing1,
    pretitle: "Сантехника",
    title: "Выбираем ванну",
    link: "/plumbing/Выбираем ванну",
  },
  {
    img: mainPlumbing2,
    pretitle: "Сантехника",
    title: "Выбираем мойку для кухни",
    link: "/plumbing/Выбираем мойку для кухни",
  },
  {
    img: mainPlumbing3,
    pretitle: "Сантехника",
    title: "Выбор смесителя для кухни",
    link: "/plumbing/Выбор смесителя для кухни",
  },
];

export const mainCountryHouseData = {
  img: mainCountryHouse,
  pretitle: "Дача",
  title: "Искусственный водоем своими руками",
  text: "Искусственный пруд на вашем приусадебном участке создаст неповторимую атмосферу гармонии и безмятежности. Привлечет полезных насекомых и птиц.",
  link: "/country/Искусственный водоем своими руками",
};

export const mainEducationData = {
  img: mainEducation,
  pretitle: "Самообразование",
  title: "Выбираем специализацию в программировании",
  text: "Каждому, кто решил изучать программирование, следует в первую очередь определиться со специализацией. Учитывая свои сильные и слабые стороны, свои интересы, выяснить подойдет ли выбранная специальность. Статья дает краткие описания самых популярных направлений в программировании, среди которых каждый выберет подходящий путь.",
  link: "/education/Выбираем специализацию в программировании",
};

// footer data
export const footerData = {
  logo: "Хочу всё Знать",
  description: "Познавательные статьи на разные случаи жизни. Автор: ",
  author: "Павел Белоусов",
  site: "https://pavelbelousov.vercel.app/",
  footerLinks: [
    {
      mainLink: "Интерьер",
      mainPath: "interior",
      subLinks: [
        {
          link: "Выбираем потолок",
          path: "/interior/Выбираем потолок",
        },
        {
          link: "Инструкция по выбору обоев",
          path: "/interior/Инструкция по выбору обоев",
        },
        {
          link: "Выбираем межкомнатные двери",
          path: "/interior/Выбираем межкомнатные двери",
        },
        {
          link: "Виниловая плитка",
          path: "/interior/Виниловая плитка",
        },
      ],
    },
    {
      mainLink: "Сад и огород",
      mainPath: "garden",
      subLinks: [
        {
          link: "Подготовка почвы для посева",
          path: "/garden/Подготовка почвы для посева",
        },
        {
          link: "Выбор теплицы",
          path: "/garden/Выбор теплицы",
        },
        {
          link: "Подготовка плодовых деревьев и кустарников к зиме",
          path: "/garden/Подготовка плодовых деревьев и кустарников к зиме",
        },
      ],
    },
    {
      mainLink: "Стройматериалы",
      mainPath: "materials",
      subLinks: [
        {
          link: "5 самых популярных строительных материалов",
          path: "/materials/5 самых популярных строительных материалов",
        },
        {
          link: "Клееный брус",
          path: "/materials/Клееный брус",
        },
        {
          link: "Газоблоки",
          path: "/materials/Газоблоки",
        },
        {
          link: "Древесные плиты. Характеристики, область применения",
          path: "/materials/Древесные плиты. Характеристики, область применения",
        },
      ],
    },
    {
      mainLink: "Сантехника",
      mainPath: "plumbing",
      subLinks: [
        {
          link: "Выбираем ванну",
          path: "/plumbing/Выбираем ванну",
        },
        {
          link: "Выбираем мойку для кухни",
          path: "/plumbing/Выбираем мойку для кухни",
        },
        {
          link: "Выбор смесителя для кухни",
          path: "/plumbing/Выбор смесителя для кухни",
        },
      ],
    },
    {
      mainLink: "Дача",
      mainPath: "country",
      subLinks: [
        {
          link: "Искусственный водоем своими руками",
          path: "/country/Искусственный водоем своими руками",
        },
        {
          link: "Описание бань и саун",
          path: "/country/Описание бань и саун",
        },
        {
          link: "Выбираем газонокосилку",
          path: "/country/Выбираем газонокосилку",
        },
      ],
    },
    {
      mainLink: "Самообразование",
      mainPath: "education",
      subLinks: [
        {
          link: "Выбираем специализацию в программировании",
          path: "/education/Выбираем специализацию в программировании",
        },
        {
          link: "Собираем компьютер самостоятельно",
          path: "/education/Собираем компьютер самостоятельно",
        },
        {
          link: "Как научиться программировать",
          path: "/education/Как научиться программировать",
        },
      ],
    },
  ],
};
