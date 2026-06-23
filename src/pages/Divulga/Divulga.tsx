import type { Artist, EventItem } from '../../App'
import ModalArtista from '../modalArtista/ModalArtista'
import ModalEvento from '../modalEvento/modalEvento'

interface DivulgaProps {
  onAddArtist: (artist: Artist) => void
  onAddEvent: (event: EventItem) => void
}

function Divulga({ onAddArtist, onAddEvent }: DivulgaProps) {
  return (
    <section
      id='divulga'
      className='relative overflow-hidden text-white'
    >
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=80')",
        }}
      />
      <div className='absolute inset-0 bg-black/55' />
      <div className='absolute inset-0 bg-gradient-to-r from-[#0d3b38]/80 via-transparent to-[#00b5a5]/40' />

      <div className='relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center md:py-32'>
        <span className='mb-5 inline-block rounded-full border border-brand-accent/50 bg-brand-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-accent backdrop-blur-sm'>
          Para artistas e organizadores
        </span>

        <h2 className='text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl'>
          Divulgue suas{' '}
          <span
            className='bg-clip-text text-transparent'
            style={{ backgroundImage: 'linear-gradient(90deg, #4dffd4, #00e5c8)' }}
          >
            artes
          </span>{' '}
          ou{' '}
          <span
            className='bg-clip-text text-transparent'
            style={{ backgroundImage: 'linear-gradient(90deg, #4dffd4, #00e5c8)' }}
          >
            eventos
          </span>
        </h2>

        <p className='mt-6 max-w-xl text-lg leading-relaxed text-white/70'>
          Compartilhe seu trabalho com mais pessoas e crie novas oportunidades
          para sua carreira cultural.
        </p>

        <div className='my-8 h-px w-16 bg-gradient-to-r from-transparent via-[#4dffd4] to-transparent' />

        <div className='flex flex-col gap-4 sm:flex-row sm:gap-5'>
          <div className='[&>button]:inline-flex [&>button]:items-center [&>button]:rounded-full [&>button]:border [&>button]:border-brand-accent/50 [&>button]:bg-brand-accent/10 [&>button]:px-8 [&>button]:py-3 [&>button]:text-xs [&>button]:font-semibold [&>button]:uppercase [&>button]:tracking-widest [&>button]:text-brand-accent [&>button]:backdrop-blur-sm [&>button]:transition [&>button]:duration-200 hover:[&>button]:border-brand-accent hover:[&>button]:bg-brand-accent/20'>
            <ModalEvento onAddEvent={onAddEvent} />
          </div>
          <div className='[&>button]:inline-flex [&>button]:items-center [&>button]:rounded-full [&>button]:border [&>button]:border-brand-accent [&>button]:bg-brand-accent [&>button]:px-8 [&>button]:py-3 [&>button]:text-xs [&>button]:font-semibold [&>button]:uppercase [&>button]:tracking-widest [&>button]:text-brand-dark [&>button]:transition [&>button]:duration-200 hover:[&>button]:bg-brand-mint hover:[&>button]:shadow-[0_0_20px_rgba(0,229,200,0.4)]'>
            <ModalArtista onAddArtist={onAddArtist} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Divulga