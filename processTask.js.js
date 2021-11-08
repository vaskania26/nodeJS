const process = require ('process');

process.stdout.write('Hello world' + '\n')

let timer = 0;

process.on('beforeExit',() => {
    setInterval(() => {
      timer +=1;
      if(timer === 10){
        process.stdout.write('Goodbye world')
        process.exit()
    }
  }, 1000)
}) 

process.on('SIGINT', ()=> {
    process.stdout.write(`Stopped by user after ${timer} seconds`);
    process.exit()
})