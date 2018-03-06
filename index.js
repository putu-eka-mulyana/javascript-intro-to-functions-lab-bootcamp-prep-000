function shout(n){
  return n.toUpperCase();
}
function whisper(n){
  return n.toLowerCase()
}
function logShout(string){
  var spy=string;
  console.log(spy);
  string.toUpperCase();
  return string;
  
}
function sayHiToGrandma(string){
  if(string==="hello"){
  return "I can't hear you!";
  }else if(string==="HELLO"){
    return "YES INDEED!";
  }else if(string==="I love you, Grandma."){
    return "I love you, too.";
  }
  
}