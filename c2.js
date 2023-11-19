// Function to generate the list of November days
function generateNovemberDays() {
    // Get the reference to the <ol> element
    var ol = document.getElementById("novemberDays");

    // Create a new Date object for November 1st
    var date = new Date("November 1, 2023");

    // Loop through each day in November
    for (var i = 1; i <= 30; i++) {
    // Create a new <li> element
    var li = document.createElement("li");

    // Set the text content of the <li> element to the date and day of the week
    li.textContent = date.toDateString();

    // Append the <li> element to the <ol> element
    ol.appendChild(li);

    // Increment the date by 1 day
    date.setDate(date.getDate() + 1);
    }
}