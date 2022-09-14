const forms = document.getElementById("form")
const cardholdername = document.getElementById("name")
const cardnumber = document.getElementById("cardnumber")
const expmonth = document.getElementById("month")
const expyear = document.getElementById("year")
const cvcnumber = document.getElementById("cvc")
const nameerror = document.querySelector(".name-error")
const numerror = document.querySelector(".number-error")
const montherror = document.querySelector(".month-error")
const yearerror = document.querySelector(".year-error")
const cvcerror = document.querySelector(".cvc-error")
var numbers = /^[0-9]+$/;


/* cardnumber.addEventListener('input', function (e) {
    var target = e.target, position = target.selectionEnd, length = target.value.length;
    
    target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
  }); */


//   Live Changes on the cards
  function namechange(){
    const displayname = document.querySelector(".username")
    if(cardholdername.value=== ""||null){
        displayname.innerText = "Jane Appleseed"
    }else{
    displayname.innerText = cardholdername.value
   }

  }


 function monthchange(){
    const displaymonth = document.querySelector(".expirymonth");
    
    if(expmonth.value === ""||null){
        displaymonth.innerText = "00";
    }else{
        displaymonth.innerText = expmonth.value;
   }
    
 }

 function yearchange(){
    const displayyear = document.querySelector(".expiryyear");
    if (expyear.value===""||null) {
        displayyear.innerText = "0000"
        
    } else {
        displayyear.innerText = expyear.value;    
    }
    
 }

 function cvcchange(){
    const displaycvc = document.querySelector(".cvc-number");
    if (cvcnumber.value===""|null) {
        displaycvc.innerText = "000"
        
    } else {
        displaycvc.innerText = cvcnumber.value;        
    }

 }

 function digitssep(){
    

  let cardnumarray = cardnumber.value.match(/.{0,4}/g);


  const first = document.querySelector(".first")
  cardnumarray[0] === ""||null ? first.innerText ="0000" :  first.innerText = cardnumarray[0]
// if ((cardnumarray[0] ==="")||(cardnumarray[0] ===null)||(cardnumarray[0] === undefined) ) {
//     first.innerText ="0000"
// } else {
//     first.innerText = cardnumarray[2]
// }
  
    
  

  const second = document.querySelector(".second")
  cardnumarray[1] === undefined ? second.innerText ="0000" : second.innerText = cardnumarray[1]
//   if ((cardnumarray[1] ==="")||(cardnumarray[1] ===null)||(cardnumarray[1] ===undefined) ) {
//     second.innerText ="0000"
// } else {
//     second.innerText = cardnumarray[2]
// }
  



  const third = document.querySelector(".third")
  cardnumarray[2] === undefined ? third.innerText ="0000" : third.innerText = cardnumarray[2]
//   if ((cardnumarray[2] ==="")||(cardnumarray[2] ===null)||(cardnumarray[2] ===undefined) ) {
//     third.innerText ="0000"
// } else {
//     third.innerText = cardnumarray[2]
// }





  const fourth = document.querySelector(".fourth")
  cardnumarray[3] === undefined? fourth.innerText ="0000" : fourth.innerText = cardnumarray[3]
// if ((cardnumarray[3] ==="")||(cardnumarray[3] ===null)||(cardnumarray[3] ===undefined) ){
//     fourth.innerText ="0000"
// } else {
//     fourth.innerText = cardnumarray[3]
// }

  

  
 }

//validation when submit btn  clicked

forms.addEventListener("submit",function(e){
    
    
    
    e.preventDefault()
    // cardholdlername 
    if(cardholdername.value === "" || cardholdername.value=== null){
        
        nameerror.innerText = "This field can't be blank"
        cardholdername.style.borderColor = "red"
    
    }else{
        
        nameerror.innerText = ""
    
    }
    // card number
    if(cardnumber.value === "" || cardnumber.value=== null){
        
        numerror.innerText = "This field can't be blank"
        cardnumber.style.borderColor = "red"
    
    }else{
        
        checkcardnumber(cardnumber)
    }
      //expiry month
    if(expmonth.value === "" || expmonth.value=== null){
        
        montherror.innerText = "This field can't be blank"
        expmonth.style.borderColor = "red"
    
    }else{
        
        checkmonth(expmonth)
    }
    //    expiry year
    if(expyear.value === "" || expyear.value=== null){
    
        yearerror.innerText = "This field can't be blank"
        expyear.style.borderColor = "red"
    
    }else{
        
        checkyear(expyear)
    }

    // cvc number
    if(cvcnumber.value === "" || cvcnumber.value=== null){
    
        cvcerror.innerText = "This field can't be blank"
        cvcnumber.style.borderColor = "red"
    
    }else{
        
        checkcvc(cvcnumber)
    }
  
  

})
// checking if the format is correct
 
function checkcardnumber(number){
    
    if (number.value.length === 16) {
        if(number.value.match(numbers)){
            
            numerror.innerText = ""
            
        }else{
            
            numerror.innerText = "Make sure you enter numbers only"
        }           
        }else{
          
        numerror.innerText = "Make sure that you enter 16 digits"
    }
}

function checkmonth(month){

    if(month.value.length === 2){
    if(month.value.match(numbers)){
        
        montherror.innerText = "";
        
        
    }else{
    
        montherror.innerText = "Make sure you enter numbers only"
    }
    }else{
    
    montherror.innerText = "Please Follow The Format"
    }
}

function checkyear(year){


    if(year.value.length === 4){
    if(year.value.match(numbers)){
        
        yearerror.innerText = ""

    

    }else{

        yearerror.innerText = "Make sure you enter numbers only"
    }
    }else{

        yearerror.innerText = "E.g. 2000, 2001 etc "
                
    }
    
}

function checkcvc(cvc){
    
    if(cvc.value.length === 3){
    if(cvc.value.match(numbers)){
     cvcerror.innerText = "";
     
     if((cardholdername.value != ""||null)&&(cardnumber.value!=""||null)&&(expmonth.value!=""||null)&&(expyear.value!=""||null)&&(cvcnumber.value!=""||null)){
        thankyou()
        }
     
    }else{
     
        cvcerror.innerText = "Make sure you enter numbers only"
    }
    }else{
        
        cvcerror.innerText = "Make sure you enter 3 digits "
                
    }
}

// after complete state
function thankyou(){
document.querySelector(".userinfo").remove()
document.querySelector(".cardinfo").remove()
document.querySelector(".btn").innerText = "Continue"

const div1 = document.createElement("div")
div1.setAttribute("class", "thankyouimg")
const image1 = `<img src="images/icon-complete.svg" class="thankyou-image">`
div1.innerHTML = image1
forms.insertBefore(div1, forms.children[0])

const h3 = document.createElement("h2")
h3.innerHTML = `<h3 class = "thankstext">Thank You !</h3>`
forms.insertBefore(h3, forms.children[1])

const p = document.createElement("p")
p.innerHTML = `<p class = "confirmation" >We've added your card details</p>`
forms.insertBefore(p, forms.children[2])
}




// Tommorows todo
// work on thank you functionality  and upload on linkedlin and github if possibe through github  