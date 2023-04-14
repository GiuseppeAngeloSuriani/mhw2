function Ricomincia(event)
{
  const bottone = event.currentTarget;

  const article = document.querySelector('article');
  article.removeChild(article.lastElementChild);

  for(let image of images)
  {
      image.addEventListener('click', Seleziona);
      image.classList.remove('select')
      image.classList.remove('opacity');
      const blocco= image.querySelector('.checkbox');
      blocco.src="images/unchecked.png";
  }

  risposta={};

  window.scrollTo(0,0);
}

function Risultato()
{
  const article = document.querySelector('article');
  const ris = document.createElement('div');
  ris.classList.add('risultato');
  article.appendChild(ris);

  const titolo = document.createElement('h1');
  const testo = document.createElement('span');
  const bottone = document.createElement('button');
  bottone.classList.add('bottone');
  bottone.textContent = ('Ricomincia il quiz');
  ris.appendChild(titolo);
  ris.appendChild(testo);
  ris.appendChild(bottone);

  const uno = risposta['one'];
  const due = risposta['two'];
  const tre = risposta['three'];

  console.log(RESULTS_MAP[due]['title']);

  if(due === tre){
    titolo.textContent = RESULTS_MAP[due]['title'];
    testo.textContent=RESULTS_MAP[due]['contents'];
  }

  else{
    titolo.textContent = RESULTS_MAP[uno]['title'];
    testo.textContent = RESULTS_MAP[uno]['contents'];
  }

  bottone.addEventListener('click',Ricomincia);
}

function RimuoviListener()
{
  const images = document.querySelectorAll('.choice-grid div');

    for(let image of images){
        image.removeEventListener('click', Seleziona);
    }
}

function Seleziona(event)
{
  const image = event.currentTarget;
  image.classList.add('select');
  image.classList.remove("opacity");
  const box = image.querySelector('.checkbox');
  box.src = "images/checked.png";

  risposta[image.dataset.questionId]= image.dataset.choiceId;

  const griglia= image.parentNode;
  const images= griglia.querySelectorAll('div');
  for(let immagine of images){
    if(immagine.dataset.choiceId !== image.dataset.choiceId){
      immagine.classList.add('opacity');
      immagine.classList.remove('select');
      const blocco= immagine.querySelector('.checkbox');
      blocco.src="images/unchecked.png";
    }
  }

  if(risposta['one'] !== undefined && risposta['two'] !== undefined && risposta['three'] !== undefined){
    RimuoviListener();
    Risultato();
  }

}

const images= document.querySelectorAll('.choice-grid div');

for(let image of images)
{
    image.addEventListener('click', Seleziona);
}

var risposta={}; 

