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
var s=1;
var i=1;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    check();
})

function check(){
    const uname= name1.value.trim();
    const regem= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    const regem2= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    const regph = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    const regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(uname === ''){
        failf(name1,"Username cannot be blank");
        s=0;
        
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
        s=0;
    }
    if(/^\w+$/.test(gender.value))
    {
        successf(gender);
    }
    else{
        failf(gender,"Invalid input");
        s=0;
    }
    if(regem.test(email.value) || regem2.test(email.value))
    {
        successf(email);
    }
    else{
        failf(email,"Email must be of the form abc@xyz.pqr");
        s=0;
    }
    if(regph.test(phn.value))
    {
        successf(phn);
    }
    else{
        failf(phn,"Invalid phone number");
        s=0;
    }
    if(city.value.trim() === ''){
        failf(city,"City name cannot be blank");
        s=0;
        
    }
    else {
        successf(city);
    }
    if(regpwd.test(pwd.value)){
        successf(pwd);
        
    }
    else {
        s=0;
        failf(pwd,"Password must have minimum eight characters,one uppercase letter, one lowercase letter and one number");
    }
    if(pwd2.value === pwd.value && pwd2.value.trim() != ''){
        successf(pwd2);
    }
    else{
        failf(pwd2,"Passwords must be same");
        s=0;
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
        s=0;
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
        s=0;
    }
    if(s==1)
    {
        formreset();
        s=1;
    }
    else{
        alert("Please recheck");
        s=1;
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

function checkname(){
    if(/^[A-Z][a-z]{2,}(\s[A-Z][a-z]*)*$/.test(name1.value.trim()))
    {
        successf(name1);
    }
    else
    {
        failf(name1,"Name must be atleast three letters long and start with an uppercase");
    }
}
function checkage(){
    if(/^\d{1,2}$/.test(age.value))
    {
        successf(age);
    }
    else
        failf(age,"Age should be between 0 and 99 and no spaces allowed")
}
function checkgender(){
    if(/^(M|F){1}$/.test(gender.value)){
        successf(gender);
    }
    else
    {
        failf(gender,"Enter M for Male and F for Female")
    }
}
function checkemail(){
    const regem= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    const regem2= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+\.{1}[a-zA-Z0-9-]+$/;
    if(regem.test(email.value) || regem2.test(email.value))
    {
        successf(email);
    }
    else{
        failf(email,"Email must be of the form abc@xyz.pqr");
    }
}
function checkphn(){
    const regph = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if(regph.test(phn.value))
    {
        successf(phn);
    }
    else{
        failf(phn,"Phone number must be 10 digits and Indian");
    }
}
function checkcity(){
    if(/^[A-Z][a-z]{2,}(\s[A-Z][a-z]*)*$/.test(city.value.trim()))
    {
        successf(city);
    }
    else
    {
        failf(city,"Cityname must be atleast three letters long and start with an uppercase");
    }
}
function checkpass(){
    const regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(regpwd.test(pwd.value)){
        successf(pwd);
        
    }
    else {
        failf(pwd,"Password must have minimum eight characters,one uppercase letter, one lowercase letter and one number");
    }

}
function checkpass2(){
    if(pwd2.value === pwd.value && pwd2.value.trim() != ''){
        successf(pwd2);
    }
    else{
        failf(pwd2,"Passwords must be same");
    }
}

function checkmain(){
    if(/^\d{1,6}$/.test(mains.value))
    {
        successf(mains);
        i=1;
        dropdown();
    }
    else
    {
        failf(mains,"Rank must be number less than 1000000");
        i=1;
        dropdown();
    }
}
function checkadv(){
    if(/^\d{1,5}$/.test(adva.value))
    {
        successf(adva);
        i=1;
        dropdown();
    }
    else
    {
        failf(adva,"Rank must be number less than 100000");
        i=1;
        dropdown();
    }
}
function formreset()
{
    alert("Successfully registered");
    form.reset();
    email.parentElement.className = 'input';
    pwd.parentElement.className = 'input';
    name1.parentElement.className = 'input';
    age.parentElement.className = 'input';
    gender.parentElement.className = 'input';
    phn.parentElement.className = 'input';
    city.parentElement.className = 'input';
    pwd2.parentElement.className = 'input';
    mains.parentElement.className = 'input';
    adva.parentElement.className = 'input';

}
