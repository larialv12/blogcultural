import { useState, type ChangeEvent, type FormEvent } from 'react'

interface Artist {
  id: number
  name: string
  role: string
  image: string
}

interface FormArtistaProps {
  onAddArtist: (artist: Artist) => void
}

const initialState = {
  name: '',
  role: '',
  image: '',
}

function FormArtista({ onAddArtist }: FormArtistaProps) {
  const [form, setForm] = useState(initialState)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.name.trim() || !form.role.trim()) return

    onAddArtist({
      id: Date.now(),
      name: form.name.trim(),
      role: form.role.trim(),
      image:
        form.image.trim() ||
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=700&q=80',
    })

    setForm(initialState)
  }

  return (
    <div className='w-full max-w-2xl rounded-2xl bg-brand-gradient p-10 shadow-lg'>
      <h3 className='mb-8 text-center text-4xl font-light tracking-wide text-brand-surface'>
        Cadastro de Artista
      </h3>

      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-1.5'>
            <label htmlFor='name' className='text-sm font-medium uppercase tracking-widest text-brand-surface/70'>
              Nome
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Nome do artista'
              required
              className='rounded-lg border-2 border-blue-500 bg-white/10 p-3 text-base text-brand-surface placeholder:text-brand-surface/40 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/40 transition'
            />
          </div>

          <div className='flex flex-col gap-1.5'>
            <label htmlFor='role' className='text-sm font-medium uppercase tracking-widest text-brand-surface/70'>
              Profissão
            </label>
            <input
              type='text'
              id='role'
              name='role'
              value={form.role}
              onChange={handleChange}
              placeholder='Ex: Cantor, Pintor, Ator...'
              required
              className='rounded-lg border border-slate-500 bg-white/10 p-3 text-base text-brand-surface placeholder:text-brand-surface/40 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/40 transition'
            />
          </div>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label htmlFor='image' className='text-sm font-medium uppercase tracking-widest text-brand-surface/70'>
            URL da imagem <span className='normal-case tracking-normal opacity-50'>(opcional)</span>
          </label>
          <input
            type='text'
            id='image'
            name='image'
            value={form.image}
            onChange={handleChange}
            placeholder='https://...'
            className='rounded-lg border border-slate-500 bg-white/10 p-3 text-base text-brand-surface placeholder:text-brand-surface/40 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/40 transition'
          />
        </div>

        <div className='mt-2 flex justify-center'>
          <button
            type='submit'
            className='w-48 rounded-lg bg-brand-medium px-8 py-3 font-bold text-white transition duration-300 hover:bg-indigo-700 active:scale-95'
          >
            Cadastrar
          </button>
        </div>

      </form>
    </div>
  )
}

export default FormArtista