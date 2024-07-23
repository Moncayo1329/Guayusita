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

    <div className="about1">
        <p>1. Creación de Proyectos
 Solo te llevará unos minutos personalizar tu perfil y comenzar a compartir lo que haces.
 Una vez registrado, puedes iniciar tu propio proyecto.<br></br> Describe tu idea, establece una meta de financiación y el tiempo durante el cual deseas recibir donaciones.</p> </div>
<div className="about2"> 2. Exploración y Donaciones
Explorar Proyectos: Los usuarios pueden explorar los diferentes proyectos disponibles en la plataforma. Puedes navegar por categorías y encontrar proyectos que te interesen.
Realizar Donaciones: Si encuentras un proyecto que te inspire, puedes hacer una donación. Las donaciones pueden ser de cualquier monto y, en algunos casos, los creadores ofrecen recompensas especiales para los donantes.</div>
<div className="about3">3. Seguimiento de Proyectos
Actualizaciones de Proyectos: Los creadores pueden actualizar a sus donantes sobre el progreso del proyecto. Esto incluye hitos alcanzados, novedades y cualquier otro detalle relevante.
Comentarios y Feedback: Los donantes pueden dejar comentarios y sugerencias para los proyectos que apoyan, creando una comunidad interactiva y de apoyo.</div>
<div className="about4">4. Recompensas y Finalización
Entrega de Recompensas: Si el proyecto incluye recompensas, los creadores las entregarán una vez alcanzada la meta de financiación o completado el proyecto.
Finalización del Proyecto: Al concluir el plazo de financiación, los fondos recaudados se transferirán al creador del proyecto, menos una pequeña comisión que ayuda a mantener la plataforma.

    </div>

    </div>
   
);
}




export default About;