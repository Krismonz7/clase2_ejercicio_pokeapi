const getData =async(url)=>{
    const resp =  await fetch(url);
    const data = await resp.json();
    return data?.results
}

const getDatos = async(url)=>{
    const resp =  await fetch(url);
    const data = await resp.json();
    return data;
}



export {getData,getDatos};