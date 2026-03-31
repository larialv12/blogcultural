import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Festival de Cinema',
    subtitle: 'Mostra reúne producoes independentes',
    // price: 'Cultura',
    // oldPrice: 'Destaque',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Nova Exposicao de Arte',
    subtitle: 'Galeria abre temporada com artistas locais',
    // price: 'Artes Visuais',
    // oldPrice: 'Exposicao',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Teatro em Cartaz',
    subtitle: 'Peca contemporanea lota a cena cultural',
    // price: 'Teatro',
    // oldPrice: 'Em Cartaz',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Musica ao Vivo',
    subtitle: 'Agenda de shows movimenta a cidade',
    // price: 'Musica',
    // oldPrice: 'Agenda',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Feira Literaria',
    subtitle: 'Autores e editoras em encontro especial',
    // price: 'Literatura',
    // oldPrice: 'Evento',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Patrimonio Historico',
    subtitle: 'Projeto valoriza memoria e identidade',
    // price: 'Historia',
    // oldPrice: 'Especial',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'Patrimonio Historico',
    subtitle: 'Projeto valoriza memoria e identidade',
    // price: 'Historia',
    // oldPrice: 'Especial',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80',
  },{
   id: 8,
    title: 'Patrimonio Historico',
    subtitle: 'Projeto valoriza memoria e identidade',
    // price: 'Historia',
    // oldPrice: 'Especial',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Cards() {
  return (
    <section className='w-full  px-6 py-10'>
      <div className='mx-auto flex w-[90%] flex-row flex-wrap justify-between gap-y-6'>
        {cards.map((card) => (
          <article
            key={card.id}
            className='flex w-full flex-col overflow-hidden rounded-none sm:w-[48%] lg:w-[24%]'
          >
            <div className='relative h-52 w-full'>
              <img
                src={card.image}
                alt={card.title}
                className='h-full w-full object-cover'
              />
              <span className=''>
                {/* Sale */}
              </span>
            </div>

            <div className='w-full p-4'>
              <h3 className='text-lg font-bold text-gray-900'>{card.title}</h3>
              <p className='mt-1 text-sm text-gray-500'>{card.subtitle}</p>

              <button className='mt-4 w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700'>
                Ver detalhes
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
