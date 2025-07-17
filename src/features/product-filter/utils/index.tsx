export const sortByList = [
  'Default',
  'low-high',
  'high-low',
  'rating',
  'title',
];

export const debounce = (fn: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
