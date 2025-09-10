import { motion } from "framer-motion";
import foto from './assets/pp.png'

//linkcard 
function LinkCard({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      className="block bg-white px-3 py-3 mb-3 max-w-[350px] max-h-[60px] rounded-xl"
    >
      {label}
    </a>
  )
}

export default function app() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]">
      <div className="p-6 rounded-3xl w-80 text-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[rgba(255,255,255,0.2)] shadow-lg shadow-[#60a5fa]/30 relative z-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-30 -z-10"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-25 -z-10"></div>
        {/* ini untuk gambar */}
        <img
          src={foto}
          alt="FotoProfile"
          className="w-28 h-28 mx-auto rounded-full -mt-17 mb-2 shadow-[#60a5fa]/25 shadow-lg"
        />
        
        {/* ini deskripsi dan nama */}
        <h1 className="text-white font-bold -mb-1">Ahmad Noor</h1>
        <p className="text-[#94a3b8] mb-3">deskripsi apapun lah</p>
        
        {/* ini untuk card/linkcard di atas kita sambungin (nanti) */}
        <LinkCard href="linkweb" label="youtube"/>
        <LinkCard href="linkweb" label="instagram"/>
        <LinkCard href="linkweb" label="github"/>
        {/* rencananya ada link porto tapi saya tak punya :( */}
      </div>
    </div>
  )
}