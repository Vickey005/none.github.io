document.getElementById("birthdayForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let birthdayInput = document.getElementById("birthday").value;
    let today = new Date();
    let inputDate = new Date(birthdayInput);

    let todayDay = today.getDate();
    let todayMonth = today.getMonth();
    
    let birthdayDay = inputDate.getDate();
    let birthdayMonth = inputDate.getMonth();

    let message = document.getElementById("message");

    if (todayDay === birthdayDay && todayMonth === birthdayMonth) {
        message.textContent = "Happy Birthday!";
        message.style.color = "green";
    } else {
        message.textContent = "Today is not your birthday.";
        message.style.color = "red";
    }
});
