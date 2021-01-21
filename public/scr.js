change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`http://localhost:8080/api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
}
