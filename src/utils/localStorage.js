export const getState = () => {
  const data = localStorage.getItem('card-app-data');
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

export const saveState = (state) => {
  localStorage.setItem('card-app-data', JSON.stringify(state));
};
