import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from '@mui/material';

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
                  <Typography>{event.start}</Typography>
                  <Typography>{event.title}</Typography>
                  <Typography>{event.description}</Typography>
                </Box>
              );
            }
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
