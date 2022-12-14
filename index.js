/* 
$(function(){}) is shorthand for making sure the DOM (Document Object Model aka HTML file) is loaded before executing any JavaScript. 
*/
$(function() { 

  // Select Get Started button. When clicked, fade out overlay.
  $('.get-started').on('click',function() {
    $('.introduction').fadeOut();
  });

  // init Isotope by selecting the grid class and selecting the grid-item to be filtered
  let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  // Filtering interaction with buttons
  $('.filter-button-group').on( 'click', 'button', function() { // When a filter button is clicked on...

    let filterValue = $(this).attr('data-filter'); // Get it's data-filter value
    // try console.log filterValue to see what gets displayed in the browser console
    $grid.isotope({ filter: filterValue }); // Pass the value to the isotope array object
  });

  // Filtering interaction with dropdown
  $('.filter-dropdown').on( 'change', function() { // When a filter button is clicked on...
    let filterValue = this.value; // Get it's data-filter value
    // try console.log filterValue to see what gets displayed in the browser console
    $grid.isotope({ filter: filterValue }); // Pass the value to the isotope array object
  });
})

