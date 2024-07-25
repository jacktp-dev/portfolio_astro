import { useState,useEffect } from "react";
import IconMenu from '../components/icons/IconMenu.jsx';
import IconClose from '../components/icons/IconClose.jsx';

export default function MenuHeader() {

    /* Lista de Items del menú de navegación */
    const navItems = [
        {
            title: 'Sobre mí',
            label: 'sobre-mí',
            url: '#sobre-mi'
        },
        {
            title: 'Servicios',
            label: 'servicios',
            url: '#servicios'
        },
        {
            title: 'Portafolio',
            label: 'portafolio',
            url: '#portafolio'
        },
        {
            title: 'Contacto',
            label: 'contacto',
            url: '#contacto'
        }
    ]
    
    /* Estado del menú: Abierto y Scroll */
    
    const [isOpen, setOpen] = useState(false);
    const [isScroll, setScroll] = useState('');

    const HandleClick = () => {
        if(window.innerWidth <1024) setOpen(!isOpen)
    }

    /* Reactividad al hacer scroll */

    useEffect(() => {
        const isScroled = () => {
            if (window.scrollY > 20){
                setScroll('lg:bg-white/50 lg:dark:bg-slate-700/50 lg:backdrop-blur-md lg:shadow-md')
            }else{
                setScroll('')
            }
        }
        window.addEventListener('scroll',isScroled)
    });

    /* Estilos del menú responsive */

    const mobile = "fixed top-16 right-0 w-full h-full flex-col justify-start pt-16 items-stretch gap-10 rounded-0"

    const state = isOpen ? "bg-white mr-[0]": "mr-[-100vw]";

    const desktop = " lg:static lg:px-8 lg:mr-0 lg:bg-transparent flex lg:flex-row lg:h-12 lg:w-fit lg:static lg:justify-center lg:items-center lg:pt-0 lg:gap-0 lg:rounded-[32px] lg:transition-none transition-all duration-300"

    const style = mobile+" "+state+" "+desktop+" "+isScroll

    return (
        <>
        <span onClick={HandleClick} className="self-center cursor-pointer py-2 text-title-color transition-all active:scale-75 lg:hidden">

        {/* Cambio de ícono de menú mobile */}
        
            {!isOpen
            ?
            <IconMenu width='40px' height='40px'/>
            :
            <IconClose width='40px' height='40px'/>}
        
        </span>

        <nav className={style}>
        {
            /* Mapeo de ítems del menú */

            navItems.map((link) => (
                <a 
                    id={link.label}
                    onClick={HandleClick}
                    className="flex items-center justify-center py-2 px-4
                        text-neutral-900 dark:text-white
                        text-4xl 
                        lg:text-base lg:rounded-md 
                        hover:text-sky-600 
                        transition-all"
                    aria-label={link.label}
                    href={link.url}>
                    {link.title}
                </a>
            ))
        }
        </nav>
        </>
        
    );
  }