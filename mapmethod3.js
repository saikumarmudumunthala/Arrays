var ar = [12,32,53,78,65,22];
var x = ar.map(function(a,ind){
    console.log("hai",a,ind);
    return a*2
})
console.log(x)