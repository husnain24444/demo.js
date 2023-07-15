//Question 1
// let arr=[-1,-2,-5,0,122,22,223];
// let sum=(arr)=>{
//     let sum=0;
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]<0)
//     continue;
//     else
//     sum=sum+arr[i];
//    }
//    return sum;
// }
// console.log(sum(arr));

//Question 2

// const name='ali husnain';

// let reverse=(name)=>{
//     let r='';
//     for(let i=name.length-1;i>=0;i--){
//         r+=name[i];
// }
// return r;
// }
// console.log(reverse(name));

//Qusedtion 3

// let chk_prime=(a)=>{
//     console.log(`Number is ${a}:`);
//     prime=1;
//     for(let i=2;i=Math.sqrt(a);i++){
//         if(a%i==0){
//         prime=0;
//         break;}
//     if(prime)
//     return true;
//     else
//     return false;
//     }
// }
// console.log(chk_prime(77));

//Question 4

// let arr=[187,947,254,295,7,111,234,927];
// let find=(arr)=>{
// arr.sort((a,b)=>a-b);
// return arr[1];
// }
// console.log(find(arr));

//Question 5

// const name=['ali','husnain','qasim','Asim','Abdul Rehman'];
// let str=(name)=>{
// let arr=[];
// j=0;
// for(let i=0;i<name.length;i++){
//     if(name[i].length>5){
//     arr[j]=name[i];
//     j++;}
// }
// return arr;
// }
// console.log(str(name));

//Question 6
// const students=[{name:'ali',grade:79},{name:'Husnain',grade:87},{name:'Qasim',grade:57},{name:'Ahmed',grade:99}];
// let sort_obj=(students)=>{
//     students.sort((a,b)=>b.grade-a.grade);
//     return students;
// }
// console.log(sort_obj(students));


//Question 7
// const str1="My name is husnain";
// let vovels=(str1)=>{
//     const vowels=['a','e','i','o','u'];
//     let j=0;
//     for(let i=0;i<str1.length;i++){
//         if(vowels.includes(str1)){
//         j++;
//     }}
//     return j;
// }
// console.log(vovels(str1));

//Question 8
// const number = 8;
// let fact=(n)=>{
//     if(n<0){
//         console.log("Negative numbers have no factorior:");
//     }
//     else if(n==0){
//         console.log("factorior of 0 is: 1");
//     }
//     else{
//     let fact=1;
//     for(let i=1;i<=n;i++){
//     fact*=i;
//     }
//     console.log(`Factoriol of ${n} is ${fact}`);
//     }
// }
// fact(number);
//Qusetion # 9
// const arr=[1,2,3,4,5,6,7,8,9];
// let avg=(arr)=>{
//     var sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(`Average of the numbers of given array is: ${avg(arr)}`);

//Question #10

// let GCD=(a,b)=>{
//     if(a<b){
//         [a,b]=[b,a];
//         while(b!==0){
//             let r=a%b;
//             a=b;
//             b=r;
//         }
//         return a;
//     }
//     else{
//     while(b!==0){
//         let r=a%b;
//         a=b;
//         b=r;
//     }
//     return a;
// }
// }
// console.log(`The GCD of given two numbers is: ${GCD(78,96)}`);

//Question # 11
// function higest_Vowels(str) {
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     let words = str.split(" ");
//     let vowels_counter = 0;
//     let most_vovel_word=""
//     for (let i=0;i<words.length;i++) {
//       const word=words[i];
//       //current counter
//       let cur = 0;
//       //inner loop
//       for (let i=0;i<word.length;i++) {
//         if (vowels.includes(word[i])) {
//           vowels_counter++
//         }
//       }
//       if (cur>vowels_counter) {
//         vowels_counter=counter;
//         most_vovel_word=word;
//       }
//     }
//     return most_vovel_word;
//   }
//   console.log(higest_Vowels("University of gujrat main Campus"));


//Question#12
// let check_palindrome=(str)=>{
//     let string=""
//     let new_str=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     for(let i=new_str.length-1;i>=0;i--){
//        string+=new_str[i]
//     }
//     if(new_str===string){
//       console.log('Yes, The given string is palindrome')
//     }
//     else{
//       console.log('No, The given string is not palindrome')
//     }
//   // console.log(string);
// }
// check_palindrome("Ra!c#e$car")


//Question # 13
// var arr1=[1,2,3]
// var arr2=[4,5,6]

// let unique_arr=(arr1,arr2)=>{
//    var new_arr=[]
//    for(var i=0;i<arr1.length;i++){
//       var cur_num=arr1[i];
//       if(arr2.includes(cur_num)){
//          new_arr.push(cur_num)
//       }
//    }
//    return new_arr;
// }
// unique_arr(arr1,arr2)
// let com_num=unique_arr(arr1,arr2)

// if(com_num.length!=0){
//    console.log(com_num)
// }
// else{
//    console.log('NO common numbers in the arry')
// }


