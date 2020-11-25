var botaoinicio = document.getElementById('btnhome')
var epsodiobtn = document.getElementById('epso');
var centro = document.querySelector('.center')

alert("developed by: Davi Hr")

botaoinicio.addEventListener('click', () => {
    centro.style.display = 'flex'
    botaoinicio.style.borderBottom = ""

} )


epsodiobtn.addEventListener("click", () => { 
    console.log("opicjldklv");
    centro.style.display = 'none'
    botaoinicio.style.borderBottom = "none"
})



// epsodiobtn.removeEventListener("click"[1], () => {
//     episodiobtn.style.display = "none";
// })

if (epsodiobtn.addEventListener('click')) {
}
