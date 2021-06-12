var lang="e"
document.addEventListener('DOMContentLoaded',  () =>{
    english()
});

change=(page)=>{
    let article=document.getElementsByTagName("article")[0];
    fetch(`./api/${page}`)
    .then(response=>response.text())
    .then(response=>article.innerHTML=response)
    .then(()=>newpagelang())
    .catch((err)=>{return 0})
}
newpagelang=()=>{
    if (lang == "e"){
        english()
    }
    else{
        arabic()
    }
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
english=()=>{
    lang="e"
    engl=Array.from(document.getElementsByClassName("eng"))
    arab=Array.from(document.getElementsByClassName("arabic"))
    engl.forEach(element => {
        element.style.display="inherit"
    });
    arab.forEach(element => {
        element.style.display="none"
    });
}
arabic=()=>{
    lang="a"
    engl=Array.from(document.getElementsByClassName("eng"))
    arab=Array.from(document.getElementsByClassName("arabic"))
    engl.forEach(element => {
        element.style.display="none"
    });
    arab.forEach(element => {
        element.style.display="inherit"
    });

}


