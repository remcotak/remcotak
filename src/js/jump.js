const jump = () => {
  const element = document.querySelector('[data-component="jump"]');

  if (!element) {
    return;
  }

  element.innerHTML = [...element.textContent]
    .map(letter => `<span>${letter}</span>`)
    .join('');
};

export default jump;
