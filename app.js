$(document).ready(function() {
  //declares an array with all of our colors
  var colorsArray = ['pink', 'blue', 'turquoise', 'orange'];

  //declares a variable that relates to the random color chosen by the getColor function
  var colorToClick = getColor(colorsArray)

  //appending colored divs to the DOM
  $('#container').append(
    '<div id="pink"></div>' +
    '<div id="blue"></div>' +
    '<div id="turquoise"></div>' +
    '<div id="orange"></div>'
  );

  //tells user what color to click on
  $('#clickMsg').text('Click on ' + colorToClick + '!');


  //creating $el variable to relate to each colored div
  //we will need this so that we can isolate the div that is clicked
  var $el = $('#container').children();

  //tells DOM that when a colored div is clicked, run checkColor
  //and clear out #clickError
  $el.on('click', checkColor);
  $el.on('click', '#clickError',  clearOut);


  //declarin a function to go through colors array and choose a random color
  function getColor(colorsArray) {
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
  }

  //declaring function to check if color clicked is correct
  //first, the variable id is created to relate to the id of the div clicked
  //then, the if statement checks to see if the id matches the value of the
  //color in the color array that was chosen by getColor
  //if it is, the page reloads. If it isn't, it logs a message on the
  //DOM to try again.
  function checkColor() {
    var id = this.id;
    console.log(id);
    if(id === colorToClick) {
      location.reload();
    } else {
      $('#clickError').html(
        'You clicked ' + id + '. Try again!'
      );
    }
  }

  //declares a function used to clear out past incorrect answer
  function clearOut() {
    $(this).html("");
  }

})
