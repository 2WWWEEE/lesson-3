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
  console.log('Что-то пошло не так')};

const getAllServicePrices = function (){
  return servicePrice1 + servicePrice2; 
}
let allServicePrices = getAllServicePrices();
function getFullPrice() {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice();
function getTitle() {
  const normalized = titleProject.trim().toLowerCase();  
  const result = normalized.charAt(0).toUpperCase() + normalized.slice(1);  
  titleProject = result;
  return result;
}

titleProject = getTitle();
console.log('Название проекта:', titleProject);
function getServicePercentPrices() {
  const partnerFee = fullPrice * (percentage / 100);     
  const priceWithoutPartner = fullPrice - partnerFee;    
  return Math.round(priceWithoutPartner);
}

servicePercentPrice = getServicePercentPrices();
console.log('Цена после вычета процента партнёру:', servicePercentPrice);
function getRollbackMessage() {
  allServicePrices = getAllServicePrices();
  servicePercentPrice = getServicePercentPrices();

  console.log('Полная стоимость проекта:', fullPrice);
  console.log('Стоимость всех услуг:', allServicePrices);
  console.log('Стоимость после вычета процента партнёру:', servicePercentPrice);

  if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
  } else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('Сделаем скидку 5%');
  } else if (fullPrice > 0 && fullPrice < 20000) {
    console.log('Скидка не предусмотрена');
  } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Особый случай цены, обсудим условия индивидуально');
  } else {
    console.log('Что-то пошло не так');
  }
}

getRollbackMessage()
