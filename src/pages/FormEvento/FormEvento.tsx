import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

function FormEvento() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className=" bg-brand-gradient rounded-2xl shadow-lg w-full max-w-2xl p-10">
        <h3 className="text-5xl text-center mb-12 color-brand-surface">
          Cadastro de Evento
        </h3>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label     htmlFor="nome"
              className="text-lg font-medium color-brand-surface">
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome do Artista"
              required
              className="border-2 border-blue-500 rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="profissao" className="text-lg">
              Data
            </label>

            <input
              type="data"
              id="profissao"
              name="profissao"
              placeholder="Ex: Cantor, Pintor, Ator..."
              required
              className="border border-slate-500 rounded-md p-4 text-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-brand-medium hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md w-48 mx-auto transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    // </div>
  );
}

export default FormEvento;