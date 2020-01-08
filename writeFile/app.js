const fs = require('fs');
fs.mkdir ('tute2', (err)=>{
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./tute2/example.txt','123', (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('successfully created file');
            }
        });
    }
})
