import { Children, useState,useEffect } from "react";
import IconMenu from '../components/icons/IconMenu.jsx';
import IconClose from '../components/icons/IconClose.jsx';

export default function MenuHeader() {
    const [isOpen, setOpen] = useState(false)
    const [isScroll, setScroll] = useState('')

    const HandleClick= () =>{
        if(window.innerWidth <1024)
        setOpen(!isOpen)
    }

    useEffect(() => {
        const isScroled = () => {
            if (window.scrollY > 20){
                setScroll('lg:bg-white/50 lg:backdrop-blur-md lg:shadow-md')
            }else{
                setScroll('')
            }
        }
        window.addEventListener('scroll',isScroled)
    });

    const itemStyle = "flex items-center justify-center box-border py-2 px-4 mb-[-1px] text-title-color text-4xl lg:text-base lg:rounded-md hover:text-sky-600 transition-all"

    const mobile = "fixed top-16 right-0 w-full h-full flex-col justify-start pt-16 items-stretch gap-10 rounded-0"

    const state = isOpen ? "bg-white mr-[0]": "mr-[-100vw]";

    const desktop = " lg:static lg:mr-0 lg:bg-transparent flex lg:flex-row lg:h-12 lg:w-fit lg:static lg:justify-center lg:items-center lg:pt-0 lg:gap-0 lg:rounded-[32px] lg:transition-none transition-all duration-300"

    const style = mobile+" "+state+" "+desktop+" "+isScroll
    return (
        <>
        <span onClick={HandleClick} className="self-center cursor-pointer py-2 text-title-color transition-all active:scale-75 lg:hidden">

            {!isOpen?<IconMenu width='40px' height='40px'/>:<IconClose width='40px' height='40px'/>}
        
        </span>

        <nav className={style}>

            <a onClick={HandleClick} className={itemStyle} href="#sobre-mi"> 
                Sobre mí
            </a>

            <a onClick={HandleClick} className={itemStyle} href="#servicios"> 
                Servicios
            </a>

            <a onClick={HandleClick} className={itemStyle} href="#portafolio"> 
                Portafolio
            </a>

            <a onClick={HandleClick} className={itemStyle} href="#contacto"> 
                Contacto
            </a>

        </nav>
        </>
        
    );
  }