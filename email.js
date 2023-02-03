"use strict";
const nodemailer = require("nodemailer");

  function nestleEmail() {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  const path = './archives/Nestle'+'-' + month + '-' + year +'.csv'
  
  
    let transporter = nodemailer.createTransport({
      host: "email-ssl.com.br",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'lucas.rodrigues@superfestval.com.br', // generated ethereal user
        pass: 'F3stv@l1027', // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Lucas Rodrigues" <lucas.rodrigues@superfestval.com.br>', // sender address
      to: "lucas.rodrigues@superfestval.com.br, lucas.rodrigues@superfestval.com.br", // list of receivers
      subject: "Dados Nestle", // Subject line
      text: "Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados", // plain text body
      html: "<b>Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados</b>", // html body
      attachments:[
          {
              path: path
          }
      ]
    });
    
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  }
function ambevEmail() {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    const path = './archives/Ambev'+'-' + month + '-' + year +'.csv'
    
    
      let transporter = nodemailer.createTransport({
        host: "email-ssl.com.br",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'lucas.rodrigues@superfestval.com.br', // generated ethereal user
          pass: 'F3stv@l1027', // generated ethereal password
        }
      });
    
      // send mail with defined transport object
      let info = transporter.sendMail({
        from: '"Lucas Rodrigues" <lucas.rodrigues@superfestval.com.br>', // sender address
        to: "lucas.rodrigues@superfestval.com.br, lucas.rodrigues@superfestval.com.br", // list of receivers
        subject: "Dados Ambev", // Subject line
        text: "Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados", // plain text body
        html: "<b>Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados</b>", // html body
        attachments:[
            {
                path: path
            }
        ]
      });
      
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
    }

    function jbsEmail() {
      let date_ob = new Date();
      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();
      const path = './archives/JBS'+'-' + month + '-' + year +'.csv'
      
      
        let transporter = nodemailer.createTransport({
          host: "email-ssl.com.br",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'lucas.rodrigues@superfestval.com.br', // generated ethereal user
            pass: 'F3stv@l1027', // generated ethereal password
          }
        });
      
        // send mail with defined transport object
        let info = transporter.sendMail({
          from: '"Lucas Rodrigues" <lucas.rodrigues@superfestval.com.br>', // sender address
          to: "lucas.rodrigues@superfestval.com.br, lucas.rodrigues@superfestval.com.br", // list of receivers
          subject: "Dados JBS", // Subject line
          text: "Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados", // plain text body
          html: "<b>Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados</b>", // html body
          attachments:[
              {
                  path: path
              }
          ]
        });
        
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
      }

      function brfEmail() {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        const path = './archives/BRF'+'-' + month + '-' + year +'.csv'
        
        
          let transporter = nodemailer.createTransport({
            host: "email-ssl.com.br",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'lucas.rodrigues@superfestval.com.br', // generated ethereal user
              pass: 'F3stv@l1027', // generated ethereal password
            }
          });
        
          // send mail with defined transport object
          let info = transporter.sendMail({
            from: '"Lucas Rodrigues" <lucas.rodrigues@superfestval.com.br>', // sender address
            to: "lucas.rodrigues@superfestval.com.br, lucas.rodrigues@superfestval.com.br", // list of receivers
            subject: "Dados JBS", // Subject line
            text: "Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados", // plain text body
            html: "<b>Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados</b>", // html body
            attachments:[
                {
                    path: path
                }
            ]
          });
          
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      
        }

        function unileverEmail() {
          let date_ob = new Date();
          let date = ("0" + date_ob.getDate()).slice(-2);
          let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
          let year = date_ob.getFullYear();
          const path = './archives/unilever'+'-' + month + '-' + year +'.csv'
          
          
            let transporter = nodemailer.createTransport({
              host: "email-ssl.com.br",
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                user: 'lucas.rodrigues@superfestval.com.br', // generated ethereal user
                pass: 'F3stv@l1027', // generated ethereal password
              }
            });
          
            // send mail with defined transport object
            let info = transporter.sendMail({
              from: '"Lucas Rodrigues" <lucas.rodrigues@superfestval.com.br>', // sender address
              to: "lucas.rodrigues@superfestval.com.br, lucas.rodrigues@superfestval.com.br", // list of receivers
              subject: "Dados JBS", // Subject line
              text: "Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados", // plain text body
              html: "<b>Bom dia, Segue os dados de faturamento do mês!! att Lucas Rodrigues Analista de Dados</b>", // html body
              attachments:[
                  {
                      path: path
                  }
              ]
            });
            
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
          }

  module.exports= {nestleEmail,ambevEmail,jbsEmail,brfEmail,unileverEmail}

