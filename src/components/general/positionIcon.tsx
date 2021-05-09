import * as React from "react";
import { ReactComponent as SilverTrophy } from "../../assets/icons/silverTrophy.svg";
import { ReactComponent as GoldTrophy } from "../../assets/icons/goldTrophy.svg";
import { ReactComponent as BronceTrophy } from "../../assets/icons/bronceTrophy.svg";
import { styled } from "../../lib/styled-components/styled-components";

const ContainerIcon = styled.div`
  margin-left: -0.5em;
`;

export const PositionIcon: React.FC<{ position: number }> = ({ position }) => {
  switch (position) {
    case 1:
      return (
        <ContainerIcon>
          <GoldTrophy width={25} height={25}></GoldTrophy>
        </ContainerIcon>
      );
    case 2:
      return (
        <ContainerIcon>
          <SilverTrophy width={25} height={25}></SilverTrophy>
        </ContainerIcon>
      );
    case 3:
      return (
        <ContainerIcon>
          <BronceTrophy width={25} height={25}></BronceTrophy>
        </ContainerIcon>
      );
    default:
      return null;
  }
};
