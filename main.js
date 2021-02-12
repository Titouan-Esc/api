// Sélecteur
const bg = document.querySelector(".bg");
const quote = document.querySelector(".box");

const fetchQuote = () => {
  // Utilisation de l'API navigateur fetch pour récuperer des données depuis une API
  fetch("https://api.quotable.io/random")
    // ? Fetch va récuperer (trad. litt. du mot fetch) des données en utilisant comme source, l'URL qu'on lui à passée.
    .then((res) => res.json())
    //   ? .then sert à synchroniser l'instruction suivante avec la réalisation de la première. Ici, on lui demande de passer la réponse
    .then((data) => {
      quote.innerHTML = `${data.content} : ${data.author}`;
    });

  fetch("https://picsum.photos/1600/1000").then((res) => {
    bg.style.background = `no-repeat center url(${res.url})`;
  });
};

console.log(fetchQuote());

quote.addEventListener("click", () => fetchQuote());
