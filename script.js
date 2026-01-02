const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Inquiry submitted successfully");
        form.reset();
      } else {
        alert("Server rejected the request");
        console.error(data);
      }
    } catch (error) {
      alert("Backend not reachable");
      console.error(error);
    }
  });
}
