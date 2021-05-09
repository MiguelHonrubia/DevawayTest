import * as React from "react";
import { PilotType } from "../models/pilot";
import { CompetitionRaceType } from "../models/race";
import { RaceRanking } from "../models/ranking";
import { getPilots, getPilotById } from "../services/pilot";
import { getCompetitionRaces } from "../utils/races";
import { calculateRanking } from "../utils/ranking";

interface PilotState {
  loading: boolean;
  pilots: PilotType[];
  selectedPilot: PilotType;
  competitionRaces: CompetitionRaceType[];
  racesRanking: RaceRanking[];
}

interface PilotStateContext extends PilotState {
  setState?: React.Dispatch<React.SetStateAction<PilotState>>;
}

const initialPilotState: PilotState = {
  loading: false,
  pilots: [],
  selectedPilot: {} as PilotType,
  competitionRaces: [],
  racesRanking: [],
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

  const initialFetch = async () => {
    await fetchAllPilots();
  };

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
    fetchCompetitionRaces(pilotsAux);

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

  const fetchCompetitionRaces = async (pilotsAux: any) => {
    setLoadingState();

    const races = getCompetitionRaces(pilotsAux);
    const racesRanking = calculateRanking(pilotsAux, races);

    context.setState &&
      context.setState((state) => ({
        ...state,
        competitionRaces: races,
        racesRanking: racesRanking,
        loading: false,
      }));
  };

  return {
    ...context,
    fetchAllPilots,
    fetchPilot,
    fetchCompetitionRaces,
    initialFetch,
  };
};

export const PilotProvider = ({ children }: any) => {
  const [state, setState] = React.useState(initialPilotState);
  return (
    <PilotContext.Provider
      value={{
        loading: state.loading,
        pilots: state.pilots,
        selectedPilot: state.selectedPilot,
        competitionRaces: state.competitionRaces,
        racesRanking: state.racesRanking,
        setState,
      }}
    >
      {children}
    </PilotContext.Provider>
  );
};
