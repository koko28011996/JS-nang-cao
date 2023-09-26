//  kiến thức ôn tập 
const myClass= ["manh","mai ","quang"]
 const infor = myClass.map(function(sv){
    return sv + "-" +"wed18203";
 })
 console.log(infor);


const wed18203_map = function (arr,callback){
    for( let i = 0 ; i < arr.length ; i++){
        console.log(callback(arr[i]));
    }
}
wed18203_map (myClass, function(sv){
    return sv + "-" +"wed18203";

});
// !!!! lap 2.1
const gameEvents = new Map([
    [17, "Ghi bàn"],
    [36, "Thay người"],
    [47, "Ghi bàn"],
    [61, "Thay người"],
    [64, "Thẻ vàng"],
    [69, "Thẻ đỏ"],
    [70, "Thay người"],
    [72, "Thay người"],
    [76, "Ghi bàn"],
    [80, "Ghi bàn"],
    [92, "Thẻ vàng"]



]);
// 1 . 
const events = [...new Set(gameEvents.values())];
 console.log(events);
//  2.
gameEvents.delete(64);
// 3.
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90/ gameEvents.size} phút`);
// 4
for (const[min, event] of gameEvents){
    const hiep = min <= 45 ? 'mot' : 'hai';
    console.log(` [hiep] ${hiep} : ${min}:${event}`);
    
}
//  2. 2
 document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
 const text = document.querySelector('textarea').value;
 document.querySelector('button').addEventListener('click',function(){
      const text = document.querySelector('textarea').value;
       const rows = text.split('\n');
     console.log(rows);
      for (const [i, row] of rows.entries()){
        const [ first , second] = row.toLocaleLowerCase().trim().split('_');
          const output = `${first}${second.replace(second[0] , second[0].toUpperCase()
         )}`
         console.log(`${output.padEnd(20, ' ')}${`✅`.repeat()}`
          );     }

   });
// 2.3

    const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;1230';


const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
 const [type, from, to, time] = flight.split(';');
 const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll(
 '_',
 ' '
 )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
 console.log(output);
}
// 2.4
(function(){
const header = document.querySelector('h1');
header.style.color = 'red';
document.querySelector('body').addEventListener('click',function(){
    header.style.color = 'blue';
})
})();