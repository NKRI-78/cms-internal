import React, { createContext, useContext, useRef } from "react";

interface MessageEndContextType {
  messageEndRef: React.RefObject<HTMLDivElement>;
}

const MessageEndContext = createContext<MessageEndContextType | undefined>(
  undefined
);

export const MessageEndProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  return (
    <MessageEndContext.Provider value={{ messageEndRef }}>
      {children}
    </MessageEndContext.Provider>
  );
};

export const useMessageEnd = () => {
  const context = useContext(MessageEndContext);
  if (!context) {
    throw new Error(
      "useMessageEnd must be used within a MessageEndProvider"
    );
  }
  return context;
};
