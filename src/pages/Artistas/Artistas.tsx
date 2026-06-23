import { useState } from 'react'
import type { Artist } from '../../App'

interface ArtistasProps {
  artists?: Artist[]
}

const VISIBLE_COUNT = 4

function Artistas({ artists }: ArtistasProps) {
  const [page, setPage] = useState(0)
  const artistsArray = artists ?? []

  const total = Math.ceil(artistsArray.length / VISIBLE_COUNT)
  const visible = artistsArray.slice(page * VISIBLE_COUNT, page * VISIBLE_COUNT + VISIBLE_COUNT)

  return (
    <section
      id='artistas'
      className='bg-brand-dark px-4 pb-8 pt-16 md:px-8 md:pb-10 md:pt-20 mb-16 md:mb-24'
    >
      <div className='mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[300px_1fr]'>
        <div>
          <h2 className='text-3xl font-extrabold text-white md:text-4xl'>
            Nossos artistas
          </h2>
          <p className='mt-8 text-lg text-brand-accent'>
            Artistas em destaque na sua região
          </p>

          {total > 1 && (
            <div className='mt-10 flex gap-2'>
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type='button'
                  onClick={() => setPage(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === page
                      ? 'w-6 h-2 bg-brand-accent'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
          {visible.map((artist) => (
            <article key={artist.id} className='min-w-0'>
              <img
                src={artist.image}
                alt={artist.name}
                className='aspect-[4/5] w-full rounded-xl object-cover ring-2 ring-brand-accent ring-offset-2 ring-offset-brand-dark'
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
