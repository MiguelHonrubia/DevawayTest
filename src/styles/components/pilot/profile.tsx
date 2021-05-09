import { styled } from "../../../lib/styled-components/styled-components";

export const ProfileContainer = styled.div``;

export const ProfileHeaderNavigation = styled.div`
  background-color: black;
  color: #ffffff;
  height: 40px;
  align-items: center;
  display: flex;
  padding-left: 1em;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #999999;
  color: #ffffff;
  align-items: center;
`;

export const ReturnButton = styled.button``;

export const ProfileImg = styled.img`
  padding: 0.5em;
  width: 150px;
`;

export const PilotInfo = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CompetitionInfo = styled.span`
  font-size: 24px;
  text-align: center;
`;

export const ProfileText = styled.p<{ size?: "small" | "medium" | "large" }>`
  font-size: ${({ size }) =>
    size == "small"
      ? "12px"
      : size == "medium"
      ? "16px"
      : size == "large"
      ? "24px"
      : "10px"};
  font-weight: 600;
`;

export const ProfileTextContainer = styled.div``;

export const ProfileContent = styled.div`
  padding: 0.5em;
`;

export const RaceDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const RaceDetailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2em;
  margin: 2em 2em 2em 2em;
  width: 11em;
  height: 11em;
`;
