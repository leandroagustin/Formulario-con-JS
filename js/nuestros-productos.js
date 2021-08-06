window.onload=function(){
    $('.centrar').delay(300).fadeOut();
}
//Json
const Descripciones = '../json/json.json';

function guardarEnLocalStorage(json) {
    localStorage.setItem(`beneficios`, JSON.stringify(json));
}

$.getJSON(Descripciones, function (resquest, status) {
    if (status === 'success') {
        sectionProductos = resquest;

            borrarTodosLosChildren(sectionProductos);

            sectionProductos.forEach(e => {
                
                let primerDiv = document.createElement(`div`);
                primerDiv.setAttribute(`class`, `sectionnp-dos__container-2 row`);
                let sectionProductos = $(`#sectionProductos`);
                sectionProductos.prepend(primerDiv);

                let segundoDiv = document.createElement(`div`);
                segundoDiv.setAttribute(`class`, `sectionnp-dos__content card`);
                primerDiv.prepend(segundoDiv);

                let tercerDiv = document.createElement(`div`);
                tercerDiv.setAttribute(`class`, `sectionnp-dos__div card-body`);
                primerDiv.style.display = `flex`;
                segundoDiv.append(tercerDiv);

                let span = document.createElement(`span`);
                span.setAttribute(`class`, `sectionnp-dos__span`);
                tercerDiv.append(span);

                let i = document.createElement(`i`);
                i.setAttribute(`class`, `sectionnp-dos__i fas fa-tools`);
                span.appendChild(i);

                let h2 = document.createElement(`h2`);
                h2.setAttribute(`class`, `sectionnp-dos__h5 card-title`);
                h2.textContent = `${e.titulo}`;
                tercerDiv.prepend(h2);

                let p = document.createElement(`p`);
                p.setAttribute(`class`, `sectionnp-dos__p card-text`);
                p.textContent = `${e.descripcion}`;
                tercerDiv.appendChild(p);
            })
    }
guardarEnLocalStorage(sectionProductos);
})

function borrarTodosLosChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}