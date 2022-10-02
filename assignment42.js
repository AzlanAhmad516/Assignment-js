make_sandwich("Onion","Chicken","Cabbage");
make_sandwich("Pasta","Beef");
make_sandwich("Mayo","Ketchup","Garlic","Tomato");
function make_sandwich(...items){
    for(var i = 0; i < items.length; i++){
        console.log(items[i] + " " + "added to your sandwich");
    }
}