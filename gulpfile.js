import gulpSass from 'gulp-sass';
import * as darkSass from 'sass';
import {src, dest, watch} from 'gulp';

const sass=gulpSass(darkSass);



export function css(done){
   //src es para darle la direccion del archivo que se convertirar a css
    src('src/scss/app.scss', {sourcemaps: true})
    //pipe se usa para ejecutar una funcion ya que se haya encontrado la dirección del archivo
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/css',{sourcemaps: true}))
    ;
    done();
}
export function dev(){
    //el primer parametro es para decirle que archivo va a estar observando por cambios y el segundo es para decir que haga cada vez que haya camnbios
    //Aqui se le agregó los ** para decirle que busque todas las carpetas y el * para decirle que todos los archivos
    watch('src/scss/**/*.scss',css);
}