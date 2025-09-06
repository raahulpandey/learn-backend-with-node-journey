const {readFile,writeFile}= require('fs');
console.log("start")
readFile ('./content/first.txt','utf8',(err,result)=> {
    if(err) {
        console.log(err);
        return err;
    }
        const first=result
        readFile('./content/second.txt','utf8',(err,result) => {
            if(err) {
                console.log(err);
                return err;
            }
                const second=result;
            writeFile(
                './content/result-sync.txt',
                `here is your result: ${first} , ${second}`,
                (err,result)=> {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("done eiith this task");
                    }
                }
            )
        });
});
console.log("you can assign me the next task");
