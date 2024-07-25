import Menu from "./Menu.jsx";
import { useEffect,useState } from "react";

export default function Header() {
  const [isScroll, setScroll] = useState('');
  useEffect(() => {
    const isScroled = () => {
        if (window.scrollY > 10){
            setScroll('bg-white dark:bg-slate-900 lg:bg-transparent dark:lg:bg-transparent')
        }else{
            setScroll('')
        }
    }
    window.addEventListener('scroll',isScroled)
});

  return (
    <header 
      id="header"
      className={`header 
        fixed z-50 py-2 px-8
        flex w-full lg:justify-center items-center
        transition-all duration-300
        ${isScroll}
        justify-end
        `}
    >
      
      <Menu client:load />

    </header>
  );
}
