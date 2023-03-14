import React, { useContext } from "react";

export const GameContext = React.createContext<{ isFetchingGame?: boolean }>({});
GameContext.displayName = "GameContext";

export const GameContextProvider = GameContext.Provider;
export const GameContextConsumer = GameContext.Consumer;
export const useGameContext = () => useContext(GameContext);
