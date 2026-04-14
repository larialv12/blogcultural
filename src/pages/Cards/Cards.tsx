import React from 'react';

const featuredCard = {
  title: 'Concertos Candlelight em Sao Paulo',
  headline: 'Candlelight traz para voce a melhor musica de uma forma nunca antes vista!',
  image:
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
};

const cards = [
  {
    id: 1,
    title: 'Pinte um quadro ou taca com um artista',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Traslado privativo do aeroporto de Guarulhos (GRU) para Sao Paulo',
    image:
      'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Servico de transporte de/para Paraty',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Cards() {
  return (
    <section className='w-full  px-4 py-10 md:px-8'>
      <div className='mx-auto w-full max-w-6xl'>
        <article className='grid gap-6 rounded-sm  md:grid-cols-[1.05fr_1.95fr]'>
          <div className='h-64 w-full md:h-[260px]'>
            <img
              src={featuredCard.image}
              alt={featuredCard.title}
              className='h-full w-full rounded-sm object-cover'
            />
          </div>

          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-extrabold leading-tight text-[#0e133a] md:text-4xl'>
              {featuredCard.title}
            </h2>
            <p className='mt-4 text-xl font-bold text-[#0e133a]'>
              {featuredCard.headline}
            </p>
            <p className='mt-2 text-lg leading-relaxed text-[#303030]'>
              <span className='font-semibold text-[#5d7fd6]'>Concertos Candlelight</span>{' '}
              trazem a magia de uma experiencia musical multi-sensorial ao vivo para locais
              inspiradores nunca antes utilizado para este proposito em Sao Paulo.
            </p>
          </div>
        </article>

        <div className='mt-10 grid gap-5 md:grid-cols-3'>
          {cards.map((card) => (
            <article key={card.id} className='overflow-hidden rounded-xl bg-transparent'>
              <div className='h-60 w-full'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='h-full w-full rounded-xl object-cover'
                />
              </div>

              <h3 className='mt-3 text-2xl font-semibold leading-tight text-[#4465b7]'>
                {card.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
