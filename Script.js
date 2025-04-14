public class Main {
    public static void main(String[] args){
    //start coding// Données des projets (pourrait être remplacé par une API)
const projects = [
    {
        id: 1,
        title: "Site E-commerce",
        description: "Plateforme e-commerce pour une marque de mode",
        image: "images/project1.jpg",
        category: "web"
    },
    {
        id: 2,
        title: "Campagne Réseaux Sociaux",
        description: "Stratégie et création de contenu pour Instagram",
        image: "images/project2.jpg",
        category: "social"
    },
    // Ajouter d'autres projets ici
];

// Chargement des projets sur la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('featured-projects');
    
    projects.slice(0, 3).forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="projects.html?id=${project.id}">Voir plus</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Ici, vous pourriez ajouter une requête AJAX pour envoyer les données
        console.log('Données du formulaire:', data);
        alert('Merci pour votre message! Nous vous contacterons bientôt.');
        contactForm.reset();
    });
}
    }
}
