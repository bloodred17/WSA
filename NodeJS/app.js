function sayHello(name){
    console.log("Hello "+name);
}

sayHello(process.argv[process.argv.length - 1]);