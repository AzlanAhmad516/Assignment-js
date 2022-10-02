make_Shirts();
make_Shirts("Medium");
make_Shirts("Small","I love Nothing");

function make_Shirts(size = "Large", message = "I love javascript"){
    console.log("the size of the shirt is " + size);
    console.log(message);
}