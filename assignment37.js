var first = city_country("Paris","France");
console.log(first);
var second = city_country("Barcelona","Spain");
console.log(second);
var third = city_country("Warsaw","Poland");
console.log(third);
function city_country(city,country){
    return city + ", " + country
}