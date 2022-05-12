import {getData} from "../modules/getData.js";
import printTargets from "../modules/printTargets.js";
import search from "../modules/serach.js";
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

getData(url);

const main = document.getElementById('main');
const form = document.getElementById('form');
let pokemons_data;
document.addEventListener('DOMContentLoaded',async()=>{

    const pokemons = await getData(url);
    pokemons_data= await getData(url);
    printTargets(pokemons,main);
})



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const valor_Busqueda = document.getElementById('search').value;
    const resultados_Busqueda = search(valor_Busqueda,pokemons_data,main);
    console.log(resultados_Busqueda);
    printTargets(resultados_Busqueda,main)
})




