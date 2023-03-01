import React from "react";

// import component
import Button from "./Button";

const MainContact = () => {
  return (
    <section className="bg-secondary/60 dark:bg-secondary">
      <div className="wrapper section h-[300px] lg:h-[400px] flex items-center justify-center text-center flex-col gap-y-3 lg:gap-y-6">
        <h2 className="text-dark/80 text-sm lg:text-2xl xl:text-4xl md:w-2/3">
          Получайте новые полезные статьи прямо на ваш почтовый ящик
        </h2>

        <form className="flex flex-col gap-y-4 items-center">
          <input
            type="email"
            placeholder="Адрес электронной почты*"
            required
            className="bg-white outline-none focus:ring-0 p-3 border border-primary focus:invalid:text-red-500 focus:invalid:border-red-500 placeholder:text-xs lg:placeholder:text-lg lg:w-96 text-dark text-sm lg:text-lg"
          />
          <button className="btn">
            Подписаться
          </button>
          {/* <Button link={"#!"} text={"Подписаться"} bg={'grey'}/> */}
        </form>
      </div>
    </section>
  );
};

export default MainContact;
