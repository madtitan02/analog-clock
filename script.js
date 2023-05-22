// console.log("This is analog clock");
// //creating constructor for object date
setInterval(() => {
    let now = new Date(); 

     htime= now.getHours();
     mtime = now.getMinutes();
    seconds = now.getSeconds();
hrotation = 30*htime+mtime/2;
mrotation = 6*mtime;
 srotation = 6*seconds;

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;

second.style.transform = `rotate(${srotation}deg)`;

}, 1000);




// // 
// // console.log(seconds)
// //updating time and simulataneously displaying
// setInterval(updateTime,1000);
// console.log("This is analog clock");
// const rotate_obj =  document.querySelector('.seconds1');

// while (true) {
// //     
//     while(seconds++)
//     {
//         // console.log(i);
//     let rotateDeg = seconds;
//      rotateDeg = rotateDeg + 1/3600;
//     rotate_obj.style.transform = 'rotate('+rotateDeg+'deg)';

// }
// creating a func for update
