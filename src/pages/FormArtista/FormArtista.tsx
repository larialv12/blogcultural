import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

function FormArtista() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-10">
        <h1 className="text-5xl text-center mb-12">
          Cadastro de Artista
        </h1>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-lg">
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
              Profissão
            </label>

            <input
              type="text"
              id="profissao"
              name="profissao"
              placeholder="Ex: Cantor, Pintor, Ator..."
              required
              className="border border-slate-500 rounded-md p-4 text-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md w-48 mx-auto transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormArtista;