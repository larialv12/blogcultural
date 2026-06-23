import { useState } from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import FormArtista from '../FormArtista/FormArtista'

interface ModalArtistaProps {
  onAddArtist: (artist: {
    id: number
    name: string
    role: string
    image: string
  }) => void
}

function ModalArtista({ onAddArtist }: ModalArtistaProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      modal
      trigger={
        <button
          type='button'
          onClick={() => setOpen(true)}
          className='rounded-md bg-brand-medium px-5 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent'
        >
          Artista
        </button>
      }
      contentStyle={{
        borderRadius: '1rem',
        paddingBottom: '2rem',
        background: 'transparent',
        border: 'none',
        padding: '0',
        width: 'auto',
        boxShadow: 'none',
      }}
    >
      <FormArtista
        onAddArtist={(artist) => {
          onAddArtist(artist)
          setOpen(false)
        }}
      />
    </Popup>
  )
}

export default ModalArtista