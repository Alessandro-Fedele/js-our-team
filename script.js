// Creo un arrey di oggetti per ogni membro con nome, role, image
const ourTeam = [
    member1 = {
        nome: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    member2 = {
        nome: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    member3 = {
        nome: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    member4 = {
        nome: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    member5 = {
        nome: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    member6 = {
        nome: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    }
];

// Global Variables
const teamContainer = document.querySelector(".team-container");
const btnAddMember = document.getElementById("addMemberButton");

// Ciclo tutti i membri    
// Per comodità metto in una funzione
function createCard()
{
    // Prima del ciclo svuotiamo la lista
    teamContainer.innerHTML = "";
    // ciclo
    for (let i = 0; i < ourTeam.length; i++) {
        const members = ourTeam[i];
        console.log(members);
        console.log(members.nome);
        console.log(members.role);
        console.log(members.image);
        // Dentro il container metto una card per ogni membro
        teamContainer.innerHTML += `<div class="team-card">
                                        <div class="card-image">
                                            <img src="${members.image}" alt="${members.nome}"/>
                                        </div>
                                        <div class="card-text">
                                            <h3>${members.nome}</h3>
                                            <p>${members.role}</p>
                                        </div>
                                    </div>`;
    }
}

createCard();

//---------------------------------------------------
// INPUT button
btnAddMember.addEventListener("click", function ()
{
    // Devo pushare un oggetto nell'array di oggetti
    ourTeam.push({
        nome: document.getElementById("name").value,
        role: document.getElementById("role").value,
        image: document.getElementById("image").value
    });

    // Rieseguo la creazione delle card con quella nuova
    createCard();
});