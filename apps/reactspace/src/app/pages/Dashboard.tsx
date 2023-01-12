import {
  Container,
  Typography,
  Autocomplete,
  TextField,
  CircularProgress,
  Box,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { AppCard, DetailsDialog } from '../core/components';

import { useAppContext } from '../hooks/useAppContext';

export default function Dashboard() {
  const classes = useStyles();
  const { data, isLoading } = useAppContext();

  // @todo: Add proper type here
  const [observaleData, setObservableData] = useState([]) as any;
  const [selectedCard, setSelectedCard] = useState(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const toggleDialog = (flag: boolean) => setOpenDetailsDialog(flag);

  // @todo: Add proper type here
  const onChange = (newData: any) => {
    if (newData) {
      // @todo: use lodash unique to get unique data
      setObservableData((prevData: any) => [...prevData, newData]);
    }
  };

  if (!data && isLoading) return <CircularProgress />;

  return (
    <Container className={classes.root} maxWidth="lg" component="main">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Dashboard Monitor
      </Typography>
      {/* <Typography variant="h5" align="center" color="text.secondary" component="p"> */}
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Select apps and keep eye on them!
      </Typography>
      <Autocomplete
        id="autocomplete-app"
        onChange={(event: any, newApp: any) => onChange(newApp)}
        options={data}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300, marginTop: 2 }}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => {
          return <TextField {...params} label="App" />;
        }}
      />
      {observaleData && (
        <Grid
          className={classes.cardsWrapper}
          container
          spacing={5}
          alignItems="flex-start"
        >
          {/* @todo: Add proper type */}
          {observaleData.map((card: any) => (
            <AppCard
              key={card.id}
              {...card}
              onClick={() => {
                toggleDialog(true);
                setSelectedCard(card.id);
              }}
            />
          ))}
        </Grid>
      )}
      {selectedCard && (
        <DetailsDialog
          cardId={selectedCard}
          open={openDetailsDialog}
          onClose={() => toggleDialog(false)}
        />
      )}
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
  cardsWrapper: {
    padding: 30,
  },
}));
