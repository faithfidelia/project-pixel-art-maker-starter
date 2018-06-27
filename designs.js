// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//variable declaration
var getHeight, getWidth;

getHeight = $('#inputHeight');

getWidth = $('#inputWeight');

//onclick submit button
$('#submit').on('click', function makeGrid(e) { //an id 'submit' is asigned to submit in index.html
  	getHeight.val(); //get value of grid height
	getWidth.val(); //get value of grid width
  
  	while(getHeight.val() <=1 && getWidth.val() <=1){
  		$('table').empty(); 
  }
  
  //for... loop to dynamically create grid
  for(var x = 0; x < getHeight; x++) {
    $('table').append('<tr></tr>'); // append table row to table using the inputed height
    for (var y = 0; y < getWidth; y++) {
      $('tr:last-child').append('<td></td>'); // append table data or cells to table using inputed width
    }
  }

  $('table tr td').on('click', function() { // when table cell(s) is clicked...
    $(this).css('background-color', $('#colorPicker').val()); // give color to cell(s) clicked with the color picked by user 
  });
  e.preventDefault();
  return false;
});


}
