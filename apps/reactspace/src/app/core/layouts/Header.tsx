import { AppBar, Toolbar, Theme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static" color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40 }} />
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  }
}));
