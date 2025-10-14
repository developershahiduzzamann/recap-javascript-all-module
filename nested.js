const price = 5000;
if(price < 4000){
    console.log('bro you are a rich')
}
// 50 % discount
else{
    if(price < 5500){
        const discount = price * 50 / 100;
        const total = price - discount;
        console.log(total);
    }
    else{
        console.log('you have no discount');
    }
}