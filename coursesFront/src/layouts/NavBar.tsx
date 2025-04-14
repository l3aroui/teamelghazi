import axios from 'axios'
import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';






const NavBar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-green-800/95">
            <div className="container mx-auto">
                <nav className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        
                        <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            
                            <div className="h-8 w-10 bg-emerald-200 rounded-lg flex items-center justify-center">
                            <span className="text-green-800 font-bold">Your</span>
                            </div>
                            <span className="text-white font-bold text-xl">Course</span>
                        </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                                Home
                            </NavLink>
                            <NavLink to="/dashborad" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                                Dashboard
                            </NavLink>
                            <NavLink to="/details" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                                Details
                            </NavLink>
                            
                            <div className="flex items-center space-x-3">
                                <button className="px-4 py-2 text-green-800 bg-emerald-100 rounded-md hover:bg-emerald-200 transition-colors duration-200"><Link to="/login">
                                Connexion</Link>
                                </button>
                                <button className="px-4 py-2 text-emerald-100 border-2 border-emerald-100 rounded-md hover:bg-emerald-100 hover:text-green-800 transition-colors duration-200"><Link to="register">
                                Inscription</Link>
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-emerald-100 transition-colors duration-200">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden pt-4 pb-3">
                        <div className="flex flex-col space-y-4">
                            <Link to="/"  className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                            Accueil
                            </Link>
                            <Link to="/services" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                            Services
                            </Link>
                            <Link to="/about" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                            À propos
                            </Link>
                            <Link to="/contact" className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium">
                            Contact
                            </Link>
                            <div className="flex flex-col space-y-2 pt-2">
                            <button className="w-full px-4 py-2 text-green-800 bg-emerald-100 rounded-md hover:bg-emerald-200 transition-colors duration-200"><Link to="/login">
                                Connexion</Link>
                            </button>
                            <button className="w-full px-4 py-2 text-emerald-100 border-2 border-emerald-100 rounded-md hover:bg-emerald-100 hover:text-green-800 transition-colors duration-200"><Link to="/register">
                                Inscription</Link>
                            </button>
                            </div>
                        </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>     
  )
}

export default NavBar