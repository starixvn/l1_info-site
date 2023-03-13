import React from "react";
import * as _ from "lodash";

export const playerIdContext = React.createContext<number>(_.random(1, 100000000));
playerIdContext.displayName = "playerIdContextContext";

export const PlayerIdContextProvider = playerIdContext.Provider;
export const usePlayerIdContext = () => React.useContext(playerIdContext);
