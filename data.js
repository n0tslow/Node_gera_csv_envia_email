let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let horaAtual = "Você retorna em" +": " + (22 - date) + " dias" + " , " + ((22 - date) * 24) + " horas" + " e" + " minutos " + ((22 - date) * 1440 - (hours - 1) * 60 + minutes)
/*console.log(year + "-" + month + "-" + date);
console.log(year + "-" + month + "-" + date + " cl" + hours + ":" + minutes + ":" + seconds);
console.log(hours + ":" + minutes);*/

//console.log(22 - date);
//console.log("Você retorna em" +": " + (22 - date) + " dias" + " , " + ((22 - date) * 24) + " horas" + " e" + " minutos " + ((22 - date) * 1440 - (hours - 1) * 60 + minutes))

//console.log((hours - 1) * 60 + minutes)

//console.log(horaAtual)

console.log(year);
console.log(month);
console.log(date)
