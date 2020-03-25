let croix =document.getElementsByClassName("croix-button")
let heart = document.getElementsByClassName("heart-button")
let rowElement = document.getElementsByClassName("row")
let price = document.getElementsByClassName("price-value")
let total = document.getElementById("total-price") 
let plus=document.getElementsByClassName("plus-button")
let minus=document.getElementsByClassName("minus-button")
let quantite=document.getElementsByClassName("quantite-label")
let sum =0

/************************** Cross icon *******************************/
for(let i =0 ; i< croix.length;i++)
{
   croix[i].addEventListener('click',function(){
   rowElement[i].style.display="none";
   sum =sum-parseInt(quantite[i].innerText)*parseFloat(price[i].innerText);
   total.innerText=sum
   })
}

/************************** Heart icon*******************************/
for (let i = 0 ; i < heart.length ; i++)
{
    heart[i].addEventListener("click", function()
    { if(heart[i].style.color != "red")
    heart[i].style.color="red"
    else heart[i].style.color ="black"
    })
}

/************************** Plus button *******************************/
for(let i = 0 ; i < plus.length; i++)
{
 
   plus[i].addEventListener('click',function()
   {
       quantite[i].innerText++ ;
       sum += parseFloat(price[i].innerText)  ;
       total.innerText=sum ;
     
   })
}
/************************** Minus button *******************************/
for(let i = 0 ; i < minus.length; i++)
{
   minus[i].addEventListener('click',function()
   {
       quantite[i].innerText-- ;
       
       if(parseInt(quantite[i].innerText)<0)
       {
       alert("Quantity cannot be negative")
       quantite[i].innerText=0;
    }
    else
    {
    sum -= parseFloat(price[i].innerText)  ;
    total.innerText=sum ;}

     })

}
