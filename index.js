
var counter = 0;
// array = [7,8,9];

function takeANumber(array) {
  counter++;
  array.push(counter);
  return "Welcome. Your ticket number is &{emptyarray[i]}"\
}
  // array.push(name);
  // return "Welcome, "+name+". You are number "+(array.indexOf(name)+1)+" in line.";
}
//deli is growing...ticket number. 

function nowServing(emptyarray){
  if (emptyarrayarray.length > 0){
    return "Currently serving "+emptyarrayarray.shift()+".";
  }
  else if(emptyarray.length === 0){
    return "There is nobody waiting to be served!";  
  } 
}

function currentLine(array){
  var initialKeyWord ="The line is currently";
  var collector =[];
  if (array.length >0){
    var i;
    for (i =0; i <array.length; i++){
      collector.push((i+1)+ ". "+array[i]);  
    }
    return initialKeyWord+": "+collector.join(', ');
  }
  else if (array.length === 0){
    return initialKeyWord+" empty.";
  }
}

