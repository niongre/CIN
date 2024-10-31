document.addEventListener("DOMContentLoaded", function(){
    fetch("/CLIENT/Src/Public/Components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});


document.addEventListener("DOMContentLoaded", function(){
    fetch('/CLIENT/Src/Public/Components/footer.html')
        .then(responsive => responsive.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

function voirDétails(event){
    var details = document.getElementById('details');
    if (event === 'python'){
        details.innerHTML = `
            <h2>Atelier de Python</h2>
            <p>Introduction à la programmation en Python pour les débutants.</p>
            <p>Date : 20/10/2024</p>
            <p>Lieu : Salle 101, Bâtiment A</p>
        `;
    }
    else if (event === 'cybersecurity'){
        details.innerHTML = `
            <h2>Conférence sur la cybersécurité</h2>
            <p>Les dernières tendances en matière de cybersécurité.</p>
            <p>Date : 27/10/2024</p>
            <p>Lieu : Amphithéâtre 2, Bâtiment B</p>
        `;
    }
    // Ajoutez d'autres conditions pour d'autres événements
}

// inscription
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validations supplémentaires
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (nom && email && password) {
        alert('Inscription réussie!');
        // Rediriger ou traiter les données ici
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

// Connexion
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validations supplémentaires
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email && password) {
        alert('Connexion réussie!');
        // Rediriger ou traiter les données ici
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

// Formations
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target');
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`);
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh();
    });
  });