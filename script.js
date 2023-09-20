$(document).ready(function() {
    // Function to generate time slots from 9am to 5pm
    function generateTimeSlots() {
        const startTime = dayjs('9:00 AM', 'h:mm A');
        const endTime = dayjs('5:00 PM', 'h:mm A');
        const timeSlots = [];

        while (startTime.isBefore(endTime)) {
            timeSlots.push(startTime.format('h:mm A'));
            startTime.add(1, 'hour');
        }

        return timeSlots;
    }

    // Generate and populate the calendar
    const timeSlots = generateTimeSlots();
    const calendarBody = $('#calendar-body');

    timeSlots.forEach(function(timeSlot) {
        const row = $('<tr>');
        row.append($('<td>').text(timeSlot));
        row.append($('<td>').append($('<input>').addClass('event-input')));
        row.append($('<td>').append($('<button>').addClass('save-btn').text('Save')));

        calendarBody.append(row);
    });

    // Load saved events from local storage on page load
    for (let i = 0; i < timeSlots.length; i++) {
        const event = localStorage.getItem(`event-${i}`);
        if (event) {
            $(`.event-input:eq(${i})`).val(event);
        }
    }

    // Save button click event
    $('.save-btn').click(function() {
        const index = $(this).closest('tr').index();
        const eventText = $(`.event-input:eq(${index})`).val();

        // Save the event in local storage
        localStorage.setItem(`event-${index}`, eventText);
    });
});
