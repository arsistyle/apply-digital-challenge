export const getTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const seconds = diff / 1000;
  if (seconds < 60) {
    return 'few seconds ago';
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    const minutesRounded = Math.round(minutes);
    return `${minutesRounded} ${minutesRounded > 1 ? 'minutes' : 'minute'} ago`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    const hoursRounded = Math.round(hours);
    return `${hoursRounded} ${hoursRounded > 1 ? 'hours' : 'hour'} ago`;
  }

  const days = hours / 24;
  if (days < 30) {
    const daysRounded = Math.round(days);
    return `${daysRounded} ${daysRounded > 1 ? 'days' : 'day'} ago`;
  }

  const months = days / 30;
  if (months < 12) {
    const monthsRounded = Math.round(months);
    return `${monthsRounded} ${monthsRounded > 1 ? 'months' : 'month'} ago`;
  }

  const years = months / 12;
  const yearsRounded = Math.round(years);
  return `${yearsRounded} ${yearsRounded > 1 ? 'years' : 'year'} ago`;
};
