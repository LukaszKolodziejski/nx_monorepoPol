import { Typography, Button, Card, CardHeader, CardContent, CardActions, Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export type AppCardProps = {
  id: number;
  name: string;
  company: string;

  onClick: (cardId: number) => void;
};

export function AppCard({ id, name, company, onClick }: AppCardProps) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader className={classes.header} title={name} />
        <CardContent className={classes.content}>
          <Typography component="p" variant="subtitle1" align="center">
            Company name: {company}
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained" onClick={() => onClick(id)}>
            Open Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: 'center',
    backgroundColor: theme.palette.grey[200]
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 160
  }
}));
