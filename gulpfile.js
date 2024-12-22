import gulpSass from 'gulp-sass';
import * as darkSass from 'sass';
import {src, dest, watch, series} from 'gulp';

const sass=gulpSass(darkSass);

export function js (done){
    src('src/js/app.js').pipe(dest('build/js'));
    done();
}


export function css(done){
   //src es para darle la direccion del archivo que se convertirar a css
    src('src/scss/app.scss', {sourcemaps: true})
    //pipe se usa para ejecutar una funcion ya que se haya encontrado la dirección del archivo
    .pipe(sass().on('error', sass.logError))
    // si aqui en lugar de poner true le pones '.' lo generara externamente
    //true interno
    //'.' externo
    .pipe(dest('build/css',{sourcemaps: true}));
    done();
}
export function dev(){
    //el primer parametro es para decirle que archivo va a estar observando por cambios y el segundo es para decir que haga cada vez que haya camnbios
    //Aqui se le agregó los ** para decirle que busque todas las carpetas y el * para decirle que todos los archivos
    watch('src/scss/**/*.scss',css);
    watch('src/js/**/*.js',js);
}

//series inicia una tarea y despues la finaliza, despues inicia y despues finaliza y asi 
export default series(js, css, dev)

/* 
    parallel inicia todas las tareas y las finaliza; 
    export default parallel (js, css dev)
*/