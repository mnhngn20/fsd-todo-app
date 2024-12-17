import React, { useContext } from 'react';
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
  const { currentUser, loading, setCurrentUser } = useGetMe();

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

  if (currentUser) {
    return {
      ...currentUser,
      name: currentUser?.firstName ?? '' + currentUser?.lastName ?? ''
    } as User & { name: string };
  }
  return undefined;
};
