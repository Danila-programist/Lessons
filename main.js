var FirstMessage, SecondMessage, first, second, third;

    FirstMessage = prompt( "Каков ваш бюджет?");
    SecondMessage = prompt( "Название магазина?");

    first = prompt("Какой тип товаров будем продавать?");
    second = prompt("Какой тип товаров будем продавать?");
    third = prompt("Какой тип товаров будем продавать?");

var   MainList = {
        budget: FirstMessage,
        NameOfShop: SecondMessage,
        shopGoods: [first, second, third],
    }

console.log(MainList)

alert( "Бюджет на один день:", FirstMessage/30);


