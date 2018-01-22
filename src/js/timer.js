import moment from 'moment';

const timer = () => {
  const component = document.querySelector('[data-component="timer"]');

  if (!component) {
    return;
  }

  const updateTime = () => {
    const time = moment().toString();
    component.innerHTML = time;
  }

  updateTime();
  // setInterval(updateTime, 1000);
};

export default timer
