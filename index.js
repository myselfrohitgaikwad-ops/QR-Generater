import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
    message:"Enter your url:",
    name:"URL",
    },
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('QRFile.png'));

  fs.writeFile("URLdata.txt",url,(err) =>{
      if (err){
        throw err;
      }
      console.log("File Saved Succesfully");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
   
    } else {
      
    }
  });
