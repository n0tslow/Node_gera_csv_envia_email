const fs = require('fs');
const consulta = require('./Models/conectionOracle.js');
const selectProdutosLoja = require('./Models/selectProdutosLoja.js');
const schedule = require('node-schedule');
const email = require('./email.js');
const { resolve } = require('path');

let dataLog = new Date();
let dia = dataLog.getDate().toString().length == 1 ? '0' + dataLog.getDate() : dataLog.getDate();
let mes = (dataLog.getMonth() + 1).toString().length == 1 ? '0' + (dataLog.getMonth() + 1) : (dataLog.getMonth() + 1);
let ano = dataLog.getFullYear();
let dataTratada =  mes + '-' + ano;


const geraForn = (fornecedor) => {
  
    let dataLog = new Date();
    let dia = dataLog.getDate().toString().length == 1 ? '0' + dataLog.getDate() : dataLog.getDate();
    let mes = (dataLog.getMonth() + 1).toString().length == 1 ? '0' + (dataLog.getMonth() + 1) : (dataLog.getMonth() + 1);
    let ano = dataLog.getFullYear();
    let dataTratada =  mes + '-' + ano;

    let lojaRaiz = fornecedor;

        consulta(selectProdutosLoja(lojaRaiz,fornecedor)).then(data => {

            if(lojaRaiz == 302){fornecedor = 302}
            
            let file = fs.createWriteStream(`./Archives/${fornecedor}-${dataTratada}.csv`);
        
            //NOME DAS COLUNAS
            file.write( Object.keys(data[0]).join(';') + '\r\n',"",(err)=>{
                if(err){

                    fs.appendFile(`./Archives/log- ${fornecedor}.txt`, `${dataTratada + " | " + new Date().toLocaleTimeString()} | Loja - ${fornecedor} | ${err} \r\n`,(err) => console.log(err));
                
                }else{

                    fs.appendFile(`./Archives/log- ${fornecedor}.txt`, `${dataTratada + " | " + new Date().toLocaleTimeString()} | Loja - ${fornecedor} | GERADO! \r\n`,(err) => console.log('Saved!'));
                
                } 
            });
        
            //REGISTROS 
            data.forEach((v,i) => {
            
                file.write( 
                    
                Object.values(v).join(';')+"\r\n");

                    if(i === (parseInt(data.length) -1)){

                    const enviar = async () => {

                            try {
                                await
                                fs.appendFile(`./Archives/log- ${fornecedor}.txt`, `${dataTratada + " | " + new Date().toLocaleTimeString()} | Loja - ${fornecedor} | ENVIADO! \r\n`,(err) => console.log('Saved!'));
                            }catch(err){
                                console.log(err)
                            }finally{

                            }
                              }
                             enviar();
                    }
            });
        
            //FECHANDO ARQUIVO
            file.end();
    
        }).catch((err)=>{

            fs.appendFile(`./Archives/log- ${fornecedor}.txt`, `${dataTratada + " | " + new Date().toLocaleTimeString()} | Loja - ${fornecedor} | ${err} \r\n`,(err) => console.log(err));

        });
        
    }

const seg   = '01 ';
const hour  = '* ';
const day   = '* ';
const month = '* ';
const week  = '* ';

function ambev(){
    geraForn(('19872,19893,20063,31000,31333,36314,43831'))
};
//ambev();
function nestle(){
    geraForn(('1292,1383,10982,11145,11546,11752,13021,18065,18154,18294,19516,20066,21340,21384,22273,26174,27042,28266,28982,35720,40367,40368,48695,88165,88116'))
};
function jbs(){
    geraForn(18444)
}
function brf(){
    geraForn(('17521,17572,17600,17608,17704,18798,19012,29026,36513,37584,40027,53272'))
}
function unilever(){
    geraForn(('19067,42178,15723,27863,10956,13892,15731,27871,1117'))
}

async function renameNestle(){
let fileName = `./Archives/1292,1383,10982,11145,11546,11752,13021,18065,18154,18294,19516,20066,21340,21384,22273,26174,27042,28266,28982,35720,40367,40368,48695,88165,88116-${dataTratada}.csv`
let newFileName  = `./Archives/Nestle-${dataTratada}.csv`
try {
    fs.renameSync(fileName, newFileName);
    console.log("File renamed successfully");
    } catch (err) {
    console.log(err);
    }

}
async function renameAmbev(){
    let fileName = `./Archives/19872,19893,20063,31000,31333,36314,43831-${dataTratada}.csv`
    let newFileName  = `./Archives/Ambev-${dataTratada}.csv`
    try {
        fs.renameSync(fileName, newFileName);
        console.log("File renamed successfully");
        } catch (err) {
        console.log(err);
        }
    
    }
async function renameJbs(){
        let fileName = `./Archives/18444-${dataTratada}.csv`
        let newFileName  = `./Archives/JBS-${dataTratada}.csv`
        try {
            fs.renameSync(fileName, newFileName);
            console.log("File renamed successfully");
            } catch (err) {
            console.log(err);
            }
        }
async function renameBrf(){
            let fileName = `./Archives/17521,17572,17600,17608,17704,18798,19012,29026,36513,37584,40027,53272-${dataTratada}.csv`
            let newFileName  = `./Archives/BRF-${dataTratada}.csv`
            try {
                fs.renameSync(fileName, newFileName);
                console.log("File renamed successfully");
                } catch (err) {
                console.log(err);
                }
            
            }
async function renameUnilever(){
            let fileName = `./Archives/19067,42178,15723,27863,10956,13892,15731,27871,1117-${dataTratada}.csv`
            let newFileName  = `./Archives/BRF-${dataTratada}.csv`
            try {
                fs.renameSync(fileName, newFileName);
                console.log("File renamed successfully");
                } catch (err) {
                console.log(err);
                }
            
            }


//Nestle

schedule.scheduleJob(seg + '02 ' + hour + day + month + week, ()  => {nestle()});
schedule.scheduleJob(seg + '04 ' + hour + day + month + week, ()  => {renameNestle()});
schedule.scheduleJob(seg + '05 ' + hour + day + month + week, ()  => {email.nestleEmail()});

//Ambev

schedule.scheduleJob(seg + '06 ' + hour + day + month + week, ()  => {ambev()});
schedule.scheduleJob(seg + '08 ' + hour + day + month + week, ()  => {renameAmbev()});
schedule.scheduleJob(seg + '09 ' + hour + day + month + week, ()  => {email.ambevEmail()});

//JBS

schedule.scheduleJob(seg + '10 ' + hour + day + month + week, ()  => {jbs()});
schedule.scheduleJob(seg + '12 ' + hour + day + month + week, ()  => {renameJbs()});
schedule.scheduleJob(seg + '13 ' + hour + day + month + week, ()  => {email.jbsEmail()});


//BRF

schedule.scheduleJob(seg + '14 ' + hour + day + month + week, ()  => {brf()});
schedule.scheduleJob(seg + '16 ' + hour + day + month + week, ()  => {renameBrf()});
schedule.scheduleJob(seg + '17 ' + hour + day + month + week, ()  => {email.brfEmail()});


//Unilever

schedule.scheduleJob(seg + '18 ' + hour + day + month + week, ()  => {unilever()});
schedule.scheduleJob(seg + '20 ' + hour + day + month + week, ()  => {renameUnilever()});
schedule.scheduleJob(seg + '21 ' + hour + day + month + week, ()  => {email.unileverEmail()});


















 
  
 







 