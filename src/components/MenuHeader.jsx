import { Children, useState } from "react";

export default function MenuHeader() {
    const [isOpen, setOpen] = useState(false)
    
    const HandleClick= () =>{
        if(window.innerWidth <1024)
        setOpen(!isOpen)
    }
    const itemStyle = "flex items-center justify-center box-border py-2 px-4 mb-[-1px] text-menu-text hover:bg-neutral-100 lg:rounded-md hover:text-title-color transition-all"

    const state = isOpen ? "fixed top-16 left-0 w-full flex flex-col justify-center items-stretch bg-white border-b gap-2 py-4": "hidden";
    const style = "lg:flex lg:flex-row lg:h-16 lg:w-fit lg:static  lg:justify-center lg:items-center lg:gap-0"
    return (
        <>
        <span onClick={HandleClick} className="self-center cursor-pointer py-2 text-text-color hover:text-title-color transition-all active:scale-75 lg:hidden">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor"/>
            </svg>
        </span>
        <nav className={state+" "+style}>

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