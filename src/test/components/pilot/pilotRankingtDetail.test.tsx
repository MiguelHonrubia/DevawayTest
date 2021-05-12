import { render, screen } from "@testing-library/react";
import { PilotRaceDetail } from "../../../components/pilot/pilotRankingtDetail";
import { RaceRanking } from "../../../models/ranking";
import "@testing-library/jest-dom";

const raceRanking: RaceRanking[] = [
  {
    race: { name: "Race test 1" },
    pilots: [
      {
        _id: "5678",
        time: "1:21:17.121",
      },
    ],
  },
  {
    race: { name: "Race test 2" },
    pilots: [
      {
        _id: "5678",
        time: "1:17:01.021",
      },
    ],
  },
];

test("PilotRaceDetailCard render position", () => {
  const idPilot = "5678";

  render(
    <PilotRaceDetail
      idPilot={idPilot}
      raceRanking={raceRanking}
      showTimes={false}
    />
  );

  expect(screen.getByText("Race test 1")).toBeInTheDocument();
  expect(screen.getByText("Race test 2")).toBeInTheDocument();
  expect(screen.queryAllByText("goldTrophy.svg").length === 2).toBeTruthy();
});

test("PilotRaceDetailCard render time", () => {
  const idPilot = "5678";

  render(
    <PilotRaceDetail
      idPilot={idPilot}
      raceRanking={raceRanking}
      showTimes={true}
    />
  );

  expect(screen.getByText("Race test 1")).toBeInTheDocument();
  expect(screen.getByText("Race test 2")).toBeInTheDocument();
  expect(screen.getByText("1 h 17' 01'' 021'''")).toBeInTheDocument();
  expect(screen.getByText("1 h 21' 17'' 121'''")).toBeInTheDocument();
});
