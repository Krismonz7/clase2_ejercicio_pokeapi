const search = (value,data,container)=>{
    container.innerHTML='';
    const results =  data.filter(m=> m.name.toLowerCase().includes(value.toLowerCase()));
    console.log(results)
    Swal.fire(
        'Resultados buqueda',
    `Termino: ${value}`,
        'question'
    )
    return results
}

export default search