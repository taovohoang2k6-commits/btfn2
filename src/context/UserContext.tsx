import { createContext, useState, ReactNode, useContext } from "react";


type User = {
  name: string;
  avatar: string;
};


type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};


export const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser phải dùng trong UserProvider");
  }

  return context;
};