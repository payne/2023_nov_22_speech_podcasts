// Get reference to the calendar div
const calendar = document.querySelector('.calendar');

// Function to create days of the month
function createCalendar(year, month) {
  const date = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();

  // Clear any existing content in the calendar div
  calendar.innerHTML = '';

  // Display month and year in the calendar
  const monthName = date.toLocaleString('default', { month: 'long' });
  const yearNumber = date.getFullYear();
  const header = document.createElement('h2');
  header.textContent = `${monthName} ${yearNumber}`;
  calendar.appendChild(header);

  // Create the grid for days
  for (let i = 0; i < daysInMonth; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = i + 1;
    calendar.appendChild(day);
  }
}

// Call the function with November 2023 as arguments
createCalendar(2023, 11);
