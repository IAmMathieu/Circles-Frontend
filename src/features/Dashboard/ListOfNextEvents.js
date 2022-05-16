import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';
import { format } from 'date-fns'

export default function ListOfNextEvents({ open, onClose, eventsList }) {
  return (

    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Prochains événements : </DialogTitle>
        <DialogContent>
          {eventsList.map((event) => {
            if (event !== null) {
              return (
                <Box key={Date.now()}>
                  <Typography>Le {format(new Date(event.start), 'dd/MM/yyyy')}, il y aura :</Typography>
                  <Typography>{event.title}</Typography>
                </Box>
              );
            }
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
