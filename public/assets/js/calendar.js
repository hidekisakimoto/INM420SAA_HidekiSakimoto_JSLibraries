// FullCalendar JS

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2025-07-07',
        headerToolbar: {
            left: false,
            center: 'title',
            right: false
        },
        footerToolbar: {
            center: 'prev,next today'
        },
        events: [
            {
                title: "Visa Pickup",
                start: '2025-07-01'
            },
            {
                title: 'Trip to New York City',
                start: '2025-07-07',
                end: '2025-07-10'
            },
            {
                groupId: '999',
                title: 'Web Dev Class',
                start: '2025-07-09T17:00:00'
            },
            {
                groupId: '999',
                title: 'Web Dev Class',
                start: '2025-07-16T17:00:00'
            },
            {
                title: 'Trip to Niagara Falls',
                start: '2025-07-24',
                end: '2025-07-27'
            },
            {
                title: 'Daily Meeting',
                start: '2025-07-12T10:30:00',
                end: '2025-07-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2025-07-12T12:00:00'
            },
            {
                title: 'Gym',
                start: '2025-07-12T15:00:00'
            },
            {
                title: 'High Park Picnic Day',
                start: '2025-07-13T07:00:00'
            },
            {
                title: 'Portfolio Review - Click it!',
                url: 'https://hidekisakimoto.framer.website/',
                start: '2025-07-28'
            }
        ]
    });
    calendar.render();
});
