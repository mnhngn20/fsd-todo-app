import React, { useContext, useLayoutEffect, useState } from 'react';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { localStorageGetItem } from '@/shared/lib';
import { LoadingScreen } from '@/shared/ui';
import { useGetMe } from '../hooks/useGetMe';
import { User } from './user.type';

export interface IUserContext {
  currentUser?: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  fetchMe: () => void;
}

const defaultValue: IUserContext = {
  currentUser: undefined,
  setCurrentUser: () => {},
  fetchMe: () => {}
};

export const UserContext = React.createContext<IUserContext>(defaultValue);

export const UserContextProvider = ({
  children
}: {
  children: JSX.Element;
}) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [getMe, { loading }] = useGetMe();

  const fetchMe = () => {
    if (localStorageGetItem(ACCESS_TOKEN_LS_KEY)) {
      (async () => {
        const me = await getMe();
        if (me) {
          setCurrentUser(me);
        }
      })();
    }
  };

  useLayoutEffect(() => {
    fetchMe();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        fetchMe
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useSetCurrentUser = () => {
  const { setCurrentUser } = useContext(UserContext);

  return setCurrentUser;
};
export const useFetchMe = () => {
  const { fetchMe } = useContext(UserContext);

  return fetchMe;
};

export const useGetCurrentUser = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser;
};
