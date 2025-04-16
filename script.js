document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid.");
        return;
    }

    if (!/^\d+$/.test(phone)) {
        alert("Nomor HP harus berupa angka saja.");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Data Pendaftaran:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nomor HP:</strong> ${phone}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Kursus:</strong> ${course}</p>
    `;
    resultDiv.style.display = "block";
});