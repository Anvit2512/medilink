function diagnose() {
    let symptoms = document.getElementById("symptomsInput").value.toLowerCase();

    
    if (symptoms.includes("fever") && symptoms.includes("cough")) {
        document.getElementById("diagnosisResult").innerHTML = "<p>Based on the symptoms provided, you might have a cold.</p>";
    } else if (symptoms.includes("fever") && symptoms.includes("breathing difficulty")) {
        document.getElementById("diagnosisResult").innerHTML = "<p>Based on the symptoms provided, you might have flu.</p>";
    } else {
        document.getElementById("diagnosisResult").innerHTML = "<p>No specific diagnosis could be made based on the provided symptoms.</p>";
    }
}
