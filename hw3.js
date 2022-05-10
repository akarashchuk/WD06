
//task1

// let x = 'true';
// let y = false;
// let z = 17;
// let a = undefined;
// let b = null;
// console.log(typeof x, typeof y, typeof z, typeof a, typeof b);


// //task 2

// let height = 15;
// let width = 20;
// if (height > width){
//     alert(height);
// } else{
//     alert(width);
// }


// //task 3 

// let x;
// for ( let i = 1; i <= 20; i++){
//      x = i % 3; 
//      if (x == 0){
//          console.log(i);
//      }
// }



// //task 4

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// let shouldGoToWork;
// if (key == true && documents == true && pen == true && orange == true || apple == true){
//    alert(shouldGoToWork = 'yes'); 
   
// }  else{
//     alert(shouldGoToWork = 'no');
// } 


// //task 5
// let i;
// let x = prompt(i);
// if (x % 5 == 0 && x % 3 == 0 ){
//     alert('FizBuz');
// } else if (x % 3 == 0) {
//     alert('Buz');
// } else if (x % 5 == 0) {
//     alert('Fiz');
// } else {
//     alert('nothing');
// }


// //task 6

// let i;
// let x = prompt(i);
// if (x >= 16 && x <=18){
//     alert('Можешь выкурить сигаретку, только маме не говори.')
// } else if(x <= 18){
//     alert('Пей колу')
// } else {
//     alert('Попей пивка')
// }


//task 7

let i;
let x = prompt(i);
switch (x) {
    case 'Юг':
        alert('на юг пойдешь счастье найдешь')
        break;
        case 'Север':
            alert('на север пойдешь много денег найдешь')
            break;
        case 'Запад':
        alert('на запад пойдешь верного друга найдешь')    
        break;
        case 'Восток':
            alert('на восток пойдешь разработчиком станешь')
            break;
        default:
            alert('Введите заново')                            
}