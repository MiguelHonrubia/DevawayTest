export const formatTime = (time: string): string => {
  const timeSplitted = time.split(":");
  const secondsSplitted = timeSplitted[2].split(".");

  return `${timeSplitted[0]} h ${timeSplitted[1]}' ${secondsSplitted[0]}'' ${secondsSplitted[1]}'''`;
};
