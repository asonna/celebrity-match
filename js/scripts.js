// business logic
var whichCeleb = function(userInput1, userInput2, userInput3, userInput4, userInput5) {
  var numBurn = 0;
  var numHill = 0;
  var numDon = 0;
  var numBarak =0;

  if(userInput1 === "Bernie Sanders") {
      numBurn += 1;
  } else if (userInput1 === "Hillary Clinton") {
    numHill += 1;
  }else if (userInput1 === "Donald Trump") {
    numDon += 1;
  } else {
    numBarak =+ 1;
  }

  if(userInput2 === "Bernie Sanders") {
    numBurn += 1;
  } else if (userInput2 === "Hillary Clinton") {
    numHill += 1;
  }else if (userInput2 === "Donald Trump") {
    numDon += 1;
  } else {
    numBarak =+ 1;
  }

  if(userInput3 === "Bernie Sanders") {
    numBurn += 1;
  } else if (userInput3 === "Hillary Clinton") {
    numHill += 1;
  }else if (userInput3 === "Donald Trump") {
    numDon += 1;
  } else {
    numBarak =+ 1;
  }

  if(userInput4 === "Bernie Sanders") {
    numBurn += 1;
  } else if (userInput4 === "Hillary Clinton") {
    numHill += 1;
  }else if (userInput4 === "Donald Trump") {
    numDon += 1;
  } else {
    numBarak =+ 1;
  }

  if(userInput5 === "Bernie Sanders") {
    numBurn += 1;
  } else if (userInput5 === "Hillary Clinton") {
  numHill += 1;
  }else if (userInput5 === "Donald Trump") {
  numDon += 1;
  } else {
  numBarak =+ 1;
  }

  if(numBurn >= 3) {
    return "Bernie Sanders";
  }else if(numHill >= 3) {
    return "Hillary Clinton";
  }else if(numDon >= 3) {
    return "Donald Trump";
  } else if(numBarak >= 3) {
    return "Barak Obama";
  } else {
    return "NONE";
  }

}

// interface logic
$(document).ready(function() {
  $("#selection").submit(function() {
    event.preventDefault();
    var userInput1 = $("#question1").val();
    var userInput2 = $("#question2").val();
    var userInput3 = $("#question3").val();
    var userInput4 = $("#question4").val();
    var userInput5 = $("#question5").val();

    var result = whichCeleb(userInput1, userInput2, userInput3, userInput4, userInput5);

    $(".politician").text(result);

  });

});
