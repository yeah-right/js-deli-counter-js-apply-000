function takeANumber (currentLine, newCustomer) {
  currentLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + currentLine.length + " in line.";
}

function nowServing (currentLine) {
  var currentCustomer = "";
  
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    currentCustomer = currentLine[0];
    currentLine.shift();
    return "Currently serving " + currentCustomer + ".";
  }
}

function currentLine (customerLine) {
  var customerList = "The line is currently: "
  
  if (customerLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < customerLine.length; i++) {
      if ((i + 1) === customerLine.length) {
        customerList += (i + 1) + ". " + customerLine[i]
      } else {
        customerList += (i + 1) + ". " + customerLine[i] + ", "
      }
    }
  }
  
  return customerList;
}

// .join()