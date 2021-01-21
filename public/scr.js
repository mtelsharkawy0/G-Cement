change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`./api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
}
