const darkMode = document.getElementById("dark-mode");
let isDarkMode = false;

function checkMode() {
    if (isDarkMode) {
    console.log("It's dark");
    document.body.style.backgroundColor = "#340707";
    document.body.style.color = "#ffffff";
}
else {
    console.log("shinin' bright!");
    document.body.style.backgroundColor = "#faf2f2";
    document.body.style.color = "#000000";
}}
checkMode();

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
}

darkMode.addEventListener("click", () => {
    toggleDarkMode();
    checkMode();
})


const usersData = [
    {
        date: "2023-01-01",
        users: 143
    },
    {
        date: "2023-02-01",
        users: 150
    },
    {
        date: "2022-12-01",
        users: 140
    },
    {
        date: "2023-03-01",
        users: 151
    },
    {
        date: "2023-05-01",
        users: "160"
    },
    {
        date: "2022-11-01",
        users: 136
    },
    {
        date: "2023-06-01",
        users: 162
    }
]

const weightData = [
    {
        month: 1,
        averageChange: -0.5,
        medianChange: -0.7,
        count: 500,
        standardDeviation: 0.1
    },
    {
        month: 2,
        averageChange: -0.78,
        medianChange: -0.8,
        count: 534,
        standardDeviation: 0.2
    },
    {
        month: 3,
        averageChange: -1.4,
        medianChange: -1.38,
        count: 580,
        standardDeviation: 1.0
    },
    {
        month: 4,
        averageChange: -2.0,
        medianChange: -2.1,
        count: 600,
        standardDeviation: 0.5
    },
    {
        month: 5,
        averageChange: -2.5,
        medianChange: -2.5,
        count: 604,
        standardDeviation: 2.0
    },
    {
        month: 6,
        averageChange: -3.78,
        medianChange: -3.8,
        count: 610,
        standardDeviation: 2.5
    },
    {
        month: 7,
        averageChange: -4.3,
        medianChange: -3.8,
        count: 620,
        standardDeviation: 2.0
    },
    {
        month: 8,
        averageChange: -4.5,
        medianChange: -4.5,
        count: 630,
        standardDeviation: 3.0
    },
    {
        month: 9,
        averageChange: -5.0,
        medianChange: -5.8,
        count: 640,
        standardDeviation: 2.0
    },
    {
        month: 10,
        averageChange: -5.5,
        medianChange: -5.5,
        count: 650,
        standardDeviation: 3.0
    },
    { 
        month: 11,
        averageChange: -6.1,
        medianChange: -5.79,
        count: 660,
        standardDeviation: 3.88  
    },
    {
        month: 12,
        averageChange: -6.5,
        medianChange: -6.5,
        count: 670,
        standardDeviation: 4.0
    }
]
document.addEventListener("DOMContentLoaded", 
function() {
   
            const usersTableBody = document.getElementById("users-table-body");

            usersData.forEach(item => {
                const row = document.createElement("tr");
                const dateCell = document.createElement("td");
                const usersCell = document.createElement("td");

                dateCell.textContent = item.date;
                usersCell.textContent = item.users;

                row.appendChild(dateCell);
                row.appendChild(usersCell);
                
                usersTableBody.appendChild(row);




                
            });
        })

        document.addEventListener("DOMContentLoaded", 
function() {
   
            const weightTableBody = document.getElementById("weight-table-body");

            weightData.forEach(item => {
                const row = document.createElement("tr");
                const monthCell = document.createElement("td");
                const avChangeCell = document.createElement("td");
                const medianChangeCell = document.createElement("td");
                const countCell = document.createElement("td");
                const standardDevCell = document.createElement("td");

                monthCell.textContent = item.month;
                avChangeCell.textContent = item.averageChange;
                medianChangeCell.textContent = item.medianChange;
                countCell.textContent = item.count;
                standardDevCell.textContent = item.standardDeviation;

                row.appendChild(monthCell);
                row.appendChild(avChangeCell);
                row.appendChild(medianChangeCell);
                row.appendChild(countCell);
                row.appendChild(standardDevCell);
                
                weightTableBody.appendChild(row);




                
            });
        })
