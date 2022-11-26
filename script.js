// 1. Compare two JSON.

let obj1 = {"name":"Person1", "age":5};
let obj2 = {"age":5, "name":"Person1"};
if(JSON.stringify(obj1) == JSON.stringify(obj2)){
    console.log("two JSON are equal");
}
else{
    console.log("two JSON are not equal");
}

// Output:
// two JSON are not equal

// 2. Display all the country flags

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response
    result = JSON.parse(data)

    for(let i = 0; i<result.length; i++){
        console.log(result[i].flag);
    }
    // 3. Displaying country name, region, subregion, poopulation:
    console.log("Country name, region, subregion, population")
    for(let i = 0; i<result.length; i++){
        console.log("Country Name: "+ result[i].name.common + ", Region: "+ result[i].region + ", Subregion: "+ result[i].subregion + ", Population: "+ result[i].population);
    }
}