document.addEventListener('DOMContentLoaded', function(){
    resaltarEnlace();
    crearGaleria();
    navegaciónFija();
    scrollNav();
    
})

function scrollNav(){
    const navLinks= document.querySelectorAll('.navegacion-principal a');
    navLinks.forEach(link=>{
        link.addEventListener('click', e=> {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior:'smooth'});
        });
    });
}

function resaltarEnlace(){
    document.addEventListener('scroll',function(){
        const sections= document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        let actual= '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual=section.id
            }
        });

        navLinks.forEach( link =>{
            link.classList.remove('active');
            if(link.getAttribute('href')=== '#'+actual){
                link.classList.add('active');
            }
        });

    });
}

function navegaciónFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    window.addEventListener('scroll',function(){
        if(sobreFestival.getBoundingClientRect().bottom<1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
            
        }
    });
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    const CANTIDAD_IMAGENES= 16;
    for(let i= 1; i<=CANTIDAD_IMAGENES;i++){
        const imagen = document.createElement('IMG');
        imagen.src=`src/img/gallery/full/${i}.jpg`;
        imagen.alt='Imagen galeria';

        // this is a event handlen
        imagen.onclick= function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }

}

function mostrarImagen(i){

    const imagen = document.createElement('IMG');
    imagen.src=`src/img/gallery/full/${i}.jpg`;
    imagen.alt='Imagen galeria';


    // Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //generar boton
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);


    //agregar al html
    const body= document.querySelector('body');
    body.classList.add('overflow-hidden')
    body.appendChild(modal);
    
}

function cerrarModal(){
    const modal= document.querySelector('.modal');
    
    modal?.classList.add('fade-out')
    setTimeout(()=>{
        modal?.remove();   
        const body= document.querySelector('body');
        body.classList.remove('overflow-hidden')
    },500)
}