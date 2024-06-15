import Image from 'next/image';
import Clogo from '/public/clogo.png';
import Link from 'next/link';



export default function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white"> {/* Modified classes */}
      <div className="flex flex-col space-y-10 justify-center items-center mb-60 pd-0 mt-0"> {/* Content container */}
        <div className="grid grid-cols-1 gap-4 items-center mb-1"> {/* New wrapper */}
          <Image src={Clogo} alt="C logo symbol" width={160} height={130} />
          <div className="flex flex-col justify-center items-center mb-0"> {/* New wrapper for text */}
            <h1 className="text-4xl font-bold ml-1">Chethan</h1>
            <p className="mt-2 ml-1 text-center font-light">Coding Enthusiast</p> {/* Adjusted classes */}
          </div>
        </div>
        <p className="mt-0">
          Hey, my name is Chethan. A minimalist obsessed with the web world, exploring functionalities and design with curiosity. <br/>
          
          </p>
        <p className='mb-10'> 
        I'm always interested in trying out new technologies, and enjoy doing open source. If you would like to connect, feel free <br/>
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
  );
}