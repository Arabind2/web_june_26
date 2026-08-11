// const str="javascript"
// console.log(str);
// console.log(typeof str);

// console.log(str[4]);
// console.log("size is", str.length);  //10

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const trimString="     JT      ";
// console.log("trimstring length", trimString.length);
// const trim1=trimString.trim();
// console.log("trim1 length", trim1.length, trim1 );
// const trim2=trimString.trimStart()
// console.log("trim2 length", trim2.length, trim2);
// const trim3=trimString.trimEnd()
// console.log("trim3 length", trim3.length, trim3);

//methods with arguments========
const newString="Java Technocrat"
console.log("character at 5th index", newString.charAt(5)); //T
console.log("character code at 5th index", newString.charCodeAt(5));  //84

const toBeMergedString="is famous for rashmi Sir"
const mergedString=newString.concat(" ",toBeMergedString)
console.log("merged String", mergedString);


const isJavaIncluded=newString.includes("Java",1)
console.log("is java included", isJavaIncluded);


const idxOfJava=newString.indexOf("Java",1)
console.log("index of java", idxOfJava);

const lastIndexOfA=newString.lastIndexOf("a")
console.log("last index of Java", lastIndexOfA);

const replacedString=newString.replace("a", "b")
console.log("replaced String", replacedString);

const replacedAllString=newString.replaceAll("c", "d")
console.log("replaced all String", replacedAllString);

const repeatedString=newString.repeat(3)
console.log("repeated String", repeatedString);

const padStart=newString.padStart(20,"-")
console.log("pad start", padStart);

const padEnd=newString.padEnd(20,"$")
console.log("Pad End",padEnd);

const new1="";
const padStart1=new1.padStart(5,"-")
console.log("pad start",padStart1);

const words=newString.split(" ")
console.log("after split", words);

const isStartWithjava=newString.startsWith("Java")
console.log("start with Java", isStartWithjava);

const isEndsWith=newString.endsWith("script")
console.log("ends with Java", isEndsWith);

const isEndsWith2=newString.endsWith("Technocrat")
console.log("is ends with", isEndsWith2);


//=====diff bet slice & substring

const s="we are developers"
console.log(s.length);

console.log(s.slice());
console.log(s.substring());

console.log(s.slice(10)); //elopers
console.log(s.substring(10)); //elopers

console.log(s.slice(10,13)); //elo
console.log(s.substring(10,13)); //elo

console.log(s.slice(-9)); //evelopers
console.log(s.substring(-9)); //-9 => 0 // we are developers

console.log(s.slice(17));//as maxLength is 17, maxIdx can be 16 //"" 
console.log(s.substring(17)); // ""

console.log(s.slice(10,13));//elo(as endIdx is not included)
console.log(s.substring(10,13));// elo (as endIdx is not included)

console.log(s.slice(13,10));// st > en //""(empty String)
console.log(s.substring(13,10));// st > en //swap => substring(10,13) //elo

console.log(s.slice(-8,-2));// velope
console.log(s.substring(-8,-2)); // substring(0, 0) //""

console.log(s.slice(2,-6));// ""
console.log(s.substring(2,-6));//substring(2,0) //substring(0,2)  //we









































