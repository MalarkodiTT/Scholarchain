// Function to Issue (Used in admin.html)
function issueCertificate() {
    const name = document.getElementById('studentName').value;
    const reg = document.getElementById('regNo').value;
    const grade = document.getElementById('gpa').value;

    if (!name || !reg || !grade) {
        alert("Please fill all fields!");
        return;
    }

    const certID = "CERT-" + Math.floor(Math.random() * 900000 + 100000);
    
    // Storing data in localStorage (Temporary database)
    const certData = { name, reg, grade };
    localStorage.setItem(certID, JSON.stringify(certData));

    document.getElementById('issueStatus').innerHTML = 
        `✅ Success! <br>Certificate ID: <strong>${certID}</strong> <br>Copy this ID for verification.`;
}

// Function to Verify (Used in index.html)
function verifyCertificate() {
    const id = document.getElementById('searchID').value;
    const resultBox = document.getElementById('resultBox');
    const status = document.getElementById('statusIndicator');
    const details = document.getElementById('resultDetails');

    const storedData = localStorage.getItem(id);

    resultBox.classList.remove('hidden');

    if (storedData) {
        const data = JSON.parse(storedData);
        status.innerText = "✅ VERIFIED GENUINE";
        status.style.color = "#2e7d32";
        resultBox.style.backgroundColor = "#f1f8e9";
        details.innerHTML = `<b>Name:</b> ${data.name}<br><b>Reg No:</b> ${data.reg}<br><b>GPA:</b> ${data.grade}`;
    } else {
        status.innerText = "❌ INVALID ID";
        status.style.color = "#c62828";
        resultBox.style.backgroundColor = "#ffebee";
        details.innerText = "No record found for this ID in Blockchain.";
    }
}