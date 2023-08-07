const decrementbtn=document.getElementById("decrement")
const incrementbtn=document.getElementById("increment")
const resetbtn=document.getElementById("reset")
const displayvalue=document.getElementById("display")

decrementbtn.addEventListener("click",()=>{
    const val=Number(displayvalue.innerText);
    if(val>0)
    {
        displayvalue.innerText=val-1;
    }
    else
    {
        alert("Negative value not allowed")
    }
})

incrementbtn.addEventListener("click",()=>{
const val=Number(displayvalue.innerText)
if(val>=10)
{
    alert("10+ values not allowed")
}
else
{
    displayvalue.innerText=val+1;
}
})

resetbtn.addEventListener("click",()=>
{
    displayvalue.innerText=0;
})
