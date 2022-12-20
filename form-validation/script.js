const fname    = document.getElementById("first");
const lname    = document.getElementById("last");
const email    = document.getElementById("id");
const password = document.getElementById("key");
const num      = document.getElementById("contact");
const bio      = document.getElementById("data");
const button   = document.getElementById("button");


const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");

button.addEventListener("click",verify);

function verify(){
    verifyFname(fname.value);
    verifyLname(lname.value);
    verifyEmail(email.value);
    verifyPassword(password.value);
    verifyNumber(num.value)
    verifyBio(bio.value);
}


function verifyFname(name){
    if(name.length<3 || name.length>16 || name === ""){
        p1.style.color = "red";
        fname.style.border = `${3}px solid red`;
        return;
    }

    let i=0
    for(i=0; i<name.length; i++){
        let ch = name.charAt(i);
        if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
            continue;
        }
        else{
            p1.style.color = "red";
            fname.style.border = `${3}px solid red`;
            break
        }
    }
    if(i===name.length){
        fname.style.border = `${3}px solid rgb(33,191,115)`
        p1.style.color = "rgb(33,191,115)";
    }
}

function verifyLname(name){
    if(name.length<3 || name.length>16 || name === ""){
        p2.style.color = "red";
        lname.style.border = `${3}px solid red`;
        return;
    }

    let i=0
    for(i=0; i<name.length; i++){
        let ch = name.charAt(i);
        if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
            continue;
        }
        else{
            p2.style.color = "red";
            lname.style.border = `${3}px solid red`;
            break
        }
    }
    if(i===name.length){
        lname.style.border = `${3}px solid rgb(33,191,115)`
        p2.style.color = "rgb(33,191,115)";
    }
}

function verifyEmail (mail) {
    if(mail === ""){
        p3.style.color = "red";
        email.style.border = `${3}px solid red`;
        return
    }
    let count = 0;
    let count1 = 0;
    let i = 0;
    for(i=0; i<mail.length; i++){
        let ch = mail.charAt(i);
        if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z") || ch==="@" || ch==="." || (ch>="0" && ch<="9") ){
            if(ch==="@"){
                count++;
            }
            else if(ch === "."){
                count1++;
            }
            continue
        }else{
            p3.style.color = "red";
            email.style.border = `${3}px solid red`;
            break
        }
    }
    if(count===0 || count > 1){
            p3.style.color = "red";
            email.style.border = `${3}px solid red`;
            return;
    }
    if(count1===0 || count1 > 1){
            p3.style.color = "red";
            email.style.border = `${3}px solid red`;
            return;
    }
    if(i === mail.length){
        email.style.border = `${3}px solid rgb(33,191,115)`
        p3.style.color = "rgb(33,191,115)";
    } 
}


function verifyPassword(value){
    if(value.length < 6 || value.length > 20){
        p4.style.color = "red";
        password.style.border = `${3}px solid red`;
    }else{
        password.style.border = `${3}px solid rgb(33,191,115)`
        p4.style.color = "rgb(33,191,115)";
    }
}

function verifyNumber(number){
    if(number.length === 10){
        p5.style.color = "rgb(33,191,115)";
        num.style.border = `${3}px solid rgb(33,191,115)`;
    }else{
        p5.style.color = "red";
        num.style.border = `${3}px solid red`;
        return
    }

    if(number[0] === '7' || number[0] === '6' || number[0] === '9'){
        p5.style.color = "rgb(33,191,115)";
        num.style.border = `${3}px solid rgb(33,191,115)`;
    }else{
        p5.style.color = "red";
        num.style.border = `${3}px solid red`;
        return
    }

}


function verifyBio(val){
    if(val.length < 8 || val.length > 50){
        p6.style.color = "red";
        bio.style.border = `${3}px solid red`;
        return
    }else{
        p6.style.color = "rgb(33,191,115)";
        bio.style.border = `${3}px solid rgb(33,191,115)`;
        button.style.backgroundColor = "rgb(33,191,115)";
        button.style.border = "none";
    }
}