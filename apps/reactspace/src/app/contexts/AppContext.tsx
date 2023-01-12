import { createContext, ReactNode, useEffect, useState } from 'react';

import { useList } from '../hooks/useList';
import { AppContextType } from './types';

const AppContext = createContext<AppContextType | null>(null);

function AppProvider({ children }: { children: ReactNode }) {
  const {
    data: appList,
    isLoading: isLoadingAppListData,
    isError: isErrorAppListData,
  } = useList();

  //@todo: Add proper type
  const [appListData, setAppListData] = useState<any>(null);

  useEffect(() => {
    setAppListData({
      data: appList,
      isLoading: isLoadingAppListData,
      isError: isErrorAppListData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appList]);

  return (
    <AppContext.Provider value={{ ...appListData }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
