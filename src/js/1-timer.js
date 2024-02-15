
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputDate = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();
        if (selectedDate < currentDate) {
          iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future',
          });
          buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
        }
      },
  };

  const instance = flatpickr(inputDate, options);

  let intervalDate;

  function startCountdown(userDate) {
    intervalDate = setInterval(() => {
      const currentDate = new Date();
      const remainingTime = userDate - currentDate;
      if (remainingTime <= 0) {
        clearInterval(intervalDate);
        updateTime(0);
      } else {
        updateTime(remainingTime);
      }
    }, 1000);
  }

  function updateTime(remainingTime) {
    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
  }

  buttonStart.addEventListener('click', () => {
    const selectedDate = new Date(inputDate.value);
    startCountdown(selectedDate);
    buttonStart.disabled = true;
    inputDate.disabled = true;
  });
 

function addLeadingZero(dateStr) {
  return dateStr.toString().padStart(2, '0');
}
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  

