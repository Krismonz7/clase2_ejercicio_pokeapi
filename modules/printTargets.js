import {getDatos} from "./getData.js";

const printTargets=async (data,container)=>{
    data.forEach( Pokemons => {
        const {name,url}=Pokemons;
        paintTargets(url,container)
    });
}



const paintTargets=async(url,container)=>{
    const datos_pokemon =  await getDatos(url);
    const {name,abilities,sprites,id,base_experience,weight,moves}=datos_pokemon;
    const principal_abilitie = abilities[0].ability.name;
    const secundary_abilitie =  abilities[1]?.ability.name;
    const principal_attack = moves[0].move.name;
    const secundary_attack = moves[1].move.name;
    const url_image = sprites.front_default;
    const div = document.createElement('div');
    div.classList.add('movie');
    div.innerHTML=`
    <img class='imagen' src="${url_image}" alt="">
            <div class="movie-info">
                <h3>Nombre : ${name}</h3>
                <span class="green">id: ${id}</span>
            </div>
            <div class="overview">
            <h3>Experiencia base : ${base_experience}</h3>
            <h3>Peso : ${weight}.kg</h3>
            <h3 class='green'>Habilidades principales</h3>
                principal : ${principal_abilitie}
                secundaria : ${secundary_abilitie}
            <h3 class='cyan'>Movimientos principales</h3>
                principal : ${principal_attack}
                secundaria : ${secundary_attack}
            </div>
    `;
    container.appendChild(div);
}


export default printTargets;