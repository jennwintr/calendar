// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  
  
     // Get the current day using Day.js
     const currentDay = dayjs().format('dddd');
  
     // Display the current day in the placeholder element
     $('#currentDay').text(`${currentDay}`);
  
     const currentHour = dayjs().hour();
  
     // Get the current date using Day.js
  
     const currentDate = dayjs().format('MM-DD-YYYY');
  
     // Display the current date in the placeholder element
  
     $('#currentDate').text(`${currentDate}`);
  
     // Iterate through each time block
     $('.time-block').each(function() {
       const $block = $(this);
       const blockHour = parseInt($block.attr('id').split('-')[1]);
  
       // Determine if the time block is in the past, present, or future
       if (blockHour < currentHour) {
         $block.addClass('past');
       } else if (blockHour === currentHour) {
         $block.addClass('present');
       } else {
         $block.addClass('future');
       }
  
       // Load saved events from local storage for this time block
       const savedEvent = localStorage.getItem(`event-${blockHour}`);
       if (savedEvent) {
         $block.find('textarea').val(savedEvent);
       }
  
       // Save the event text to local storage when the save button is clicked
       $block.find('.saveBtn').on('click', function() {
         const eventText = $block.find('textarea').val();
         localStorage.setItem(`event-${blockHour}`, eventText);
       });
     });
  
     // Get the current hour using Day.js (in 24-hour format)
    //  const currentHour = dayjs().hour();
  
     // Iterate through each time block
     $('.time-block').each(function() {
       const $block = $(this);
       const blockHour = parseInt($block.attr('id').split('-')[1]);
  
       // Remove all classes first to reset the styling
       $block.removeClass('past present future');
  
       // Determine if the time block is in the past, present, or future
       if (blockHour < currentHour) {
         $block.addClass('past');
       } else if (blockHour === currentHour) {
         $block.addClass('present');
       } else {
         $block.addClass('future');
       }
  
       // Load saved events from local storage for this time block
       const savedEvent = localStorage.getItem(`event-${blockHour}`);
       if (savedEvent) {
         $block.find('textarea').val(savedEvent);
       }
  
       // Save the event text to local storage when the save button is clicked
       $block.find('.saveBtn').on('click', function() {
         const eventText = $block.find('textarea').val();
         localStorage.setItem(`event-${blockHour}`, eventText);
       });
     });
  
     $('#clear').on('click', function() {
      // Clear local storage
      localStorage.clear();
  
      // Reset all textarea fields
      $('.description').val('');
    });
  
  });
  
