import { useEffect, useState } from 'react'

const banners = [
  'https://images.unsplash.com/photo-1504284992506-f6d82d0f2f2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1636930435433-32351efb0efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

function Banner() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative h-[360px] w-full overflow-hidden md:h-[390px]'>
      <div
        className='flex h-full transition-transform duration-500'
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Banner ${i + 1}`}
            className='h-full min-w-full shrink-0 object-cover'
          />
        ))}
      </div>

      <div className='absolute inset-0 bg-brand-overlay' />

      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center'>
        <h2 className='max-w-6xl text-4xl font-extrabold leading-tight text-white md:text-6xl'>
          Descubra eventos, artistas
          <br />
          e espaços culturais da sua região
        </h2>

        <button className='mt-8 rounded-md bg-brand-medium px-8 py-3 text-base font-bold text-white transition hover:bg-brand-accent'>
          Saiba Mais
        </button>
      </div>

      <div className='absolute bottom-4 z-20 flex w-full justify-center gap-2'>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Mostrar banner ${i + 1}`}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner
