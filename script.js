const form=document.getElementById('form');
const name1=document.getElementById('name');
const age=document.getElementById("age");
const gender=document.getElementById("gender");
const email=document.getElementById("email");
const phn=document.getElementById("phone");
const city=document.getElementById("city");
const pwd=document.getElementById('passwd');
const pwd2=document.getElementById('passwd2');
const edu=document.getElementsByClassName('drop');

const mains=document.getElementById('mains');
const adva=document.getElementById('advance');
var i=1;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    check();
})

function check(){
    const uname= name1.value.trim();
    const regem= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regph = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    const regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(uname === ''){
        failf(name1,"Username cannot be blank");
        
    }
    else {
        successf(name1);
    }
    if(/^\d+$/.test(age.value))
    {
        successf(age);
    }
    else{
        failf(age,"Invalid age");
    }
    if(/^\w+$/.test(gender.value))
    {
        successf(gender);
    }
    else{
        failf(gender,"Invalid input");
    }
    if(regem.test(email.value))
    {
        successf(email);
    }
    else{
        failf(email,"Invalid email");
    }
    if(regph.test(phn.value))
    {
        successf(phn);
    }
    else{
        failf(phn,"Invalid phone number");
    }
    if(city.value.trim() === ''){
        failf(city,"City name cannot be blank");
        
    }
    else {
        successf(city);
    }
    if(regpwd.test(pwd.value)){
        successf(pwd);
        
    }
    else {
        failf(pwd,"Password must have minimum eight characters,one uppercase letter, one lowercase letter and one number");
    }
    if(pwd2.value === pwd.value && pwd2.value.trim() != ''){
        successf(pwd2);
    }
    else{
        failf(pwd2,"Passwords must be same");
    }
    if(/^\d+$/.test(mains.value))
    {
        successf(mains);
        i=1;
        dropdown();
    }
    else
    {
        failf(mains,"Invalid Rank");
        i=1;
        dropdown();
    }
    if(/^\d+$/.test(adva.value))
    {
        successf(adva);
        i=1;
        dropdown();
    }
    else
    {
        failf(adva,"Invalid Rank");
        i=1;
        dropdown();
    }

}

function failf(elem,err)
{
    const errormes = elem.parentElement.querySelector('small');
    errormes.innerText= err;
    elem.parentElement.className = 'input fail';
    
    
}
function successf(elem)
{
    elem.parentElement.className = 'input success';
}


function dropdown()
{
    if(i==1)
    {
        document.getElementById('ad').style.display="flex";
        document.getElementById('ma').style.display="flex";
        return i=0;
    }
    else
    {
        document.getElementById('ad').style.display="none";
        document.getElementById('ma').style.display="none";
        return i=1;
    }
}