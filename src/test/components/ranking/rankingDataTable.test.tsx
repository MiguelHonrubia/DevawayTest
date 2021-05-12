import { render, screen } from "@testing-library/react";
import { RankingDataTable } from "../../../components/ranking/rankingDataTable";
import { CompetitionRaceType } from "../../../models/race";
import { PilotType } from "../../../models/pilot";
import { calculateRanking } from "../../../utils/ranking";
import "@testing-library/jest-dom";

test("RankingDataTable render pilots", () => {
  const competitionRaces: CompetitionRaceType[] = [
    { name: "Race test 0" },
    { name: "Race test 1" },
    { name: "Race test 2" },
  ];
  let pilots: PilotType[] = [
    {
      _id: "5f3a3c5f4984bd9be6a6f655",
      picture: "http://placehold.it/64x64",
      age: 39,
      name: "Richards Floyd",
      team: "VENDBLEND",
      score: 30,
      races: [
        {
          name: "Race 0",
          time: "1:16:53.224",
        },
        {
          name: "Race 1",
          time: "1:31:32.533",
        },
        {
          name: "Race 2",
          time: "1:26:56.186",
        },
      ],
    },
    {
      _id: "5f3a3c5faa55d5c4ea549ac1",
      picture: "http://placehold.it/64x64",
      age: 38,
      name: "Padilla Adkins",
      team: "EURON",
      score: 40,
      races: [
        {
          name: "Race 0",
          time: "1:11:39.515",
        },
        {
          name: "Race 1",
          time: "1:17:24.312",
        },
        {
          name: "Race 2",
          time: "1:22:29.376",
        },
      ],
    },
  ];

  calculateRanking(pilots, competitionRaces);
  const scoreFirstPilot = Number(pilots[0].score);
  const scoreSecondtPilot = Number(pilots[1].score);

  //test if calculation order goes right
  expect(pilots[0].name === "Padilla Adkins").toBeTruthy();

  render(
    <RankingDataTable pilots={pilots} competitionRaces={competitionRaces} />
  );

  //dynamic headers
  expect(screen.getByText("Race test 0")).toBeInTheDocument();
  expect(screen.getByText("Race test 1")).toBeInTheDocument();
  expect(screen.getByText("Race test 2")).toBeInTheDocument();

  //first pilot
  expect(screen.getByText("Padilla Adkins")).toBeInTheDocument();
  expect(screen.getByText(scoreFirstPilot)).toBeInTheDocument();
  expect(screen.getByText("1:11:39.515")).toBeInTheDocument();
  expect(screen.getByText("1:17:24.312")).toBeInTheDocument();
  expect(screen.getByText("1:22:29.376")).toBeInTheDocument();

  //second pilot
  expect(screen.getByText("Richards Floyd")).toBeInTheDocument();
  expect(screen.getByText(scoreSecondtPilot)).toBeInTheDocument();
  expect(screen.getByText("1:16:53.224")).toBeInTheDocument();
  expect(screen.getByText("1:31:32.533")).toBeInTheDocument();
  expect(screen.getByText("1:26:56.186")).toBeInTheDocument();
});
