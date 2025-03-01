function getWordForm(num, words) {
  if (num % 10 === 1 && num % 100 !== 11) return words[0];
  if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) return words[1];
  return words[2];
}

function startCountdown(targetDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById('countdown').innerHTML = 'Время вышло!';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysText = getWordForm(days, ['день', 'дня', 'дней']);
    const hoursText = getWordForm(hours, ['час', 'часа', 'часов']);
    const minutesText = getWordForm(minutes, ['минута', 'минуты', 'минут']);
    const secondsText = getWordForm(seconds, ['секунда', 'секунды', 'секунд']);

    document.getElementById('days').innerHTML = `<p>${days}</p> <p>${daysText}</p>`;
    document.getElementById('hours').innerHTML = `<p>${hours}</p> <p>${hoursText}</p>`;
    document.getElementById('minutes').innerHTML = `<p>${minutes}</p> <p>${minutesText}</p>`;
    document.getElementById('seconds').innerHTML = `<p>${seconds}</p> <p>${secondsText}</p>`;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

// Укажите дату отсчета (год, месяц - 1, день, часы, минуты, секунды)
const targetDate = new Date(2025, 4, 25, 16, 40, 0).getTime();
startCountdown(targetDate);
