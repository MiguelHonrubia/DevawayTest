import { PilotType } from "../models/pilot";
import data from "./drivers_karts_Front.json";

export const getPilots = (): Promise<PilotType[]> => {
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPilotById = (id: string): Promise<PilotType> => {
  try {
    const driver = data.find((item: PilotType) => item._id === id);
    if (driver) {
      return Promise.resolve(driver);
    }
    throw new Error(`Pilot with id: ${id} not found`);
  } catch (error) {
    return Promise.reject(error);
  }
};
