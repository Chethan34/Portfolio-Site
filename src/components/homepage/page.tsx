import Image from 'next/image';
import Link from 'next/link';
import Clogo from '/public/clogo.png';

export default function homepage(){
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white px-4 sm:px-8">
      <div className="flex flex-col space-y-8 justify-center items-center max-w-4xl w-full mt-[-50px] sm:mt-[-80px]">
        <div className="grid grid-cols-1 gap-4 items-center mb-4">
          <Image src={Clogo} alt="C logo symbol" width={160} height={130} />
          <div className="flex flex-col justify-center items-center mb-0">
            <h1 className="text-4xl font-bold ml-0">Chethan</h1>
            <p className="mt-2 ml-1 text-center font-light">Coding Enthusiast</p>
          </div>
        </div>
        <p className="mt-0 text-center">
          Hey, my name is Chethan. A minimalist obsessed with the web world, exploring functionalities and design with curiosity.
        </p>
        <p className='mb-10 text-center'> 
          Im always interested in new projects, trying out new technologies, and open source. If you would like to connect, feel free
          to reach out via the links below.
        </p>
        <div className="flex space-x-4 justify-center">
          <div className="relative inline-flex items-center">
            <Link href="https://github.com/Chethan34" className="text-underline after:content-['·'] after:absolute after:top-1/2 after:transform after:translate-y-[-50%] after:right-[-6px] after:text-white" target='blank'>GitHub</Link>
          </div>
          <div className="relative inline-flex items-center">
            <Link href="https://www.linkedin.com/in/chethan-p-194b75245/" className="text-underline after:content-['·'] after:absolute after:top-1/2 after:transform after:translate-y-[-50%] after:right-[-6px] after:text-white" target='blank'>LinkedIn</Link>
          </div>
          <div className="relative inline-flex items-center">
            <Link href="mailto:chethanprakash720@gmail.com" className="text-underline after:content-[''] after:absolute after:top-1/2 after:transform after:translate-y-[-50%] after:right-[-2px] after:text-white" target='blank'>Email</Link>
          </div>
        </div>
      </div>
    </div>
  )
}