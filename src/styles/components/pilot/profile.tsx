import { styled } from "../../../lib/styled-components/styled-components";

export const ProfileContainer = styled.div``;

export const ProfileHeaderNavigation = styled.div`
  position: absolute;
  margin: 0.5em;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #999999;
  color: #ffffff;
  align-items: center;
`;

export const ReturnButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #999999;
  text-decoration: none;
  margin: 5px;
  border: none;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    color: white;
    svg {
      fill: white;
    }
  }
`;

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
  background-color: black;
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export const ProfileText = styled.p<{
  size?: "small" | "medium" | "large" | "extralarge";
}>`
  font-size: ${({ size }) =>
    size === "small"
      ? "12px"
      : size === "medium"
      ? "16px"
      : size === "large"
      ? "24px"
      : size === "extralarge"
      ? "60px"
      : "12px"};
  margin-top: 0;
  font-weight: 600;
`;

export const ProfileTextContainer = styled.div`
  margin: auto;
`;

export const ProfileContent = styled.div`
  padding: 0.5em;
`;

export const RaceDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
`;

export const RaceDetailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 2em;
  margin: 2em 2em 2em 2em;
  width: 11em;
  height: 11em;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
`;
