import { render, screen } from "@testing-library/react";
import { PilotRaceDetailCard } from "../../../components/pilot/pilotRaceDetailCard";
import { RaceRanking } from "../../../models/ranking";
import "@testing-library/jest-dom";

const raceRanking: RaceRanking = {
  race: { name: "Race test 1" },
  pilots: [
    {
      _id: "5678",
      time: "1:21:17.121",
      position: 5,
    },
  ],
};

test("PilotRaceDetailCard render position", () => {
  const idPilot = "5678";

  render(
    <PilotRaceDetailCard
      idPilot={idPilot}
      raceRanking={raceRanking}
      showTime={false}
    />
  );

  expect(screen.getByText("Race test 1")).toBeInTheDocument();
  expect(screen.getByText("goldTrophy.svg")).toBeInTheDocument();
  expect(screen.getByText("race.svg")).toBeInTheDocument();
});

test("PilotRaceDetailCard render time", () => {
  const idPilot = "5678";

  render(
    <PilotRaceDetailCard
      idPilot={idPilot}
      raceRanking={raceRanking}
      showTime={true}
    />
  );

  expect(screen.getByText("Race test 1")).toBeInTheDocument();
  expect(screen.getByText("1 h 21' 17'' 121'''")).toBeInTheDocument();
  expect(screen.getByText("race.svg")).toBeInTheDocument();
  expect(screen.getByText("time.svg")).toBeInTheDocument();
});
