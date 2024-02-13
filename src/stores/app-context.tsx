import React, {createContext, useContext} from 'react';
import {ListModal} from './slice/list-modal';
import {UserInfoModal} from './slice/user-info-modal';

export const AppContext = createContext({} as IAppContext);

export function useAppContext() {
  const contextConsumer = useContext(AppContext);
  return {
    listModal: contextConsumer.listModal,
    userInfoModal: contextConsumer.userInfoModal,
  };
}

const AppContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const listModal = ListModal();
  const userInfoModal = UserInfoModal();

  return (
    <AppContext.Provider
      value={{
        listModal,
        userInfoModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
