var res;
//매개변수를이용
function compute(f){
 //연산자 함수이용

     res = eval(cal.text.value);
     cal.result.value = res;
     cal.text.value = " " ;
}
function compute1(f){
  cal.text.value += f;
}
