document.getElementById('submit-button').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const image = document.getElementById('image-upload').files[0];

    if (!name || !age || !gender || !image) {
        alert("Please fill out all fields and upload an image!");
        return;
    }

    // Show loading bar
    const loadingBar = document.getElementById('loading-bar');
    const loadingProgress = document.getElementById('loading-progress');
    loadingBar.style.display = 'block';
    loadingProgress.style.width = '0%';

    let width = 0;
    const interval = setInterval(() => {
        width += 10;
        loadingProgress.style.width = `${width}%`;

        if (width === 100) {
            clearInterval(interval);
            showResults();
        }
    }, 10000);
});

function showResults() {
    const resultsSection = document.getElementById('results');
    const output = document.getElementById('output');

    // Generate random result
    const diagnoses = [
        "No signs of Melanoma. Keep up with regular skin care.",
        "Melanoma detected: Stage 1. Consult a dermatologist immediately.",
        "Melanoma detected: Stage 2. Begin treatment with prescribed medications."
    ];
    const medications = [
        "Recommended medication: Topical creams and regular checkups.",
        "Recommended medication: Surgery and immunotherapy."
    ];

    const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
    let recommendation = "";

    if (diagnosis.includes("Stage 1")) {
        recommendation = medications[0];
    } else if (diagnosis.includes("Stage 2")) {
        recommendation = medications[1];
    }

    output.innerHTML = `
        <p><strong>Diagnosis:</strong> ${diagnosis}</p>
        ${recommendation ? `<p><strong>Medications:</strong> ${recommendation}</p>` : ""}
    `;

    resultsSection.style.display = 'block';
}
