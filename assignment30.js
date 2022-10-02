var current_users = ["ahmed","ali","foe","john","jin"];
var new_users = ["foe","john","mathew","sophia","cardiB"];
var isAvailable = false;
for(var i = 0; i < new_users.length; i++){
    for(var j = 0; j < current_users.length; j++){
        if(new_users[i] == current_users[j] || new_users[i].toUpperCase() == current_users[j] || new_users[i].toLowerCase() == current_users[j]){
            isAvailable = true;
        }
    }
    if(isAvailable){
        console.log("Enter another username");
        isAvailable = false;
    }
    else{
        console.log("username available");
    }
}