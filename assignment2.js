var myName = "Zia Khan";
console.logrint(myName.toUpperCase());
console.log(myName.toLowerCase());
function titleCase(msg){    
    return msg.split(' ').map(word =>  word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
}
console.log(titleCase(myName));