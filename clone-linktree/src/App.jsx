import { motion } from "framer-motion";
import foto from './assets/pp.png'

//linkcard 
function LinkCard({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      className=""
    >
      {label}
    </a>
  )
}

export default function app() {
  return(
    <div className="">
      <div className="">
        
        {/* ini untuk gambar */}
        <img
          src={foto}
          alt="FotoProfile"
          className=""
        />
        
        {/* ini deskripsi dan nama */}
        <h1 className="">nama(malas isi)</h1>
        <p className="">deskripsi apapun lah</p>
        
        {/* ini untuk card/linkcard di atas kita sambungin (nanti) */}
        <LinkCard href="linkweb" label="ig"/>
        <LinkCard href="linkweb" label="github"/>
        <LinkCard href="linkweb" label="yt"/>
        {/* rencananya ada link porto tapi saya tak punya :( */}
      </div>
    </div>
  )
}