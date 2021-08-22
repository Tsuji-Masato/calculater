let display = document.getElementById("result");

//打った数字と算術演算子を表示させる
//012などとならないように注意
function get_value(btn) {
 if (display.value == "0") {
  display.value = "" + btn.value;
 } else {
  display.value = display.value + btn.value;
 }
}

//演算子の連続入力禁止
function get_ope(btn) {
 if (display.value.slice(-1) == "+") {
  return display.value;
 } else if (display.value.slice(-1) == "-") {
  return display.value;
 } else if (display.value.slice(-1) == "*") {
  return display.value;
 } else if (display.value.slice(-1) == "/") {
  return display.value;
 } 
 display.value = display.value + btn.value;
}

/*********************************
 イコールを押すと合計値を表示
*********************************/
function get_eq(btn) {
 display.value = new Function("return " + display.value)();
 if (btn.value != "="){
  display.value = "";
 }
}

/*********************************
 クリアボタンを押下した時の処理
*********************************/
function get_cle(btn){
display.value = "";
}