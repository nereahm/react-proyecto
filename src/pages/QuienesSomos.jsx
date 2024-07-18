import React from "react"; // Importa React
import Header from "../components/Header"; // Importa el componente Header
import Carousel from "../components/Carousel"; // Importa el componente Carousel

function QuienesSomos() {
  return (
    <main>
      <Header />
      <div className="quienesSomos">
        <div className="quienesSomos__texto">
          <h2 className="quienesSomos__textoTitulo">¿Quiénes Somos?</h2>
          <p className="quienesSomos__textoInfo">
            {/* Texto descriptivo sobre la organización */}
            Nuestra organización, "Adogtame", nació del amor y la pasión por los
            animales. Fundada en 2010 por un grupo de amigos con un profundo
            sentido de empatía hacia las criaturas indefensas que deambulan por
            nuestras calles, nos hemos dedicado incansablemente a ofrecer un
            refugio seguro y amoroso para perros y gatos desamparados. La chispa
            inicial que encendió nuestra misión fue el rescate de un pequeño
            cachorro herido en una fría noche de invierno. Desde ese momento,
            nuestra determinación creció al ver de primera mano las difíciles
            condiciones en las que muchos animales viven, sin hogar ni cuidado
            adecuado. Con el tiempo, nuestra labor se ha expandido más allá del
            simple rescate. Nos hemos comprometido a rehabilitar a cada animal
            que llega a nuestras puertas, proporcionándoles cuidados médicos,
            nutrición adecuada y el cariño necesario para recuperarse física y
            emocionalmente. Cada caso nos recuerda la importancia de la
            compasión y la responsabilidad hacia todas las formas de vida. <br /><br /><br />
            Nuestro equipo está compuesto por voluntarios dedicados y
            profesionales veterinarios que comparten la misma convicción: cada
            mascota merece una segunda oportunidad. Trabajamos arduamente para
            educar a la comunidad sobre la adopción responsable y los cuidados
            adecuados para las mascotas. Organizamos eventos de adopción,
            campañas de esterilización y programas de concienciación para
            fomentar una cultura de respeto y amor hacia los animales. Cada
            historia de adopción exitosa nos llena de alegría y refuerza nuestro
            compromiso. Ver a nuestros queridos amigos peludos encontrar un
            hogar donde sean amados y cuidados nos motiva a seguir adelante. <br /><br /><br />
            Creemos en el poder transformador del amor y estamos decididos a
            continuar nuestro trabajo, proporcionando esperanza y una nueva vida
            a cada animal que cruza nuestro camino. En "Adogtame", no solo
            rescatamos animales, sino que también construimos puentes entre
            corazones humanos y las patitas que buscan un lugar donde
            pertenecer. Únete a nosotros en esta misión de amor y compasión.
            Juntos, podemos marcar la diferencia en la vida de aquellos que más
            lo necesitan.
          </p>
        </div>
        <div className="quienesSomos__carousel">
          <Carousel /> {/* Renderiza el componente Carousel */}
          <p className="texto__carousel">Hazte una foto con tus perretes y envíanosla 📸</p>
        </div>
        <div className="quienesSomos__stats">
          <h2 className="quienesSomos__statsTitulo">Datos de interés</h2>
          <div className="stats__container">
            <div className="stat">
              <p className="stat__label">Perros rescatados</p>
              <h3 className="stat__number">250</h3>
            </div>
            <div className="stat">
              <p className="stat__label">Usuarios felices con nueva mascota</p>
              <h3 className="stat__number">150</h3>
            </div>
            <div className="stat">
              <p className="stat__label">Gatos para adoptar</p>
              <h3 className="stat__number">18</h3>
            </div>
            <div className="stat">
              <p className="stat__label">Perros para adoptar</p>
              <h3 className="stat__number">25</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuienesSomos;
