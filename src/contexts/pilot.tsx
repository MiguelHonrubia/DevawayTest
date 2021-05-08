import * as React from "react";
import { PilotType } from "../models/pilot";
import { getPilots, getPilotById } from "../services/pilot";

interface PilotState {
  loading: boolean;
  pilots: PilotType[];
  selectedPilot: PilotType;
}

interface PilotStateContext extends PilotState {
  setState?: React.Dispatch<React.SetStateAction<PilotState>>;
}

const initialPilotState: PilotState = {
  loading: false,
  pilots: [],
  selectedPilot: {} as PilotType,
};

const initialPilotStateContext: PilotStateContext = {
  ...initialPilotState,
  setState: undefined,
};

export const PilotContext = React.createContext<PilotStateContext>(
  initialPilotStateContext
);

export const usePilotContext = () => {
  const context = React.useContext(PilotContext);

  const setLoadingState = () => {
    context.setState &&
      context.setState((state) => ({
        ...state,
        loading: true,
      }));
  };

  const fetchAllPilots = async () => {
    setLoadingState();
    const pilotsAux = await getPilots();
    context.setState &&
      context.setState((state) => ({
        ...state,
        pilots: pilotsAux,
        loading: false,
      }));
  };

  const fetchPilot = async (id: string) => {
    setLoadingState();

    const pilot = await getPilotById(id);

    context.setState &&
      context.setState((state) => ({
        ...state,
        selectedPilot: pilot,
        loading: false,
      }));
  };

  return { ...context, fetchAllPilots, fetchPilot };
};

export const PilotProvider = ({ children }: any) => {
  const [state, setState] = React.useState(initialPilotState);
  return (
    <PilotContext.Provider
      value={{
        loading: state.loading,
        pilots: state.pilots,
        selectedPilot: state.selectedPilot,
        setState,
      }}
    >
      {children}
    </PilotContext.Provider>
  );
};
