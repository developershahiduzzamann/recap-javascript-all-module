const price = 5000;
if(price >= 5000){
    const discount = price * 10 / 100;
    const total = price - discount;
    console.log(total);
}
else{
    console.log('full amount');
}