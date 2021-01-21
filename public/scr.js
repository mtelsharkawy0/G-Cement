change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`http://localhost:${process.env.PORT}/api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
}
