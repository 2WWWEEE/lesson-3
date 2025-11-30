let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какие типы экранов нужны? (шаблонные, с уникальным дизайном, с анимациями)');
let responsive = confirm('Нужен ли респонсивный (адаптивный) сайт?'); 
let service1 = prompt('Какой сервис нужен?');           
let servicePrice1 = +prompt('Сколько это будет стоить?');  
let service2 = prompt('Какой еще сервис тебе нужен?');     
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?'); 
let screenPrice = +prompt('Сколько стоят экраны всего?'); 
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percentage = 15;
let partnerFee = fullPrice * (percentage / 100);
let servicePercentPrice = Math.round(fullPrice - partnerFee);
console.log('Полная стоимость проекта:', fullPrice);
console.log('Сумма после вычета процента партнёру:', servicePercentPrice);
if (fullPrice > 50000) {
  console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log('Сделаем скидку 5%');
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice === 0) {
  console.log('Что-то пошло не так');
} else if (fullPrice === 50000) {
  console.log('Сделаем скидку 10%');
} else if (fullPrice === 20000) {
  console.log('Сделаем скидку 5%');
 } else {
  console.log('Что-то пошло не так')}