// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

var currentDayEl = $('#currentDay');
var timeTextEl = $('.time-text');
var textAreaEl = $('.text-area');
var saveButtonEl = $('.saveBtn');
var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');
var hour14El = $('#hour-14');
var hour15El = $('#hour-15');
var hour16El = $('#hour-16');
var hour17El = $('#hour-17');
var hoursEl = $('.hours');

var hours = [hour9El, hour10El, hour11El, hour12El, hour13El, hour14El, hour15El, hour16El, hour17El]




var curHour = dayjs().format('H');
var curTime = dayjs().format('dddd MMMM D');

var timeHeader = function() {
currentDayEl.text(curTime)
}
timeHeader();


var formatBoxes = function () {
  timeTextEl.addClass('col-2 col-md-1 hour text-center py-3');
  textAreaEl.addClass('col-8 col-md-10 description rows="3"');
  saveButtonEl.addClass('col-2 col-md-1 aria-label="save"')
  hoursEl.addClass('row time-block')
};
formatBoxes();

var colorizeBoxes = function () {
  for (let i = 0; i < hours.length; i++) {
    if(curHour == hours[i].data('hour')) {
      hours[i].addClass('present')
    } else if (curHour > hours[i].data('hour')) {
      hours[i].addClass('past')
    } else  if (curHour < hours[i].data('hour')) {
      hours[i].addClass('future')
  }
}};
colorizeBoxes();

var saveButton = function() {
  saveButtonEl.on('click', function(event) {
    var text = $(this).siblings('.text-area').val()
    var hourID = $(this).parent().attr('id')
    localStorage.setItem(hourID, text)
  })
}
saveButton()

var MemorySchedule = function() {
  for (let i = 9; i < hours.length+9; i++) {
    $('#hour-' + i).children('.text-area').val(localStorage.getItem('hour-'+i))
  }
}
MemorySchedule()
});



