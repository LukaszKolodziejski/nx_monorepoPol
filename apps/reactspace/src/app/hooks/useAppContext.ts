import { useContext } from 'react';

import { AppContext } from '../contexts/AppContext';

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('App context must be use inside AppProvider');

  return context;
};
