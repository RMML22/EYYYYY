document.addEventListener("DOMContentLoaded", () => {
    // Retrieve buttons and container
    const homeButton = document.getElementById("homeButton");
    const historyButton = document.getElementById("historyButton");
    const logOutButton = document.getElementById("logOutButton");


    /*
        // Function to simulate fetching sensor data
        function fetchSensorData() {
            const date = new Date().toISOString().split("T")[0]; // Current date
            const waterContent = (Math.random() * 100).toFixed(2) + "%"; // Example: "45.23%"
            const temperature = (20 + Math.random() * 15).toFixed(1) + "°C"; // Example: "25.3°C"
            const force = (Math.random() * 50).toFixed(2) + " N"; // Example: "12.45 N"
    
            return { date, waterContent, temperature, force };
        }
    
        // Function to add a new row to the table
        function addSensorDataRow(data) {
            const row = document.createElement("tr");
    
            row.innerHTML = `
                <td>${data.date}</td>
                <td>${data.waterContent}</td>
                <td>${data.temperature}</td>
                <td>${data.force}</td>
            `;
    
            historyTableBody.appendChild(row);
        }
    */


    // Function for the Home Button
    homeButton.addEventListener("click", (event) => {
        event.preventDefault();
        historyContainer.style.display = "none"; // Hide the history container
        historyButton.disabled = false;// Re-enable the "Show History" button for reuse
    });




    // History button Function
    historyButton.addEventListener("click", () => {

        // Show the history container to show the history 
        if (historyContainer.style.display === "none" || historyContainer.style.display === "") {
            historyContainer.style.display = "block";



            /*
                        // Simulate fetching and adding sensor data
                        const sensorData = fetchSensorData();
                        addSensorDataRow(sensorData);
            */




            // after clicking the history button it will disable it 
            historyButton.disabled = true;
        }
    });



    // Logout Button Funtion
    logOutButton.addEventListener("click", () => {
        window.location.href = "Login.html"; //When the logout button clicked it will o to login page
    });


});
