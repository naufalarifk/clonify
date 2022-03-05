import Image from 'next/image'
import spotify from '../public/spotify.png'
function Loader() {
  return (
    <div className="h-screen bg-black">
    <div className="pt-40 flex flex-col items-center space-y-4">
      <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
        <Image
          src={spotify}
          layout="fill"
          objectFit="contain"
          className="animate-pulse"
        />
      </span>
    </div>
  </div>
  )
}

export default Loader