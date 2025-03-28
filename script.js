// Team abbreviations mapping
const teamAbbreviations = {
    'Chennai Super Kings': 'CSK',
    'Royal Challengers Bengaluru': 'RCB',
    'Mumbai Indians': 'MI',
    'Delhi Capitals': 'DC',
    'Kolkata Knight Riders': 'KKR',
    'Sunrisers Hyderabad': 'SRH',
    'Punjab Kings': 'PBKS',
    'Rajasthan Royals': 'RR',
    'Gujarat Titans': 'GT',
    'Lucknow Super Giants': 'LSG'
};

const shortToFull = Object.entries(teamAbbreviations).reduce((acc, [full, short]) => {
    acc[short.toLowerCase()] = full;
    return acc;
}, {});

const title = document.querySelector('.title');
const observer = new IntersectionObserver(
    ([entry]) => {
        title.classList.toggle('sticky', !entry.isIntersecting);
    },
    { threshold: [0] }
);
observer.observe(title);

// Helper: Convert match date format (DD-MM-YY) to display format
function formatDate(dateString) {
    const [d, m, y] = dateString.split('-');
    return `${d}/${m}/20${y}`;
}

// Helper: Convert date input (YYYY-MM-DD) to match format (DD-MM-YY)
function formatDateInput(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year.slice(2)}`;
}
const matches = [
{ matchNo: 1, date: '22-03-25', day: 'Saturday', start: '7:30 PM', home: 'Kolkata Knight Riders', away: 'Royal Challengers Bengaluru', venue: 'Kolkata' },
{ matchNo: 2, date: '23-03-25', day: 'Sunday', start: '3:30 PM', home: 'Sunrisers Hyderabad', away: 'Rajasthan Royals', venue: 'Hyderabad' },
{ matchNo: 3, date: '23-03-25', day: 'Sunday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Mumbai Indians', venue: 'Chennai' },
{ matchNo: 4, date: '24-03-25', day: 'Monday', start: '7:30 PM', home: 'Delhi Capitals', away: 'Lucknow Super Giants', venue: 'Visakhapatnam' },
{ matchNo: 5, date: '25-03-25', day: 'Tuesday', start: '7:30 PM', home: 'Gujarat Titans', away: 'Punjab Kings', venue: 'Ahmedabad' },
{ matchNo: 6, date: '26-03-25', day: 'Wednesday', start: '7:30 PM', home: 'Rajasthan Royals', away: 'Kolkata Knight Riders', venue: 'Guwahati' },
{ matchNo: 7, date: '27-03-25', day: 'Thursday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Lucknow Super Giants', venue: 'Hyderabad' },
{ matchNo: 8, date: '28-03-25', day: 'Friday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Royal Challengers Bengaluru', venue: 'Chennai' },
{ matchNo: 9, date: '29-03-25', day: 'Saturday', start: '7:30 PM', home: 'Gujarat Titans', away: 'Mumbai Indians', venue: 'Ahmedabad' },
{ matchNo: 10, date: '30-03-25', day: 'Sunday', start: '3:30 PM', home: 'Delhi Capitals', away: 'Sunrisers Hyderabad', venue: 'Visakhapatnam' },
{ matchNo: 11, date: '30-03-25', day: 'Sunday', start: '7:30 PM', home: 'Rajasthan Royals', away: 'Chennai Super Kings', venue: 'Guwahati' },
{ matchNo: 12, date: '31-03-25', day: 'Monday', start: '7:30 PM', home: 'Mumbai Indians', away: 'Kolkata Knight Riders', venue: 'Mumbai' },
{ matchNo: 13, date: '01-04-25', day: 'Tuesday', start: '7:30 PM', home: 'Lucknow Super Giants', away: 'Punjab Kings', venue: 'Lucknow' },
{ matchNo: 14, date: '02-04-25', day: 'Wednesday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Gujarat Titans', venue: 'Bengaluru' },
{ matchNo: 15, date: '03-04-25', day: 'Thursday', start: '7:30 PM', home: 'Kolkata Knight Riders', away: 'Sunrisers Hyderabad', venue: 'Kolkata' },
{ matchNo: 16, date: '04-04-25', day: 'Friday', start: '7:30 PM', home: 'Lucknow Super Giants', away: 'Mumbai Indians', venue: 'Lucknow' },
{ matchNo: 17, date: '05-04-25', day: 'Saturday', start: '3:30 PM', home: 'Chennai Super Kings', away: 'Delhi Capitals', venue: 'Chennai' },
{ matchNo: 18, date: '05-04-25', day: 'Saturday', start: '7:30 PM', home: 'Punjab Kings', away: 'Rajasthan Royals', venue: 'New Chandigarh' },
{ matchNo: 19, date: '06-04-25', day: 'Sunday', start: '3:30 PM', home: 'Kolkata Knight Riders', away: 'Lucknow Super Giants', venue: 'Kolkata' },
{ matchNo: 20, date: '06-04-25', day: 'Sunday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Gujarat Titans', venue: 'Hyderabad' },
{ matchNo: 21, date: '07-04-25', day: 'Monday', start: '7:30 PM', home: 'Mumbai Indians', away: 'Royal Challengers Bengaluru', venue: 'Mumbai' },
{ matchNo: 22, date: '08-04-25', day: 'Tuesday', start: '7:30 PM', home: 'Punjab Kings', away: 'Chennai Super Kings', venue: 'New Chandigarh' },
{ matchNo: 23, date: '09-04-25', day: 'Wednesday', start: '7:30 PM', home: 'Gujarat Titans', away: 'Rajasthan Royals', venue: 'Ahmedabad' },
{ matchNo: 24, date: '10-04-25', day: 'Thursday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Delhi Capitals', venue: 'Bengaluru' },
{ matchNo: 25, date: '11-04-25', day: 'Friday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Kolkata Knight Riders', venue: 'Chennai' },
{ matchNo: 26, date: '12-04-25', day: 'Saturday', start: '3:30 PM', home: 'Lucknow Super Giants', away: 'Gujarat Titans', venue: 'Lucknow' },
{ matchNo: 27, date: '12-04-25', day: 'Saturday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Punjab Kings', venue: 'Hyderabad' },
{ matchNo: 28, date: '13-04-25', day: 'Sunday', start: '3:30 PM', home: 'Rajasthan Royals', away: 'Royal Challengers Bengaluru', venue: 'Jaipur' },
{ matchNo: 29, date: '13-04-25', day: 'Sunday', start: '3:31 PM', home: 'Delhi Capitals', away: 'Mumbai Indians', venue: 'Delhi' },
{ matchNo: 30, date: '14-04-25', day: 'Monday', start: '3:32 PM', home: 'Lucknow Super Giants', away: 'Chennai Super Kings', venue: 'Lucknow' },
{ matchNo: 31, date: '15-04-25', day: 'Tuesday', start: '3:33 PM', home: 'Punjab Kings', away: 'Kolkata Knight Riders', venue: 'New Chandigarh' },
{ matchNo: 32, date: '16-04-25', day: 'Wednesday', start: '3:34 PM', home: 'Delhi Capitals', away: 'Rajasthan Royals', venue: 'Delhi' },
{ matchNo: 33, date: '17-04-25', day: 'Thursday', start: '3:35 PM', home: 'Mumbai Indians', away: 'Sunrisers Hyderabad', venue: 'Mumbai' },
{ matchNo: 34, date: '18-04-25', day: 'Friday', start: '3:36 PM', home: 'Royal Challengers Bengaluru', away: 'Punjab Kings', venue: 'Bengaluru' },
{ matchNo: 35, date: '19-04-25', day: 'Saturday', start: '3:37 PM', home: 'Gujarat Titans', away: 'Delhi Capitals', venue: 'Ahmedabad' },
{ matchNo: 36, date: '19-04-25', day: 'Saturday', start: '3:38 PM', home: 'Rajasthan Royals', away: 'Lucknow Super Giants', venue: 'Jaipur' },
{ matchNo: 37, date: '20-04-25', day: 'Sunday', start: '3:39 PM', home: 'Punjab Kings', away: 'Royal Challengers Bengaluru', venue: 'New Chandigarh' },
{ matchNo: 38, date: '20-04-25', day: 'Sunday', start: '7:30 PM', home: 'Mumbai Indians', away: 'Chennai Super Kings', venue: 'Mumbai' },
{ matchNo: 39, date: '21-04-25', day: 'Monday', start: '7:30 PM', home: 'Kolkata Knight Riders', away: 'Gujarat Titans', venue: 'Kolkata' },
{ matchNo: 40, date: '22-04-25', day: 'Tuesday', start: '7:30 PM', home: 'Lucknow Super Giants', away: 'Delhi Capitals', venue: 'Lucknow' },
{ matchNo: 41, date: '23-04-25', day: 'Wednesday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Mumbai Indians', venue: 'Hyderabad' },
{ matchNo: 42, date: '24-04-25', day: 'Thursday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Rajasthan Royals', venue: 'Bengaluru' },
{ matchNo: 43, date: '25-04-25', day: 'Friday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Sunrisers Hyderabad', venue: 'Chennai' },
{ matchNo: 44, date: '26-04-25', day: 'Saturday', start: '7:30 PM', home: 'Kolkata Knight Riders', away: 'Punjab Kings', venue: 'Kolkata' },
{ matchNo: 45, date: '27-04-25', day: 'Sunday', start: '3:30 PM', home: 'Mumbai Indians', away: 'Lucknow Super Giants', venue: 'Mumbai' },
{ matchNo: 46, date: '27-04-25', day: 'Sunday', start: '7:30 PM', home: 'Delhi Capitals', away: 'Royal Challengers Bengaluru', venue: 'Delhi' },
{ matchNo: 47, date: '28-04-25', day: 'Monday', start: '7:30 PM', home: 'Rajasthan Royals', away: 'Gujarat Titans', venue: 'Jaipur' },
{ matchNo: 48, date: '29-04-25', day: 'Tuesday', start: '7:30 PM', home: 'Delhi Capitals', away: 'Kolkata Knight Riders', venue: 'Delhi' },
{ matchNo: 49, date: '30-04-25', day: 'Wednesday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Punjab Kings', venue: 'Chennai' },
{ matchNo: 50, date: '01-05-25', day: 'Thursday', start: '7:30 PM', home: 'Rajasthan Royals', away: 'Mumbai Indians', venue: 'Jaipur' },
{ matchNo: 51, date: '02-05-25', day: 'Friday', start: '7:30 PM', home: 'Gujarat Titans', away: 'Sunrisers Hyderabad', venue: 'Ahmedabad' },
{ matchNo: 52, date: '03-05-25', day: 'Saturday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Chennai Super Kings', venue: 'Bengaluru' },
{ matchNo: 53, date: '04-05-25', day: 'Sunday', start: '3:30 PM', home: 'Kolkata Knight Riders', away: 'Rajasthan Royals', venue: 'Kolkata' },
{ matchNo: 54, date: '04-05-25', day: 'Sunday', start: '7:30 PM', home: 'Punjab Kings', away: 'Lucknow Super Giants', venue: 'Dharamsala' },
{ matchNo: 55, date: '05-05-25', day: 'Monday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Delhi Capitals', venue: 'Hyderabad' },
{ matchNo: 56, date: '06-05-25', day: 'Tuesday', start: '7:30 PM', home: 'Mumbai Indians', away: 'Gujarat Titans', venue: 'Mumbai' },
{ matchNo: 57, date: '07-05-25', day: 'Wednesday', start: '7:30 PM', home: 'Kolkata Knight Riders', away: 'Chennai Super Kings', venue: 'Kolkata' },
{ matchNo: 58, date: '08-05-25', day: 'Thursday', start: '7:30 PM', home: 'Punjab Kings', away: 'Delhi Capitals', venue: 'Dharamsala' },
{ matchNo: 59, date: '09-05-25', day: 'Friday', start: '7:30 PM', home: 'Lucknow Super Giants', away: 'Royal Challengers Bengaluru', venue: 'Lucknow' },
{ matchNo: 60, date: '10-05-25', day: 'Saturday', start: '7:30 PM', home: 'Sunrisers Hyderabad', away: 'Kolkata Knight Riders', venue: 'Hyderabad' },
{ matchNo: 61, date: '11-05-25', day: 'Sunday', start: '3:30 PM', home: 'Punjab Kings', away: 'Mumbai Indians', venue: 'Dharamsala' },
{ matchNo: 62, date: '11-05-25', day: 'Sunday', start: '7:30 PM', home: 'Delhi Capitals', away: 'Gujarat Titans', venue: 'Delhi' },
{ matchNo: 63, date: '12-05-25', day: 'Monday', start: '7:30 PM', home: 'Chennai Super Kings', away: 'Rajasthan Royals', venue: 'Chennai' },
{ matchNo: 64, date: '13-05-25', day: 'Tuesday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Sunrisers Hyderabad', venue: 'Bengaluru' },
{ matchNo: 65, date: '14-05-25', day: 'Wednesday', start: '7:30 PM', home: 'Gujarat Titans', away: 'Lucknow Super Giants', venue: 'Ahmedabad' },
{ matchNo: 66, date: '15-05-25', day: 'Thursday', start: '7:30 PM', home: 'Mumbai Indians', away: 'Delhi Capitals', venue: 'Mumbai' },
{ matchNo: 67, date: '16-05-25', day: 'Friday', start: '7:30 PM', home: 'Rajasthan Royals', away: 'Punjab Kings', venue: 'Jaipur' },
{ matchNo: 68, date: '17-05-25', day: 'Saturday', start: '7:30 PM', home: 'Royal Challengers Bengaluru', away: 'Kolkata Knight Riders', venue: 'Bengaluru' },
{ matchNo: 69, date: '18-05-25', day: 'Sunday', start: '3:30 PM', home: 'Gujarat Titans', away: 'Chennai Super Kings', venue: 'Ahmedabad' },
{ matchNo: 70, date: '18-05-25', day: 'Sunday', start: '7:30 PM', home: 'Lucknow Super Giants', away: 'Sunrisers Hyderabad', venue: 'Lucknow' },
{ matchNo: 71, date: '20-05-25', day: 'Tuesday', start: '7:30 PM', home: '', away: 'Qualifier 1', venue: 'Hyderabad' },
{ matchNo: 72, date: '21-05-25', day: 'Wednesday', start: '7:30 PM', home: '', away: 'Eliminator', venue: 'Hyderabad' },
{ matchNo: 73, date: '23-05-25', day: 'Friday', start: '7:30 PM', home: '', away: 'Qualifier 2', venue: 'Kolkata' },
{ matchNo: 74, date: '25-05-25', day: 'Sunday', start: '7:30 PM', home: '', away: 'Final', venue: 'Kolkata' }
];
// Modified searchMatches: If team input is entered, filter by team only; else filter by date.
function searchMatches() {
    const teamInputValue = document.getElementById('teamInput').value.trim().toLowerCase();
    const dateInputValue = document.getElementById('dateInput').value.trim();

    let filteredMatches = matches;

    if (teamInputValue) {
        const teamName = shortToFull[teamInputValue] || teamInputValue;
        filteredMatches = filteredMatches.filter(match =>
            [match.home, match.away].some(team =>
                team.toLowerCase() === teamName.toLowerCase()
            )
        );
    } else if (dateInputValue) {
        const matchDate = formatDateInput(dateInputValue);
        filteredMatches = filteredMatches.filter(match => match.date === matchDate);
    }

    displayMatches(filteredMatches);
}

// Display search results in a table (remains unchanged)
function displayMatches(filteredMatches) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (filteredMatches.length === 0) {
        resultsDiv.innerHTML = '<p>No matches found for this team/date.</p>';
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Match</th>
                <th>Date</th>
                <th>Day</th>
                <th>Time</th>
                <th>Home</th>
                <th>Away</th>
                <th>Venue</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            ${filteredMatches.map(match => `
                <tr>
                    <td>#${match.matchNo}</td>
                    <td>${formatDate(match.date)}</td>
                    <td>${match.day}</td>
                    <td>${match.start}</td>
                    <td>${match.home || 'TBD'}</td>
                    <td>${match.away || 'TBD'}</td>
                    <td>${match.venue}</td>
                    <td>
                        <button onclick="addToCalendar('${generateCalendarUrl(match)}')">
                            Add
                        </button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
    wrapper.appendChild(table);
    resultsDiv.appendChild(wrapper);
}
function displayTodayMatches(todayMatches) {
    const container = document.getElementById('todaySchedule');
    if (todayMatches.length === 0) {
        container.innerHTML = '<p>No matches scheduled for today.</p>';
        return;
    }
    let html = `<h2 class="honk-today-heading">Today's Matches</h2>`;
    html += `<div class="today-matches-container">`;
    todayMatches.forEach(match => {
        html += `
          <div class="today-match-card">
            <p><span class="vast-shadow-regular">Match No:</span> <span class="smokum-regular">#${match.matchNo}</span></p>
            <p>
              <span class="vast-shadow-regular">Match:</span> 
              <span class="smokum-regular">${match.home}</span> 
              <img class="vs-gif" src="./images/vs2.gif" alt="vs"> 
              <span class="smokum-regular">${match.away}</span>
            </p>
            <p><span class="vast-shadow-regular">Venue:</span> <span class="smokum-regular">${match.venue}</span></p>
            <p><span class="vast-shadow-regular">Time:</span> <span class="smokum-regular">${match.start}</span></p>
          </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}



// Opens calendar URL in a new tab.
function addToCalendar(url) {
    if (url && typeof url === 'string') {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        console.error('Invalid calendar URL');
    }
}

// Generate Google Calendar URL for the match event.
function generateCalendarUrl(match) {
    try {
        const [day, month, year] = match.date.split('-');
        const fullYear = `20${year}`;

        const [time, modifier] = match.start.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        if (modifier === 'PM' && hours !== 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;

        const start = `${fullYear}${month}${day}T${hours.toString().padStart(2, '0')}${minutes}00`;
        const endHours = (hours + 3).toString().padStart(2, '0');
        const end = `${fullYear}${month}${day}T${endHours}${minutes}00`;

        const eventName = `${match.home} vs ${match.away}`;
        const details = `Cricket Match between ${match.home} and ${match.away}`;
        const location = match.venue;

        const url = new URL('https://www.google.com/calendar/render');
        url.searchParams.set('action', 'TEMPLATE');
        url.searchParams.set('text', eventName);
        url.searchParams.set('dates', `${start}/${end}`);
        url.searchParams.set('details', details);
        url.searchParams.set('location', location);
        url.searchParams.append('remind', '300-popup');
        url.searchParams.append('remind', '120-popup');
        url.searchParams.append('remind', '60-popup');

        return url.toString();
    } catch (error) {
        console.error('Error generating calendar URL:', error);
        return null;
    }
}

// Auto-load schedule when a date is selected (for search table).
document.getElementById('dateInput').addEventListener('change', searchMatches);

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Flatpickr with disableMobile option.
    flatpickr("#dateInput", {
        dateFormat: "Y-m-d",
        defaultDate: new Date(),
        disableMobile: true,
        onChange: function(selectedDates, dateStr) {
            searchMatches();
        }
    });

    // Set today's date on the date input.
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, '0');
    const dd = today.getDate().toString().padStart(2, '0');
    const formattedInputDate = `${yyyy}-${mm}-${dd}`;
    document.getElementById('dateInput').value = formattedInputDate;
    
    // Get today's match date in DD-MM-YY format.
    const matchDate = `${dd}-${mm}-${yyyy.toString().slice(2)}`;
    const todayMatches = matches.filter(match => match.date === matchDate);
    displayTodayMatches(todayMatches);
});