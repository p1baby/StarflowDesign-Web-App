import { createContext, ReactNode, useState } from 'react';

interface ITransitionContext {
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransitionContext = createContext<ITransitionContext | undefined>(undefined);

interface ITransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider: React.FC<ITransitionProviderProps> = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <TransitionContext.Provider
      value={{
        completed,
        setCompleted,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;