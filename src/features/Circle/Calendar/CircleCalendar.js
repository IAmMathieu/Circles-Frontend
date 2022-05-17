import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ModalEvent from './ModalEvent';

export default function CircleCalendar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <ModalEvent open={open} onClose={handleClose} />
    </Box>
  );
}
