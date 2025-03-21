"use client"

import type React from "react"

import { useState } from "react"

const Participate = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [uploadForm, setUploadForm] = useState({
    name: "",
    email: "",
    description: "",
    file: null as File | null,
  })

  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [isUploadSubmitting, setIsUploadSubmitting] = useState(false)

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleUploadChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUploadForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadForm((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactSubmitting(true)

    // Simulación de envío a API
    setTimeout(() => {
      console.log("Contact form submitted:", contactForm)
      setIsContactSubmitting(false)
      setContactForm({ name: "", email: "", subject: "", message: "" })
      alert("¡Mensaje enviado con éxito!")
    }, 1000)
  }

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploadSubmitting(true)

    // Simulación de envío a API
    setTimeout(() => {
      console.log("Upload form submitted:", uploadForm)
      setIsUploadSubmitting(false)
      setUploadForm({ name: "", email: "", description: "", file: null })
      alert("¡Archivo enviado con éxito!")
    }, 1000)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">Participa</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulario de Contacto */}
        <div className="bg-gray-800/80 backdrop-blur rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Contacto y Sugerencias</h2>
          <form onSubmit={handleContactSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleContactChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px] resize-y"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isContactSubmitting}
            >
              {isContactSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>

        {/* Formulario de Subida de Archivos */}
        <div className="bg-gray-800/80 backdrop-blur rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Envía tu Grabación</h2>
          <form onSubmit={handleUploadSubmit}>
            <div className="mb-4">
              <label htmlFor="upload-name" className="block text-sm font-medium text-gray-200 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="upload-name"
                name="name"
                value={uploadForm.name}
                onChange={handleUploadChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="upload-email" className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                id="upload-email"
                name="email"
                value={uploadForm.email}
                onChange={handleUploadChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-1">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                value={uploadForm.description}
                onChange={handleUploadChange}
                className="w-full bg-gray-700/70 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px] resize-y"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-gray-200 mb-1">
                Archivo de Audio
              </label>
              <div className="border border-dashed border-gray-500 rounded-md p-6 text-center bg-gray-700/50 hover:bg-gray-700/70 transition-colors cursor-pointer">
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".mp3,.wav,.ogg"
                  required
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer text-blue-400 hover:text-blue-300 hover:underline block"
                >
                  {uploadForm.file ? uploadForm.file.name : "Haz clic para seleccionar un archivo"}
                </label>
                <p className="text-sm text-gray-400 mt-2">MP3, WAV o OGG (MAX. 20MB)</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isUploadSubmitting}
            >
              {isUploadSubmitting ? "Enviando..." : "Enviar Grabación"}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Participate

