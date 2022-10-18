// Задача 1.
// Даны переменные a, b, c, объявленные следующим способом:
// let a = 34;
// let b = 20;
// let c = "Новая";

// Для них выполнены следующие действия:
// a = a + 2; // = 36
// b = b - 5; // = 15
// c = c + " строка!"; //= "Новая строка"
// console.log(a);
// console.log(b);
// console.log(c);

// Измените объявление переменных так, чтобы:

// переменная a при увеличении на 2 стала равна 36.
// переменная  b при уменьшении на 5 стала равна 15.
// переменная c не содержала бы undefined, но была бы равна "Новая строка"

// Задача 2.
// Вы просите пользователя ввести сумму его зарплаты. Затем рассчитываете и выводите в alert:

//  1. Добавку в виде премии в сумме 15% от зарплаты. // Премия ... На руки ...
//  2. Налоги в сумме 10% от суммы всех начислений (зарплата + премия). Налоги ... На руки ...
//  3. Трату в магазине в сумме 190. // В магазине ... Осталось ...
//  4. Разделяете оставшуюся сумму между пользователем и его "женой"/"мужем".
//  // Жене половину отдал осталось ...

// Выводите, сколько осталось в результате всех операций денег у пользователя.

// let salary = Number(prompt("Bвести сумму  зарплаты"));

// const bonus = Number(prompt("Bвести процент  премии")) / 100;
// const bonusOfSalari = salary * bonus;
// salary = salary * bonus + salary;
// alert(`Премия ${bonusOfSalari} На руки ${salary}`);

// const tax = Number(prompt("Bвести процент  Налоги")) / 100;
// const taxOfSaolari = salary * tax;
// salary = salary - salary * tax;
// alert(`Налоги ${taxOfSaolari} На руки ${salary}`);

// const spend = Number(prompt("Bвести Трату в магазине в сумме"));
// salary = salary - spend;
// alert(`В магазине ${spend} Осталось ${salary}`);

// console.log(salary);
// salary = salary / 2;
// alert(`Жене половину отдал осталось ${salary}`);
// console.log(salary);

//Попросіть користувача ввести фразу і всі перші букви слів замінити на букви в верхньому регістрі.

// const input = prompt("веди фразу");
// console.log(input);

// const sliceIndex = input.indexOf(" ");

// const firstVerb = input.slice(0, sliceIndex);

// const secondVerb = input.slice(sliceIndex + 1);

// const normalizeFirst = firstVerb[0].toUpperCase() + firstVerb.slice(1);
// const normalizeSecond = secondVerb[0].toUpperCase() + secondVerb.slice(1);
// console.log(normalizeSecond);
// const inputUpdite = normalizeFirst + " " + normalizeSecond;

// console.log(inputUpdite);
