function FormEvento() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-brand-gradient p-6">
      <div className=" bg-brand-gradient rounded-2xl shadow-lg w-full max-w-2xl p-10">
        <h1 className="text-5xl text-center mb-12 color-brand-surface">
          Cadastro de Evento
        </h1>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="text-lg font-medium color-brand-surface"
            >
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome do Evento"
              required
              className="
                border-2 border-brand-accent
                rounded-md p-4 text-lg
               color-brand-surface
                bg-brand-surface
                outline-none
                focus:border-brand-medium
                focus:ring-2 focus:ring-brand-mint
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="data"
              className="text-lg font-medium color-brand-surface"
            >
              Data
            </label>

            <input
              type="date"
              id="data"
              name="data"
              required
              className="
                border border-brand-deep
                rounded-md p-4 text-lg
              color-brand-surface
                bg-brand-surface
                focus:border-brand-medium
                focus:outline-none
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="hora"
              className="text-lg font-medium color-brand-surface"
            >
              Hora
            </label>

            <input
              type="time"
              id="hora"
              name="hora"
              required
              className="
                border border-brand-deep
                rounded-md p-4 text-lg
              color-brand-surface
                bg-brand-surface
                focus:border-brand-medium
                focus:outline-none
              "
            />
          </div>

          <button
            type="submit"
            className="
              bg-brand-purple
              hover:bg-brand-deep
              text-white
              font-bold
              py-3 px-8
              rounded-md
              w-48
              mx-auto
              transition-all
              duration-300
            "
          >
            Cadastrar
          </button>
        </form>
      </div>
    // </div>
  );
}

export default FormEvento;