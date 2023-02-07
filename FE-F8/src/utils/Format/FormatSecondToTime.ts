const FormatSecondToTime = (seconds: number) => {
  let hours = Math.floor(seconds / 3600);
  let minutes: number | string = Math.floor((seconds - hours * 3600) / 60);
  let second = seconds - hours * 3600 - minutes * 60;
  let time = '';

  if (hours !== 0) {
    time = hours + ':';
  }
  if (minutes !== 0 || time !== '') {
    minutes = minutes < 10 && time !== '' ? '0' + minutes : String(minutes);
    time += minutes + ':';
  }
  if (time === '') {
    time = second + 's';
  } else {
    time += second < 10 ? '0' + second : String(second);
  }
  return time;
};

export { FormatSecondToTime };
