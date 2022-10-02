var users = ["admin","jason","eric","jon","doe"];

for(var i = 0; i < users.length; i++){
    if(users[i] == "admin"){
        console.log("Hello " + users[i] + " would you like to see reports");
    }
    else{
        console.log("Hello " + users[i] + " thanks for logging");
    }
}