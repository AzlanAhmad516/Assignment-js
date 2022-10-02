var guest_list = ["Mushtaq","Irfan","Imran"];
var invitation_message = " plz come to the dinner";
var sorry_message = " sorry you cannot come to dinner";
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}
console.log(guest_list[2] + " is not coming to dinner\n");
guest_list[2] = "Rafay"; 
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}
console.log("Found a new bigger dinner table\n");
guest_list.unshift("Ahmed");
guest_list.splice(2,0,"galib");
guest_list.push("Ali");
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}
console.log("Can invite 2 peoples for the dinner");
console.log(guest_list[5] + sorry_message);
guest_list.pop();
console.log(guest_list[4] + sorry_message);
guest_list.pop();
console.log(guest_list[3] + sorry_message);
guest_list.pop();
console.log(guest_list[2] + sorry_message + "\n");
guest_list.pop();
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}
guest_list.splice(0,guest_list.length)
console.log(guest_list);