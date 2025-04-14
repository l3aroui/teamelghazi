import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-emerald-100">
      <div className="w-full max-w-screen-xl mx-auto p-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-12 bg-emerald-200 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold ">your</span>
              </div>
              <span className="text-2xl font-bold text-white">course</span>
            </div>
            <p className="text-emerald-200">
            commencez par investir dans votre esprit
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" className="hover:text-white transition-colors" target="_blank">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/" className="hover:text-white transition-colors" target="_blank">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/" className="hover:text-white transition-colors" target="_blank">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/"  className="hover:text-white transition-colors" target="_blank">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/detail" className="hover:text-white transition-colors">details</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">your dashboard</Link>
              </li>
              <li>
                <Link to="" className="hover:text-white transition-colors">Témoignages</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Informations Légales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Rue de ain sebaa, casablanca</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+212 603338629</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>zakariaelaroui122@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-green-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-sm">
            © {new Date().getFullYear()} Your Course. Tous droits réservés.
          </span>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Médecins</Link>
            <Link to="#" className="hover:text-white transition-colors">Carrières</Link>
            <Link to="#" className="hover:text-white transition-colors">Presse</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer