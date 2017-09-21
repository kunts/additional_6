module.exports = function zeros(expression) {
  var numExl =[];
  var arrNum =[];
    if(expression.search(/\*/) === -1){
        var tempRes = expression.slice(0, expression.indexOf("!"));
        numExl.push(stepCount(expression));
        console.log(" nm" + numExl);
        var zeroAmount = 0;

    }else{
        var arr = expression.split("*");

        for(var i = 0; i < arr.length; i++){
        numExl.push(stepCount(arr[i]));
}



  console.log(numExl);
      }

return zeroAmount;
}

function stepCount(item){
  item.trim();
  if(item.length-2 === item.indexOf("!")){
 return 2;
 } else{
 return 1;
 }
}
