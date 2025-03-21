import AudioPlayer from "./AudioPlayer"
import { Link } from "react-router-dom"

const Home = () => {
  // En una aplicación real, estos datos vendrían de una API
  const latestEpisode = {
    id: 1,
    title: "La Historia del BMW E34",
    description:
      "En este episodio, exploramos uno de los modelos más emblemáticos de BMW: el E34. Desde su debut en los años 80 hasta convertirse en un símbolo de la combinación perfecta entre elegancia y potencia. Analizamos su diseño, sus motores legendarios y por qué sigue siendo un clásico que enamora a los entusiastas de BMW. Además, compartimos algunas historias y anécdotas sobre este gran coche que sigue siendo un referente en el mundo automotriz.",
    audioSrc: "/episodio1.mp3", 
    image: "/episode1.jpg",
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-150 flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BimmerTalk</h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            El Podcast que habla de la pasión por el mundo del motor y la excelencia de BMW
          </p>
          <a
            href="#latest-episode"
            className="inline-block bg-gray-900 font-medium py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Escuchar Ahora
          </a>

        </div>
      </section>


      {/* Latest Episode Section */}
      <section id="latest-episode" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Último Episodio</h2>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
            <img src={latestEpisode.image} alt="Episodio" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">{latestEpisode.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{latestEpisode.description}</p>
              <AudioPlayer src={latestEpisode.audioSrc} title={latestEpisode.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Episodios y Producción</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explora nuestra colección de episodios y descubre cómo creamos contenido de alta calidad para los
                amantes de BMW.
              </p>
              <Link to="/episodes" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Ver Episodios →
              </Link>
             
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Participa</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Forma parte de nuestra comunidad. Envía tus sugerencias o comparte tus propias grabaciones con nosotros.
              </p>
              <Link to="/participate" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Participar →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

