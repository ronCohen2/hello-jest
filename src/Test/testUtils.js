export const findByTestAtrr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
