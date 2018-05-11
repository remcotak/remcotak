const jump = () => {
  const element = document.querySelector('[data-component="jump"]');

  if (!element) {
    return;
  }

  // Get a random value between the given min and max
  const generateRandomInteger = (min = -20, max = 20) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  element.innerHTML = [...element.textContent]
    .map(
      letter =>
        `<span style="--rotation-deg: ${generateRandomInteger()}deg">${letter}</span>`
    )
    .join('');
};

export default jump;
