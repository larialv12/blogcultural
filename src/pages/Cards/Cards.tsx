import { useState } from 'react'
import type { EventItem } from '../../App'

interface CardsProps {
  events?: EventItem[]
}

export default function Cards({ events }: CardsProps) {
  const [showMore, setShowMore] = useState(false)
  const eventsArray = events ?? []

  const featured = eventsArray.slice(0, 7)
  const extra = eventsArray.slice(7)

  const [card1, card2, card3, card4, card5, card6, card7] = featured

  const renderCard = (card?: EventItem, compact = false) => {
    if (!card) return null

    return (
      <article
        key={card.id}
        className='group relative h-full w-full overflow-hidden rounded-xl'
      >
        <img
          src={card.image}
          alt={card.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90' />

        <div className='absolute inset-x-0 bottom-0 z-10 p-4 text-white'>
          <p className='text-xs font-semibold tracking-wider text-brand-accent'>
            {card.date}
          </p>
          <h3
            className={`${compact ? 'text-base' : 'text-2xl'} mt-1 line-clamp-2 font-bold leading-tight`}
          >
            {card.title}
          </h3>
          {!compact && <p className='mt-2 text-sm text-slate-200'>{card.location}</p>}
        </div>
      </article>
    )
  }

  return (
    <section id='eventos' className='w-full bg-brand-dark px-4 py-12 md:px-8'>
      <div className='mx-auto w-full max-w-[1500px]'>
        <div className='mb-5 text-center'>
          <h2 className='mt-2 text-3xl font-extrabold leading-tight text-white'>
            Eventos em destaque
          </h2>
          <p className='mt-6 text-base font-bold text-brand-accent sm:text-lg'>
            Descubra shows, exposições, teatro e experiências únicas para aproveitar o
            melhor da cena cultural da cidade nesta semana.
          </p>
        </div>

        <div className='grid gap-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
            <div className='h-[300px] md:col-span-2'>{renderCard(card1)}</div>
            <div className='h-[300px]'>{renderCard(card2, true)}</div>
            <div className='h-[300px]'>{renderCard(card3, true)}</div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
            <div className='h-[220px]'>{renderCard(card4, true)}</div>
            <div className='h-[220px]'>{renderCard(card5, true)}</div>
            <div className='h-[220px]'>{renderCard(card6, true)}</div>
            <div className='h-[220px]'>{renderCard(card7, true)}</div>
          </div>

          {showMore && extra.length > 0 && (
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
              {extra.map((card) => (
                <div key={card.id} className='h-[220px]'>
                  {renderCard(card, true)}
                </div>
              ))}
            </div>
          )}
        </div>

        {extra.length > 0 && (
          <div className='mt-8 flex justify-center'>
            <button
              type='button'
              onClick={() => setShowMore((prev) => !prev)}
              className='rounded-full border border-brand-accent px-8 py-3 text-sm font-semibold text-brand-accent transition duration-300 hover:bg-brand-accent hover:text-white'
            >
              {showMore ? 'Ver menos' : `Ver mais (${extra.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}