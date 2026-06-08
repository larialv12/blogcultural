import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormArtista from '../FormArtista/FormArtista';

function ModalArtista() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='rounded-md bg-brand-medium px-5 py-2 text-xs font-semibold text-white transition hover:bg-brand-accent'
          >
            Evento
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem',
            background: 'transparent',
    border: 'none',
    padding: '0',
    width: 'auto',
    boxShadow: 'none'
        }}
      >
        <FormArtista />
      </Popup>
    </>
  );
}

export default ModalArtista;