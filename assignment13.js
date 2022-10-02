var guest_list = ["Mushtaq","Irfan","Imran"];
var invitation_message = " plz come to the dinner";
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}
console.log(guest_list[2] + " is not coming to dinner\n");
guest_list[2] = "Rafay"; 
for(var i = 0; i < guest_list.length; i++){
    console.log(guest_list[i] + invitation_message + "\n");
}