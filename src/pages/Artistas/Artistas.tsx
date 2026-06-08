const artists = [
  {
    id: 1,
    name: 'Emma Dorsey',
    role: 'Artista plástica',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Alicia Bell',
    role: 'Escritora',
    image:
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    role: 'Violinista',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Anna Roberts',
    role: 'Cantora',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
  },
]

function Artistas() {
  return (
    <section id='artistas' className='bg-brand-dark px-4 py-16 md:px-8 md:py-20'>
      <div className='mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[300px_1fr]'>
        <div>
          <h2 className='text-3xl font-extrabold text-white md:text-4xl'>
            Nossos artistas
          </h2>
          <p className='mt-8 text-lg text-brand-accent'>
            Artistas em destaque na sua região
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
          {artists.map((artist) => (
            <article key={artist.id} className='min-w-0'>
              <img
                src={artist.image}
                alt={artist.name}
                className={`aspect-[4/5] w-full rounded-xl object-cover ${
                  artist.role === 'Violinista' ? 'grayscale' : ''
                }`}
              />
              <h3 className='mt-5 text-3xl font-semibold leading-tight text-white'>
                {artist.name}
              </h3>
              <p className='mt-4 inline-flex rounded-full border border-brand-accent px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-accent'>
                {artist.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Artistas
