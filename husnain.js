//husnain ali
//21014156
//Methods of defining or using functions in JavaScript
console.log('Hello');
                            //Function decleration method
function replace(a,b){
console.log(b);
let result=b.replaceAll('world',a);
console.log(result);
}
let a="JavaScript";
let text="hello world";
replace(a,text);// functon call

                            //Function Expression method    
let sum=function(){
let x=56,y=99;
console.log(x+y);
} 
sum();

                            //Arrow function metode
let loop=()=>{
    for(let i=0;i<6;i++){
        console.log(`Husnain ${i}`);
    }
}
loop();

                        //call back function or call back hall
let call_back_hell=()=>{
    setTimeout(()=>{
        const obj={name:'husnain',roll:21,semster:4}
        console.log(`My name is${obj.name} `);
        setTimeout((roll)=>{
            console.log(`And my roll no is ${roll}`);
            setTimeout((sme)=>{
                console.log(`And my semster is${sme}`);
            },3000,obj.semster)

        },3000,obj.roll)

    },3000)

}   
call_back_hell();//function call
/*
                                    //METODE OF STRINGS
                                    //String length
let string='My name is husnain';
let length=(str)=>{
let len=str.length;
console.log(len);
}
length(string);

                                    //String Replace
function replace(a,b){
    console.log(b);
    let result=b.replace('world',a);
    console.log(result)
    }
    let js="JavaScript";
    let tex="hello world";
    replace(js,tex);

                                    //String CharAT 
let str='My name is husnain';
console.log(str.charAt(9));

                                    //String tolower
let st='UNIVERSITY OF GUJRAT(MARGHZAR CAMPUS)';
console.log(st.toLowerCase());

                                    //String toUpper
let s='js stand for javascript';
console.log(s.toUpperCase());

                                    //String Concatinating
let str1 ='My name is Husnain';
let str2='I study at uog';
str1.concat(str2);

                                    //String Substring
let stri='01234567910';
//If start point > endindig, they are swapped
//console.log(stri.substring(5,1));
//If start point is negative it shows full string
//console.log(stri.substring(-5));
console.log(stri.substring(1,5));

                                //String Slice
let string1='Is JavaScript better than c++?';
//show string from 15 index to end
console.log(string1.slice(15));
console.log(string1.slice(3,15));

                                //String Split
let string2='write hello world';
console.log(string2.split(' '))

*/