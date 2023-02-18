import React from "react";

const MainContact = () => {
  return (
    <section className="bg-secondaryLight dark:bg-secondary">
      <div className="wrapper section h-[400px] flex items-center justify-center text-center flex-col gap-y-6">
        <h2 className="text-dark/80 text-sm lg:text-2xl xl:text-4xl md:w-2/3">
          Получайте новые полезные статьи прямо на ваш почтовый ящик
        </h2>

        <form className="flex flex-col gap-y-4 items-center">
          <input
            type="email"
            placeholder="Адрес электронной почты*"
            required
            className="bg-white outline-none focus:ring-0 p-3 border border-primary focus:invalid:text-red-500 focus:invalid:border-red-500"
          />
          <button className="bg-primary text-light w-fit p-3">Подписаться</button>
        </form>
      </div>
    </section>
  );
};

export default MainContact;
