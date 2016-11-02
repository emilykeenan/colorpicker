$(document).ready(function() {
  //declares an array with all of our colors
  var colorsArray = ['red', 'RosyBrown', 'turquoise', 'orange', 'PapayaWhip', 'sienna',
  'SkyBlue', 'DarkSlateGray', 'linen', 'MediumVioletRed', 'maroon',
  'blue', 'orchid', 'OliveDrab', 'DodgerBlue', 'silver',
  'teal', 'crimson', 'pink', 'LemonChiffon', 'chartreuse',
  'DarkSalmon', 'thistle', 'coral'];

  //declares a variable that relates to the random color chosen by the getColor function
  var colorToClick = getColor(colorsArray)

  //goes through each index in colorsArray, generates a div with the id set
  //to that named color. It then sets the CSS for that div as well as the
  //cursor for the hover state
  $.each(colorsArray , function(i, val) {
    $('#container').append('<div id="' + colorsArray[i] +'"></div>');
    $('#' + colorsArray[i]).css({
      'background-color':colorsArray[i],
      'width':'100px',
      'height':'100px',
      'border-radius':'50%',
      'float':'left',
      'margin': '0 10px 20px 10px',
      'border': '1px solid black'
    });
    $('#' + colorsArray[i]).hover(function() {
      $(this).css('cursor','pointer');
    }, 
  })

  //sets message that tells user what color to click on
  $('#clickMsg').text('Click on ' + colorToClick + '!');


  //creating $el variable to relate to each colored div
  //we will need this so that we can isolate the div that is clicked
  var $el = $('#container').children();

  //tells DOM that when a colored div is clicked, run checkColor
  //and clear out #clickError
  $el.on('click', checkColor);
  $el.on('click', '#clickError',  clearOut);


  //declaring a function to go through colorsArray and choose a random color
  function getColor(colorsArray) {
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
  }

  //declaring function to check if the color clicked is correct
  //first, the variable id is created to relate to the id of the div clicked
  //then, the if statement checks to see if the id matches the value of the
  //color in the color array that was chosen by getColor
  //if it is, the item animates, logs a great job message, then
  //the page reloads. If it isn't true, the function logs a message on the
  //DOM to try again.
  function checkColor() {
    var id = this.id;
    if(id === colorToClick) {
      $(this).css('background-color', 'black').animate({
        opacity: '0.0'
      });
      $('#clickCorrect').html('Great work!');
      setTimeout(function(){
        location.reload();
      }, 2000);
    } else {
      $('#clickError').html('You clicked ' + id + '. Try again!');
    }
  }

  //declares a function used to clear out past incorrect answer
  function clearOut() {
    $(this).html("");
  }

})
