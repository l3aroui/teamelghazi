
import home1 from '../assets/home1.jpg'
import DisplayCourses from '../components/DisplayCourses'


const Home = () => {

  return (
    <>
    <section className="bg-gray-50 py-16 px-4 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-15">
        Votre <span className="bg-green-800 text-white px-2 py-1 rounded-md">roadmap</span>  vers le monde professionnel est ici.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez notre plateforme éducative complète avec des cours en ligne, des tutoriels et des ressources pédagogiques de qualité.
        </p>
        <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition duration-300">
          Commencer maintenant
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={home1} alt="Education Illustration" className="w-full h-auto rounded-xl shadow-md" />
      </div>
    </div>
    </section>
    
    <div className='bg-green-300'>
    <h1 className="text-center text-5xl">Our courses</h1>
    <DisplayCourses/>
    </div>
    
    </>
  )
}

export default Home