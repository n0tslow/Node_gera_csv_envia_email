const axios = require('axios').default;
const schedule = require('node-schedule');


//axios.get("http://localhost:3000/rappi/43");
//axios.get("http://localhost:3000/rappi/78");
//axios.get("http://localhost:3000/rappi/86");

const seg   = '01';
const min   = '*/15 ';
const hour  = ' 07 ';
const day   = '* ';
const month = '* ';
const week  = '* ';

const loja = (loja) => axios.get(`http://localhost:3000/rappi/${loja}`);

schedule.scheduleJob(seg + ' 05 ' + hour + day + month + week, ()  => {
  loja(43);
  console.log('43');
});

schedule.scheduleJob(seg + ' 15 ' + hour + day + month + week, ()  => {
  loja(78);
  console.log('78');
});

schedule.scheduleJob(seg + ' 25 ' + hour + day + month + week, ()  => {
  loja(86);
  console.log('86');
});


//loja(43);