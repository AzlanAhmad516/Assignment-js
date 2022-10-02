describe_city("Lahore");
describe_city("Karachi");
describe_city("Mumbai","India");

function describe_city(city,country = "Pakistan"){
    console.log(city + " is in " + country);
}