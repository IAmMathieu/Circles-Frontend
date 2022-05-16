import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
<<<<<<< HEAD
import { Typography } from '@mui/material';
=======
import { Box, Typography } from '@mui/material';
>>>>>>> feature/dynamicCards

export default function ListOfNextEvents({ open, onClose, eventsList }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Prochains événements : </DialogTitle>
        <DialogContent>
          {eventsList.map((event) => {
            if (event !== null) {
              return (
<<<<<<< HEAD
                <>
                  <Typography>{event.start}</Typography>
                  <Typography>{event.title}</Typography>
                  <Typography>{event.description}</Typography>
                </>
=======
                <Box key={Date.now()}>
                  <Typography>{event.start}</Typography>
                  <Typography>{event.title}</Typography>
                </Box>
>>>>>>> feature/dynamicCards
              );
            }
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