//Question #14
// let febnoci=(num)=>{
//     if(num<0){
//         console.log("Invalid Number");
//     }
//     else{
//     let n1=0,n2=1;
//     let n3=0;
//     console.log('Fibonacci serirs:');
//     console.log(n1);
//     console.log(n2);
//     n3=n1+n2;
//     while(n3<=num){
//         console.log(n3);
//         n1=n2;
//         n2=n3;
//         n3=n1+n2;
//     }
//     }
// }
// febnoci(50);


//Question #15

// let remove_duplicate=(arr)=>{
//     const new_arr=[];
//     for(let i=0;i<arr.length;i++){
//         if(new_arr.indexOf(arr[i])===-1){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }
// let arr=[1,2,3,4,5,3,8,9,6,2,3]
// const unique_arr=remove_duplicate(arr);
// console.log(unique_arr);

//Question #16
// let most_f_char=(str)=>{
//     let obj={}
//     let most_r_char=''
//     for(let i=0;i<str.length;i++){
//         if(str[i]==" "){continue}
//        // console.log(str[i])
//         if(!obj[str[i]]){
//             obj[str[i]]=0
//         }
//         obj[str[i]]++
//         if(most_r_char==''||obj[str[i]]>obj[most_r_char]){
//             most_r_char=str[i]
//         }
//     }
//     return most_r_char
// }
// console.log(most_f_char("Hello World"))
//Question #17
// const products=[
//     { name:"Product 1", price:10, quantity:5 },
//     { name:"Product 2", price:20, quantity:3 },
//     { name:"Product 3", price:30, quantity:8 }
//   ];
// let total_value=(products)=>{
//     let total_val=0;
//     for(let i=0;i<products.length;i++){
//         total_val+=products[i].price*products[i].quantity;
//     }
//     return total_val;
// }
// console.log(total_value(products));

//Question #18

// let is_perfect=(num)=>{
//     let sum=0
//     for(let i=1;i<num;i++)
//     if(num%i==0){
//         sum+=i
//     }
//     return sum===num
// }
// console.log(`The number is a Perfect Number: ${is_perfect(100)}`)

//Question #19

// let sort=(arr)=>{
//     const new_ar=arr
// return arr.slice().sort((a,b)=>{
//    return a.toLowerCase().localeCompare(b.toLowerCase());
// })
// }

// const string_arr=['Bilal','qasim','rehman','Ali','Husnain','ahmed']
// const sort_arr=sort(string_arr)
// console.log(sort_arr)

//Question #20
// let is_anagram=(str1,str2)=>{
//     if(str1.length!==str2.length){return false}
//     let strobj={}
//     for(ch of str1){
//         strobj[ch]=(strobj[ch] || 0 )+1
//     }
//     for(ch of str2){
//         if(!strobj[ch]){return false}
//         strobj[ch]--
//     }
//     return true
// }
// let str1='hellooo'
// let str2='lloehot'
// console.log(is_anagram(str1,str2))

//Question 21
// let arr=[1,2,3,4,-1,2,5,6,11,6];
// let long_inc_subarr=(arr)=>{
//     start=0;
//     end=0;
//     max=1;
//     len=1;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>arr[i-1]){
//             len++;
//         }
//         else{
//             if(max<len){
//                 max=len;
//                 end=i-1;
//                 start = end - max + 1;
//             }
//             len=1;
//         }
//     }
//     if(len>max){
//         max=len;
//         end=arr.length-1;
//         start = end - maxLength + 1;
//     }
//     for(let j=start;j<=end;j++){
//         console.log(arr[j]);    
//     }
    
// }
// long_inc_subarr(arr);

//Question 22
//Question 30

//Question 31
// let divideNumbers=(num1,num2)=>{
//     try {
//         if(num2==0){
//             throw Error("Cannot divide by zero!")
//         }
//         return num1/num2
//     } catch (Error) {
//         console.log(Error.message)
//         return null
//     }
// }
// let res=divideNumbers(10,0)
// console.log(res)

//Question 32
// let findLargestElement=(arr)=>{
//     try {
//         if(arr.length!=0 && Array.isArray(arr)){
//         let largest = arr[0];  
//         for(i of arr){
//             if(largest<arr[i]){
//                 largest=arr[i]
//             }
//         }
//         return largest
//         }
//         else{
//             throw Error("Invalid input: please provide a non-empty array!")
//         }
//     } 
//     catch (Error) {
//         console.log(Error.message)
//         return null
//     }
// }
// let arr=[1,3,5,7]
// let res=findLargestElement(arr)
// console.log(`Result is ${res}`)


//Question 33
function wait (ms)
{
    return  new Promise(resolve=>setTimeout(resolve, ms));
}

async function delayedSum(num1, num2)
{
    await wait(1000);
    return num1+num2;
}

async function run()
{
    try {
        let result=await delayedSum(5,7);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
run();
//Question 34
//Question 35
//Question 36
//Question 37