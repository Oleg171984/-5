const rate = 26; 
for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(`${dollars}$ = ${dollars * rate}₴`);
}


const currency = prompt("Введіть валюту (uah, usd, euro):");
if(currency === 'uah'|| currency === 'usd'|| currency === 'euro' ) {
    console.log(`Ваша обрана валюта: ${currency}`);
}else {
    console.log('Please try again');
}