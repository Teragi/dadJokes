const showJoke = document.querySelector(`.joke`);
const btnJoke = document.querySelector('.jokeBtn');

async function fetchJoke() {
    const reponse = await fetch("https://icanhazdadjoke.com",{
        headers:{
            Accept: `application/json`,
        },
    });

    return reponse.json();
    
}
fetchJoke();

async function Clic(){
    const { joke } = await fetchJoke();
    console.log(joke);
    showJoke.textContent = joke;
}

btnJoke.addEventListener(`click`, Clic);
