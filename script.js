// creare una pagina dedicata in cui mostrare una card per ciascun componente.
// lista array con oggetti
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male3.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
//  stampo in console la lista dei membri con relative proprietà
console.table (teamMembers);

// richiamo la variabile di output
const cardOutput= document.getElementById('outputCardElement');


// setto la variabile items (vuota)
let items = "";

// itero la lista del team per creare output
for (let i = 0; i < teamMembers.length; i++) {
   
   items += createCardMember(teamMembers[i]);
}

// funzione per creare card team
function createCardMember(cardTeam) {

  // destrutturazione oggetto
  const { name, role, email, img } = cardTeam;

  // creazione card-team
  let card = `   
   <div class="container text-center" class="row align-items-start"> 
    <div class="card-team" class="col">
    
      <div>
          <img src="${img}" alt="${name}" />
      </div>

      <div>
          <h3>${name}</h3>
          <p>${email}</p>
          <p>${role}</p>
      </div>

    </div>
   </div>

  `
  return card
}

// output in pagina
cardOutput.innerHTML = items;


