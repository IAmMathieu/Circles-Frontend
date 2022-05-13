import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function ListOfUsers({ open, onClose, userList }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Membres du cercle : </DialogTitle>
        <DialogContent>
          {userList?.map((user) => {
            return (
            <Typography>{user.surname}</Typography>
            ) })}
        </DialogContent>
      </Dialog>
    </div>
  );
}
