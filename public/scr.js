change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`http://localhost:80/api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
}
