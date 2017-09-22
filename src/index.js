module.exports = function zeros(expression) {
  var step =[];
  var operands =[];
  var zeroAmount = 0;
  var multRes = "1";

    if(expression.search(/\*/) === -1){

        var operands = expression.slice(0, expression.indexOf("!"));
        var step = (stepCount(expression));
        multRes = multiply(multRes, fact(operands, step));

    }else{

        var arr = expression.split("*");
          for(var i = 0; i < arr.length; i++){
              step.push(stepCount(arr[i]));
           }

        operands = arr.map(function(item){
        return item.slice(0, item.indexOf("!"));
        });

            for (var j = 0; j< operands.length; j++){
              multRes = multiply(multRes, fact(operands[j], step[j]));
            }
       }

for (var p = multRes.length-1; p>=0; p--){
  if (multRes[p] == 0){
    zeroAmount++;
  } else{
    break;
  }
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

function fact(a,step){
var res;
    if(a<=1){
      res = 1;
    } else {
      res = multiply(a,fact((a-step), step));
    }
return res;
}

function multiply(first, second) {
  var res = "";
  var sum = [];

  first =""+ first;
  second = ""+ second;
  var temp;
      if(first.length + second.length <15){

          res += (first*second);

      }else{

    var A = toArr(first);
    var B = toArr(second);

    for (var i = 0; i < B.length; i++){
        temp =  mult (A , B[i]);
        sum = mulSum(i, temp, sum);
    }
    res += (sum[sum.length-1]).toString();

    for (var t = sum.length-2; t>=0; t--){
        var tempRes = (sum[t]).toString();

        for(var k = 6- tempRes.length; k>0; k--){
          tempRes = "0"+ tempRes;
        }
  res += tempRes;
     }
}
return res;
}

function toArr(str){
  var arr = [];

  if (str.length > 6){

  for(var i = str.length -6; i >= 0 ; i -= 6){
    arr.push(+(str.substr(i,6)));
  }

      if(str.length % 6!=0 ){
        arr.push(+str.substr(0,(str.length % 6)));
      }

   } else {
  arr.push (str.slice(0));
   }
  return arr;
}


function mult(op1, op2){
  var arr=[];
  var memory = 0;
  var temp;
  for (var i = 0; i < op1.length; i++){
  temp = op1[i] * op2 + memory;

  if (temp >=1000000){
      arr.push(temp % 1000000);
       memory = ((temp - temp % 1000000)/1000000);
      } else {
      arr.push(temp);
      memory = 0;
      }
  }
   if (memory !=0){
 arr.push(memory);
}
return arr;
}

function mulSum(i, temp, sum){
   var mem = 0;
   var arr=sum.slice( 0, i );

       for (var p = 0; p < temp.length; p++){
         if (sum[p+i]===undefined){
           sum[p+i] =0;
         }
          var tempSum = sum[p+i] + temp[p] + mem;
          if(tempSum >= 1000000){
            arr.push(tempSum % 1000000);
            mem = (((tempSum - tempSum % 1000000)/1000000));
           } else {
           arr.push(tempSum);
           mem = 0;
           }
        }
        if (mem !=0){
      arr.push(mem);
  }
  return arr;
}
