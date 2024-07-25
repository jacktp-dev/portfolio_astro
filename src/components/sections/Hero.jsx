import Button from "../Button.tsx";
import IconMail from "../icons/IconMail.jsx";
import IconDownload from "../icons/IconDownload.jsx";

export default function Hero() {
  const primary = true;
  return(
    <section 
    id="hero"
    className="flex flex-col-reverse w-full max-w-screen-md min-h-screen
      justify-center items-center
      mx-auto gap-10

      lg:flex-row"
    >
      <div
        className="flex flex-col items-start max-w-[420px] gap-4"
      
      >
        <h1 
          className="flex justify-center items-center
            py-1 px-3 bg-white/50
            text-neutral-900 text-sm
            border border-neutral-200 rounded-full

            dark:text-white/80 dark:bg-slate-700/50 dark:border-slate-600
          "
        >
          Ingeniero de Software
        </h1>

        <h2 
          className="text-5xl font-semibold text-neutral-900
            dark:text-white/80"
        >
          Jack Troncos
        </h2>
        
        <p 
          className="text-neutral-600 font-light
            dark:text-neutral-300"
        >
          Especialista en diseño UI/UX y desarrollo web frontend. Creo experiencias digitales atractivas, accesibles y funcionales.
        </p>


        <div 
          class="
            flex flex-col self-stretch justify-start gap-4
            md:flex-row
            "
        >
          <Button
            text="Contáctame"
            primary={primary}
            iconLeft={
              <IconMail 
                width="24px" 
                height="24px" />
            }
          />

          <Button
            text="Descargar CV"
            primary={!primary}
            iconLeft={
              <IconDownload 
                width="24px" 
                height="24px"/>
            }
          />
        </div>
      </div>

      <div 
        className="overflow-hidden backdrop-blur-sm
        bg-neutral-300/40 dark:bg-slate-700/40
          rounded-full transition-all">
        
        <img
          className="hover:scale-105 transition-all cursor-pointer"
          src="/profile.webp" 
          alt="Jack TP" 
          width="300" 
          height="300" 
        />
      </div>
    </section>
  )
}