import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';
import { useDetails } from '../../../hooks/useDetails';

export interface DetailsDialogProps {
  cardId: number | null;
  open: boolean;

  onClose: (flag: boolean) => void;
}

export function DetailsDialog({ cardId, open, onClose }: DetailsDialogProps) {
  const { data, isLoading } = useDetails(cardId as number);

  if (!data && isLoading) return <CircularProgress />;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{data.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{data.company}</DialogContentText>
          <DialogContentText>{data.company}</DialogContentText>
          <DialogContentText>{data.number_of_active_users}</DialogContentText>
          <DialogContentText>{data.number_of_users}</DialogContentText>
          <DialogContentText>{data.server_address}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
