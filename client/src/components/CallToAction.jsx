import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col items-center">
            <h2 className='text-4xl m-1'>
                Want to learn more about Bloging?
            </h2>
            <p className='text-gray-500 my-4 text-lg'>
                Checkout these resources...
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none w-[60%] '>
                <a href="https://www.freecodecamp.org/news/technical-blogging-basics/" target='_blank' rel='noopener noreferrer' className='text-xl'>
                    Start Reading
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1 ml-[20%]">
            <img src="https://s12.gifyu.com/images/SYdPu.gif"  className='rounded-full blog-pic h-[410px]' />
        </div>
    </div>
  )
}