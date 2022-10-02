var a = car_Info("bentley","Volkswagen Group", date = "1997", color = "Red");
console.log(a);
function car_Info(model,manufacture,...arbitrarynum){
    var dict = {
        "model" : model,
        "manufacturer" : manufacture
    };
    for(var i = 0; i < arbitrarynum.length; i++){
        dict[i] = arbitrarynum[i];
    }
    return dict;
}