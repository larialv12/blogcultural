const cards = [
  {
    id: 1,
    date: '16 MAR',
    category: 'MUSICA',
    title: 'Noite de Jazz ao Vivo',
    location: 'Teatro Bradesco, Sao Paulo',
    price: 'A partir de R$ 80',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    date: '22 MAR',
    category: 'EXPOSICAO',
    title: 'Arte Imersiva: Luz e Cor',
    location: 'Pinacoteca, Sao Paulo',
    price: 'Ingressos R$ 55',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    date: '04 ABR',
    category: 'GASTRONOMIA',
    title: 'Festival Sabores de Rua',
    location: 'Vila Madalena, Sao Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    date: '04 ABR',
    category: 'GASTRONOMIA',
    title: 'Festival Sabores de Rua',
    location: 'Vila Madalena, Sao Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    date: '10 ABR',
    category: 'TEATRO',
    title: 'Comedia em Cena',
    location: 'Teatro UOL, Sao Paulo',
    price: 'Ingressos R$ 60',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    date: '18 ABR',
    category: 'CINEMA',
    title: 'Mostra Cinema Brasileiro',
    location: 'Centro Cultural Sao Paulo',
    price: 'A partir de R$ 35',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    date: '25 ABR',
    category: 'FEIRA',
    title: 'Feira de Design Independente',
    location: 'Galeria Central, Sao Paulo',
    price: 'Entrada gratuita',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Cards() {
  const [card1, card2, card3, card4, card5, card6, card7] = cards;

  const renderCard = (card: (typeof cards)[number], compact = false) => (
    <article
      key={card.id}
      className='group relative h-full w-full overflow-hidden rounded-[16px]'
    >
      <img
        src={card.image}
        alt={card.title}
        className='h-full w-full object-cover transition duration-500 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90' />

      <div className='absolute inset-x-0 bottom-0 z-10 p-4 text-white'>
        <p className='text-xs font-semibold tracking-wider text-cyan-200'>{card.date}</p>
        <h3 className={`${compact ? 'text-base' : 'text-2xl'} mt-1 line-clamp-2 font-bold leading-tight`}>
          {card.title}
        </h3>
        {!compact && <p className='mt-2 text-sm text-slate-200'>{card.location}</p>}
      </div>
    </article>
  );

  return (
    <section className='w-full px-4 py-12 md:px-8'>
      <div className='mx-auto w-full max-w-[1500px]'>
        <div className='mb-5 text-center'>
          
          <h2 className='mt-2 text-6xl font-bold leading-tight text-white md:text-3xl xl:text-3xl'>
            Eventos em destaque
          </h2>
          <p className='mt-6 text-base font-bold text-brand-accent sm:text-lg'>
            Descubra shows, exposicoes, teatro e experiencias unicas para aproveitar o
            melhor da cena cultural da cidade nesta semana.
          </p>
        </div>

        <div className='grid gap-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
            <div className='md:col-span-2 h-[320px]'>{renderCard(card1)}</div>
            <div className='h-[320px]'>{renderCard(card2, true)}</div>
            <div className='h-[320px]'>{renderCard(card3, true)}</div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
            <div className='h-[230px]'>{renderCard(card4, true)}</div>
            <div className='h-[230px]'>{renderCard(card5, true)}</div>
            <div className='h-[230px]'>{renderCard(card6, true)}</div>
            <div className='h-[230px]'>{renderCard(card7, true)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
