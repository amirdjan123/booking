/********* create variables *********/
// Cost per day for full day
var fullDayRate = 35;
// Cost per day for half day
var halfDayRate = 20;
// Initially, no days are selected
var dayCounter = 0;
// Keep track of which days have been selected
var selectedDays = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false
};
// Initially, full day is selected
var isFullDay = true;

/********* colour change days of week *********/
// Add click event listeners to day buttons
['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(function(day) {
  var dayElement = document.getElementById(day);
  dayElement.addEventListener('click', function() {
    // Toggle day selection
    if (!selectedDays[day]) {
      dayCounter++;
      this.classList.add('clicked');
    } else {
      dayCounter--;
      this.classList.remove('clicked');
    }
    selectedDays[day] = !selectedDays[day];
    recalculate();
  });
});

/********* clear days *********/
// Clear button logic
var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(function(day) {
    var dayElement = document.getElementById(day);
    dayElement.classList.remove('clicked');
    selectedDays[day] = false;
  });
  dayCounter = 0;
  recalculate();
});

/********* change rate *********/
// Half-day button logic
var halfDayButton = document.getElementById('half');
halfDayButton.addEventListener('click', function() {
  isFullDay = false;
  this.classList.add('clicked');
  document.getElementById('full').classList.remove('clicked');
  recalculate();
});

// Full-day button logic
var fullDayButton = document.getElementById('full');
fullDayButton.addEventListener('click', function() {
  isFullDay = true;
  this.classList.add('clicked');
  document.getElementById('half').classList.remove('clicked');
  recalculate();
});

/********* calculate *********/
// Recalculate the total cost
function recalculate() {
  var cost = isFullDay ? fullDayRate * dayCounter : halfDayRate * dayCounter;
  document.getElementById('calculated-cost').textContent = cost;
}
