function add(num){
    document.form.showNum.value = document.form.showNum.value + num; 
}
function Answer(){
    let ans = document.form.showNum.value;
    if (ans){
        document.form.result.value = eval(ans); //eval : code represented as a string and returns its completion value from variable
    }
}