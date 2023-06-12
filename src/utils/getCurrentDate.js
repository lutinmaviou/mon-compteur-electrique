const getCurrentDate = () => {
  const newDate = new Date();
  const options = {
    //weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const date = newDate.toLocaleDateString('fr-FR', options);
  return `${date.charAt(0).toUpperCase()}${date.substring(1)}`;
};

export default getCurrentDate;
