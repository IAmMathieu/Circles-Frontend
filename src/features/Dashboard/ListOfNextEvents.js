import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function ListOfNextEvents({ open, onClose, eventsList }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Prochains événements : </DialogTitle>
        <DialogContent>
          {eventsList.map((event) => {
            if (event !== null) {
              console.log(event.title);
              return (
                <>
                  <Typography>{event.start}</Typography>
                  <Typography>{event.title}</Typography>
                  <Typography>{event.description}</Typography>
                </>
              );
            }
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
