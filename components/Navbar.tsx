import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar:FC = () => {
  return (
    <div className='flex justify-between items-center pt-2 pb-5 font-mono'>
      <Link href="/" className='flex items-center space-x-2'>
        <div className='relative w-[40px] h-[30px]'>
          <Image src="https://i.ibb.co/7j2jW64/football-info.png" alt="icon" fill className='object-cover' />
        </div>
        <span className='text-green-300 text-2xl font-bold none md:block'>in|foo</span>
      </Link>
      <p className='text-xs md:text-sm hover:text-green-300'>create by shaiadul </p>
    </div> //copyright issues solve
  )
}

export default Navbar
