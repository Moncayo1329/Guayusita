import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About(){

    return(
        <div>
    <div className="Container">
<h1>Que es Guayusita?</h1>
<p>En Guayusita, creemos en el poder de la comunidad y 
    la solidaridad.<br></br> Somos una plataforma de crowdfunding diseñada para conectar
     a personas <br></br> con grandes ideas y aquellos que desean apoyarlas.
     <br></br>  Nuestra misión es ayudarte a transformar tus sueños en realidad y <br></br> brindarte el respaldo que necesitas cuando más lo necesitas.</p>
    </div>
<div className="list">
    <div className="about1">
        <h3> Creación de Proyectos</h3> 
        <p> Solo te llevará unos minutos personalizar tu perfil y comenzar a compartir lo que haces.<br></br> Describe tu idea, establece una meta de financiación y el tiempo durante el cual deseas recibir donaciones.</p> </div>
<div className="about2">
    <h3>Explorar Proyectos</h3>.
    Los usuarios pueden explorar los diferentes proyectos disponibles en la plataforma. Puedes navegar por categorías y encontrar proyectos que te interesen.
  Si encuentras un proyecto que te inspire, puedes hacer una donación.</div>
<div className="about3">
    <h3>Seguimiento de Proyectos</h3>
 Los creadores pueden actualizar a sus donantes sobre el progreso del proyecto. Esto incluye hitos alcanzados, novedades y cualquier otro detalle relevante.
Los donantes pueden dejar comentarios y sugerencias para los proyectos que apoyan.</div>
<div className="about4">
    <h3>Recompensas y Finalización</h3> 
 <p>Al concluir el plazo de financiación, los fondos recaudados se transferirán al creador del proyecto.</p>

    </div>

    </div> 

    </div>
   
);
}




export default About;