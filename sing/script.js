//Syncronous
//function brewCoffee(){
//    console.log('Start brewing coffee')
//    const StartTime = new Data().getTime()
//    while (new Data().getTime() < StartTime + 5000)
//     console.log("Coffee is ready");
//}

//console.log("Ordering coffee");
//brewCoffee();
//console.log("Coffee recieved, doing order tasks.");

//Asynchronous1
//function brewCoffee() {
//    console.log("Start brewing coffee");
//    setTimeout(() => {
//        console.log("Coffee is ready☕");
//        callback()
//    },3000)//ชงการแฟใน 3 วินาทีและเรียก caLLback
//}

//console.log("Ordering coffee");
//brewCoffee(() => {
//    console.log("Coffee recieved, doing other tasks.");
//});
//console.log("Waiting for coffee, doing other tasks.");

//Asynchronous2 : async - await
function brewCoffee() {
    return new Promise((resolve) =>{
        console.log("Start brewing coffee");
        setTimeout(() => {
        console.log("Coffee is ready☕");
        callback()
    },3000)//ชงการแฟใน 3 วินาทีและเรียก caLLback
});
}
async function orderCoffee() {
    console.log("Ordering coffee");
    await brewCoffee();
    console.log("Coffee recieved, doing other tasks.");
}

orderCoffee();
console.log("Waiting for coffee, doing otthr tasks.");
