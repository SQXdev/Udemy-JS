var money;
var time;

appData = {
    budget: null,
    timeData: null,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
appData.budget = money;
appData.timeData = time;
for (var i=0; i<=1; i++) {
    let string = prompt("Введите обязательную статью расходов в этом месяце");
    appData[string] = prompt("Во сколько обойдется?");
};
alert(appData.budget/30);

console.log("123");
console.log(appData);