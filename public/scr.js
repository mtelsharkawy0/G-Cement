change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`./api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
    .catch((err)=>{return 0})
}
removezoom = ()=>{
    let zoom=document.getElementsByClassName("zoom")[0];
    zoom.innerHTML=""
    zoom.style.display="none";
}
galleryzoom =(element)=>{
    let zoom=document.getElementsByClassName("zoom")[0];
    let src=element.attributes.src.nodeValue;

    zoom.innerHTML= `<img
    class="zoomimage" 
    src=${src} 
    style="
        top:${document.getElementsByTagName("html")[0].scrollTop}px;
        "
    alt="">`;
    zoom.style.display="block";
    zoom.style.position="absolute";
    zoom.style.height=`${document.documentElement.scrollHeight}px`;
    zoom.style.width="99vw";
    zoom.style.backgroundColor="rgb(0,0,0,0.5)";
    zoom.style.zIndex="999";
    zoom.style.left="0px";
    zoom.style.top=`0px`;
}
