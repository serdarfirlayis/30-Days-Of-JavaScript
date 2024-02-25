const date = new Date();

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds(),
  dayOfWeek = date.getDay();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

let readableDate = `${day} ${months[month]} ${year}, ${hours}:${minutes}:${seconds} ${days[dayOfWeek]}`;
console.log(readableDate);
