import {getProviders, signIn} from 'next-auth/react'
function Login({providers}) {
  return (
    <div>
      <img className='w-52 mb-5' src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png' alt='login'/>
   
  {Object.values(providers).map((provider) =>(
    <div>

    </div>
  ))}

    

   
  )
      
  </div>)}
export default Login



export async function getServerSideProps(){
  const providers = await getProviders();
console.log({providers})
  return {
    props:{
      providers
    }
      
  }
}
