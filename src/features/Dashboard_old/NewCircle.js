import './style.scss';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Input } from '../Common/Input/Input';

function NewCircle() {
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const [openJoin, setOpenJoin] = useState(false);
  const handleOpenJoin = () => setOpenJoin(true);
  const handleCloseJoin = () => setOpenJoin(false);

  return (
    <div className='newcircle'>
      <AddCircleIcon className='newcircle--addCircleIcon' color='secondary' />
      <a
        className='newcircle--create newcircle--hide'
        onClick={handleOpenCreate}
      >
        Créer un cercle
      </a>
      <hr className='newcircle--line' />
      <a className='newcircle--join newcircle--hide' onClick={handleOpenJoin}>
        Joindre un cercle
      </a>
      <Modal
        open={openCreate}
        onClose={handleCloseCreate}
        aria-labelledby='modal-join-circle'
        aria-describedby='créer un cercle'
      >
        <Box className='newcircle--createcircle--modal'>
          <form
            name='newcircle--createcircle'
            className='newcircle--createcircle__form '
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <h2 className='newcircle--createcircle--modal__title'>
              Créer un nouveau cercle
            </h2>
            <p className='newcircle--createcircle--modal__description'>
              Pour créer un cercle, rien de plus simple ! Il suffit de lui
              donner un nom, une description, une couleur et une image.
            </p>
            <Input
              name='Nom du cercle'
              input='name'
              type={'text'}
              className='newcircle--createcircle__form--name'
            />
            <Input
              className='newcircle--createcircle__form--desc'
              name='Description du cercle'
              input='description'
              type={'text'}
            />
            <Input
              name='Couleur du cercle'
              input='color'
              type={'color'}
              className='newcircle--createcircle__form--color'
            />
            <Input
              className='newcircle--createcircle__form--url'
              name="URL de l'image"
              input='url'
              type={'url'}
              pattern='https://.*'
            />
            <button
              className='newcircle--createcircle--modal__button'
              type={'submit'}
            >
              Créer le cercle
            </button>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openJoin}
        onClose={handleCloseJoin}
        aria-labelledby='modal-join-circle'
        aria-describedby='joindre un cercle'
      >
        <Box className='newcircle--joincircle--modal'>
          <form
            name='newcircle--joincircle'
            className='newcircle--joincircle__form '
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <h2 className='newcircle--joincircle--modal__title'>
              Rejoindre un cercle
            </h2>
            <p className='newcircle--joincircle--modal__description'>
              Pour rejoindre un cercle existant, entrez son code unique
              ci-dessous.
            </p>
            <TextField className='newcircle--joincircle--modal__input' />
            <button
              className='newcircle--joincircle--modal__button'
              type={'submit'}
            >
              Rejoindre
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default NewCircle;
