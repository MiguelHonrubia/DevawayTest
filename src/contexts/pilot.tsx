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
  competitionRaces: CompetitionRaceType[];
  racesRanking: RaceRanking[];
}

interface PilotStateContext extends PilotState {
  setState?: React.Dispatch<React.SetStateAction<PilotState>>;
}

const initialPilotState: PilotState = {
  loading: false,
  pilots: [],
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
  const { setState } = context;

  const initialFetch = async () => {
    await fetchAllPilots();
  };

  const setLoadingState = () => {
    setState &&
      setState((state) => ({
        ...state,
        loading: true,
      }));
  };

  const fetchAllPilots = async () => {
    setLoadingState();
    const pilotsAux = await getPilots();
    const races = getCompetitionRaces(pilotsAux);
    const racesRanking = calculateRanking(pilotsAux, races);

    setState &&
      setState((state) => ({
        ...state,
        pilots: pilotsAux,
        competitionRaces: races,
        racesRanking: racesRanking,
        loading: false,
      }));
  };

  const fetchPilot = async (id: string) => {
    setLoadingState();

    const pilot = await getPilotById(id);

    setState &&
      setState((state) => ({
        ...state,
        loading: false,
      }));

    return pilot;
  };

  const fetchPilotWithCompetitionDetails = (id: string) => {
    const index = context.pilots.findIndex((x) => x._id === id);
    if (index !== -1) {
      context.pilots[index].position = index + 1;
      return context.pilots[index];
    }
  };

  return {
    ...context,
    fetchAllPilots,
    fetchPilot,
    initialFetch,
    fetchPilotWithCompetitionDetails,
  };
};

export const PilotProvider = ({ children }: any) => {
  const [state, setState] = React.useState(initialPilotState);
  return (
    <PilotContext.Provider
      value={{
        loading: state.loading,
        pilots: state.pilots,
        competitionRaces: state.competitionRaces,
        racesRanking: state.racesRanking,
        setState,
      }}
    >
      {children}
    </PilotContext.Provider>
  );
};
