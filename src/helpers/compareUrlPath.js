export const Compare = (text) => {
  if (window.location.pathname === text) {
    return true;
  } else {
    return false;
  }
};
