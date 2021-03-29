var count= 0;
var countElement = document.querySelector ("#count");

var count1= 0;
var countElement1 = document.querySelector ("#count1");

var count2=0;
var countElement2= document.querySelector ("#count2");

// console.log(countElement);

function add1(){
    count++;
    countElement.innerHTML = count + " Like(s)";
    console.log(count);
}

function add2(){
    count1++;
    countElement1.innerHTML = count1 + " Like(s)";
    console.log(count1);
}

function add3(){
    count2++;
    countElement2.innerHTML = count2 + " Like(s)";
    console.log(count2);
}