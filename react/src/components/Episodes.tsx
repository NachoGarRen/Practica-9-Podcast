import { useState } from "react"
import AudioPlayer from "./AudioPlayer"

// En una aplicación real, estos datos vendrían de una API
const episodesData = [
  {
    id: 1,
    title: "La Historia del BMW E34",
    description:
      "En este episodio, exploramos uno de los modelos más emblemáticos de BMW: el E34. Desde su debut en los años 80 hasta convertirse en un símbolo de la combinación perfecta entre elegancia y potencia. Analizamos su diseño, sus motores legendarios y por qué sigue siendo un clásico que enamora a los entusiastas de BMW. Además, compartimos algunas historias y anécdotas sobre este gran coche que sigue siendo un referente en el mundo automotriz.",
    date: "20 Mar 2025",
    duration: "02:43",
    audioSrc: "/episodio1.mp3",
    image: "/episode1.jpg",
  },
  {
    id: 2,
    title: "BMW y la Fórmula 1: La Potencia que Definió una Era",
    description:
      "En este episodio, hablamos de la historia de BMW en la Fórmula 1. Desde sus primeros días en la competición hasta sus éxitos con el motor V12 en los años 90, BMW dejó una huella imborrable en el mundo de la F1. Exploramos los coches, las victorias y las innovaciones tecnológicas que ayudaron a cambiar el rumbo de las carreras. ¡Acompáñanos para revivir la emoción y los logros de BMW en la Fórmula 1!",
    date: "15 Mar 2025",
    duration: "02:45",
    audioSrc: "/episodio2.mp3",
    image: "/episode2.jpg",
  },
  {
    id: 3,
    title: "BMW E38: El Lujo y la Tecnología de los 90s",
    description:
      "El BMW E38, un modelo que marcó el cambio en la percepción de lujo y tecnología en los sedanes de los 90s. En este episodio, nos sumergimos en las innovaciones tecnológicas que hizo posible el E38, como el control de clima avanzado y el sistema de navegación, además de hablar sobre su diseño sofisticado y su confort al volante. ¡Descubre por qué el E38 sigue siendo considerado uno de los mejores sedanes de lujo jamás fabricados!",
    date: "10 Mar 2025",
    duration: "02:49",
    audioSrc: "/episodio3.mp3",
    image: "/episode3.jpg",
  },
]

const Episodes = () => {
  const [activeTab, setActiveTab] = useState("episodes")

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Episodios y Producción</h1>

      <div className="mb-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`py-2 cursor-pointer px-4 font-medium ${activeTab === "episodes"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
              : "text-gray-600 dark:text-gray-400"
              }`}
            onClick={() => setActiveTab("episodes")}
          >
            Episodios
          </button>
          <button
            className={`py-2 px-4 cursor-pointer font-medium ${activeTab === "production"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
              : "text-gray-600 dark:text-gray-400"
              }`}
            onClick={() => setActiveTab("production")}
          >
            Producción
          </button>
        </div>
      </div>

      {activeTab === "episodes" ? (
        <div className="space-y-6 fade-in">
          {episodesData.map((episode) => (
            <div className="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src={episode.image} alt="Episodio" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <span className="text-gray-400">{episode.date}</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-400">{episode.duration}</span>
                  <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{episode.description}</p>
                  <AudioPlayer src={episode.audioSrc} title={episode.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 fade-in">
          <h2 className="text-2xl font-bold mb-6">Nuestro Proceso de Producción</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Etapas de Producción</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Investigación y Planificación</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seleccionamos temas relevantes sobre BMW y el mundo del motor, investigamos a fondo y creamos un
                    guión detallado.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Grabación</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Utilizamos equipos profesionales en un estudio acondicionado para garantizar la mejor calidad de
                    sonido.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Edición y Postproducción</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Editamos el contenido, añadimos efectos sonoros y música, y optimizamos la calidad del audio.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium">Publicación y Promoción</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Subimos el episodio a nuestra web y plataformas de streaming, y lo promocionamos en redes sociales.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Software y Herramientas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h4 className="font-medium mb-2">Edición de Audio</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Audacity</li>
                  <li>Adobe Podcast Enhance</li>
                  <li>Elevenlabs</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h4 className="font-medium mb-2">Equipamiento</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Micrófonos Ozone Rec X50</li>
                  <li>Interfaz Razer THX Spatial Audio</li>
                  <li>Auriculares Razer Kraken Tournament Edition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Episodes

