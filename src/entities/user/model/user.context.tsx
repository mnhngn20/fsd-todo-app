import React, { useContext, useLayoutEffect, useState } from 'react';
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants';
import { localStorageGetItem } from '@/shared/lib';
import { LoadingScreen } from '@/shared/ui';
import { useGetMe } from '../hooks/useGetMe';
import { User } from './user.type';

export interface IUserContext {
  currentUser?: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const defaultValue: IUserContext = {
  currentUser: undefined,
  setCurrentUser: () => {}
};

export const UserContext = React.createContext<IUserContext>(defaultValue);

export const UserContextProvider = ({
  children
}: {
  children: JSX.Element;
}) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [getMe, { loading }] = useGetMe();

  useLayoutEffect(() => {
    if (localStorageGetItem(ACCESS_TOKEN_LS_KEY)) {
      (async () => {
        const resp = await getMe();
        if (resp?.success) {
          setCurrentUser(resp.user);
        }
      })();
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser
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

export const useGetCurrentUser = () => {
  const { currentUser } = useContext(UserContext);

  return {
    ...currentUser,
    name: currentUser?.firstName ?? '' + currentUser?.lastName ?? ''
  } as User & { name: string };
};
