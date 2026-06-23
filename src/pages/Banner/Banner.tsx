import { useEffect, useState } from 'react'

const banners = [
  
  {
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Evento em destaque',
    title: 'Festival de Arte Urbana',
    description:
      'Um encontro com música, grafite, gastronomia e performances para celebrar a criatividade nas ruas.',
    cta: 'Ver eventos',
    href: '#eventos',
    tags: ['18 Jun', 'São Paulo', 'Entrada gratuita'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1636930435433-32351efb0efc?q=80&w=1600&auto=format&fit=crop',
    eyebrow: 'Novos artistas',
    title: 'Conheça talentos que\nmovimentam a cultura local',
    description:
      'Perfis, trajetórias e trabalhos autorais reunidos para aproximar público e artistas.',
    cta: 'Ver artistas',
    href: '#artistas',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1600&auto=format&fit=crop',
    eyebrow: 'Divulgue sua arte',
    title: 'Compartilhe seus eventos\ne projetos culturais',
    description:
      'Cadastre sua programação e ajude mais pessoas a encontrarem sua produção.',
    cta: 'Divulgar agora',
    href: '#divulga',
  },
]

function Banner() {
  const [index, setIndex] = useState(0)
  const current = banners[index]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative h-[420px] w-full overflow-hidden md:h-[490px]'>
      <div
        className='flex h-full transition-transform duration-700 ease-out'
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <img
            key={banner.title}
            src={banner.image}
            alt={`Banner ${i + 1}`}
            className='h-full min-w-full shrink-0 object-cover'
          />
        ))}
      </div>

      <div className='absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-black/25' />

      <div className='absolute inset-0 z-10 flex items-center justify-center px-4 md:px-8'>
        <div className='w-full max-w-3xl text-center'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent'>
              {current.eyebrow}
            </p>
            <h2 className='mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl'>
              {current.title.split('\n').map((line) => (
                <span key={line} className='block'>
                  {line}
                </span>
              ))}
            </h2>
            <p className='mt-5 text-base leading-7 text-slate-200 md:text-lg'>
              {current.description}
            </p>

            {current.tags && (
              <div className='mt-6 flex flex-wrap justify-center gap-3'>
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-full border border-brand-accent/70 bg-brand-dark/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-accent'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href={current.href}
              className='mt-8 mx-auto inline-flex w-fit rounded-md bg-brand-medium px-8 py-3 text-base font-bold text-white transition hover:bg-brand-accent'
            >
              {current.cta}
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-5 z-20 flex w-full justify-center gap-2'>
        {banners.map((banner, i) => (
          <button
            key={banner.title}
            onClick={() => setIndex(i)}
            aria-label={`Mostrar banner ${i + 1}`}
            className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner