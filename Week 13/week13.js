//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2023, 8, 7);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2023, 9, 11);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let pasedTime = ((futureDate - currentDate) / 86400000).toFixed(0);
console.log(pasedTime);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate; //вот здесь я не подумала про милисекунды и усложнила себе жизнь))))) Зато выводит все в красивом привычном формате))
function pastDateF() {
  if (
    (currentDay - 5 < 0 && currentMonth == 0) ||
    2 ||
    4 ||
    6 ||
    7 ||
    9 ||
    11
  ) {
    pastDate = currentDay + 26 + "." + currentMonth + "." + currentYear;
  } else if ((currentDay - 5 < 0 && currentMonth == 3) || 5 || 8 || 10) {
    pastDate = currentDay + 25 + "." + currentMonth + "." + currentYear;
  } else if (currentDay - 5 < 0 && currentMonth == 1) {
    pastDate = currentDay + 23 + "." + currentMonth + "." + currentYear;
  } else if (currentDay - 5 < 0 && currentMonth == 1 && currentYear % 4 === 0) {
    pastDate = currentDay + 24 + "." + currentMonth + "." + currentYear;
  } else {
    pastDate = currentDay - 5 + "." + (currentMonth + 1) + "." + currentYear;
  }
  console.log(pastDate);
}
pastDateF();

let pastdate2 = new Date(currentDate - 432000000);
console.log(pastdate2); //Из-за лишних манипуляций выше создала другую переменную, чтобы не менять все в функции

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let daysDifference = ((currentDate - pastdate2) / 86400000).toFixed(0);
console.log(daysDifference);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(2023, 8, 12);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date().getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(futureYear, 8, 7);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = "2023-06-15T08:30:00.000Z";
let date = new Date(Date.parse("2023-06-15T08:30:00.000Z"));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = "2023/06/15";
ms = Date.parse(wrongDate);
rightDate = new Date(ms);
console.log(rightDate);
if (console.log(rightDate) === "NaN") {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
  console.log("Число положитильное");
} else {
  console.log("Число отрицательное");
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
  console.log("Число кратное 3");
} else {
  console.log("Число некратное 3");
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number > -10 && number < 10) {
  console.log("Число однозначное");
} else if (number <= -10 && number >= -99 || number >= 10 && number <= 99) {
  console.log("Число двузначное");
} else if (number <= -100 && number >= -999 || number >= 100 && number <= 999) {
  console.log("Число трехзначное");
} else {
  console.log("Число многозначное");
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number <= -10 && number >= -99 || number >= 10 && number <= 99) {
  console.log("Число двузначное");}
  else {
    console.log ('Число недвузначное')
  }

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
    console.log ('Число положительное или равно нулю')
} else {
    console.log ('Число отрицательное')
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0 || number % 7 == 0 ) {
    console.log ('Число кратное 5 или 7')
} else {
    console.log ('Число некратное 5 или 7')
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
    console.log ('Число отрицательное или равно нулю')
} else {
    console.log ('Число положительное')
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >= 100 && number <= 999) {
  console.log("Число трехзначное положительное"); 
} else {
    console.log("Число не трехзначное и не положительное"); 
}


//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = '';
switch (new Date().getDay()) {
  case 0:
    day = 'Воскресенье';
    break;
  case 1:
    day = 'Понедельник';
    break;
  case 2:
    day = 'Вторник';
    break;
  case 3:
    day = 'Среда';
    break;
  case 4:
    day = 'Четверг';
    break;
  case 5:
    day = 'Пятница';
    break;
  case 6:
    day = 'Суббота';
    break;
  default:
    day = 'Неизвестный день недели';
}
 console.log ('Сегодня ' + day.toLowerCase());

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "W";
let fullName;

switch (direction) {
    case 'N':
        fullName = 'North';
    case 'S':
        fullName = 'South';
    case 'E':
        fullName = 'East';
    case 'W':
        fullName = 'West';
    }

    console.log('Направление ' + fullName);
