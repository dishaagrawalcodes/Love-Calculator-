function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Generate a random compatibility score between 0 and 100
    const compatibility = Math.floor(Math.random() * 101);
    let message = "";

    // Create a fun message based on the compatibility score
    if (compatibility > 80) {
        message = "You're a perfect match!";
    } else if (compatibility > 50) {
        message = "You're a good match!";
    } else {
        message = "Better luck next time!";
    }

    // Show the result
    document.getElementById("compatibilityScore").textContent = `${compatibility}%`;
    document.getElementById("message").textContent = message;
    document.getElementById("result").style.display = "block";
}
