export const isInTest = () => {
  return process.env.JEST_WORKER_ID !== undefined;
};
