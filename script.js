$(function () {
  
     // Get the current day using Day.js
     const currentDay = dayjs().format('dddd');
  
     // Display the current day in the placeholder element
     $('#currentDay').text(`${currentDay}`);
  
     const currentHour = dayjs().hour();
  
     // Get the current date using Day.js
  
     const currentDate = dayjs().format('MMMM DD, YYYY');
  
     // Display the current date in the placeholder element
  
     $('#currentDate').text(`${currentDate}`);

     // Get the current time using Day.js
  
     const currentTime = dayjs().format('HH:mm A', true);
  
     // Display the current time in the placeholder element
  
     $('#currentTime').text(`${currentTime}`);
  
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
  