var magicians = ["Samri","CleoTra","JohnWick"];
show_magicians(magicians);
console.log("The Great--------------------");
var greatMagician = make_Great(magicians);
show_magicians(greatMagician);
console.log("Original---------------------");
show_magicians(magicians);

function show_magicians(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
function make_Great(array){
    for(var i = 0; i < array.length; i++){
        array[i] = array[i] + " the great";
    }
    return array;
}