const form = document.getElementById('contact');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const info = {
        nom: document.getElementById('Nom').value,
        email: document.getElementById('email').value.trim(),
        sujet: document.getElementById('Sujet').value,
        message: document.getElementById('Message').value
    };

    try {
        const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
            
        });

        const result = await res.json();
        alert(result.message);
        form.reset(); 
    }
    catch (error) {
        alert('Erreur serveur !');
    }
});
