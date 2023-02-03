var oracledb = require('oracledb');
const dbConfig = require('./dbConfig');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
module.exports = async (consulta) => {
  
    let connection;

    try {
        oracledb.initOracleClient({libDir: 'C:\\instantclient_21_3'});
        connection   = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(consulta,{});
        
       //RETORNO DO RESULTADO DA QUERY  
       return result.rows;

    } catch (err) {

      console.error(err);

    } finally {

      if (connection) {

        try {
          await connection.close();
          //await connection.release();
        }catch (err) {
          console.error(err);
        }

      }

    }
  }



