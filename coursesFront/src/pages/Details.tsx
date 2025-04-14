import React from 'react'

const Details = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Section 1: Démonstration de la plateforme */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">🎓 Apprentissage 100% en ligne</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Notre plateforme vous permet d'apprendre à votre rythme, où que vous soyez. Accédez à des cours interactifs, vidéos, quiz, et examens en ligne.
        </p>
        <div className=" justify-center">
          <iframe
            className="w-full max-w-3xl h-64 rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Démonstration"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Section 2: Certificat */}
      <section className="bg-gray-100 rounded-xl p-6 shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">📜 Certificat reconnu</h2>
        <p className="text-gray-700 text-center mb-6">
          À la fin de chaque formation, vous recevez un certificat officiel validant vos compétences.
        </p>
        <div className="flex justify-center">
          <img
            src="/certificate-example.png"
            alt="Exemple de certificat"
            className="max-w-md w-full rounded-xl border"
          />
        </div>
      </section>

      {/* Section 3: Équipe pédagogique */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">👨‍🏫 Notre équipe d'experts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Prof. Yassine", subject: "Mathématiques", avatar: "/avatar1.png" },
            { name: "Mme Sara", subject: "Sciences", avatar: "/avatar2.png" },
            { name: "Mr. Omar", subject: "Développement Web", avatar: "/avatar3.png" },
          ].map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 text-center"
            >
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
              <p className="text-gray-500">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl shadow p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">ℹ️ Informations utiles</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Localisation */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📍 Où nous trouver ?</h3>
          <p className="text-gray-600">
            Nous sommes situés à Casablanca, Maroc. Notre centre de formation est ouvert du lundi au samedi.
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">🔗 Suivez-nous</h3>
          <ul className="space-y-2 text-blue-600">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                🌐 Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                🐦 Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Details