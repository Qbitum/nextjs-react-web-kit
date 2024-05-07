import { Button, Dropdown } from 'flowbite-react';
import Image from 'next/image'
import type { ReactNode } from 'react';

export type OneColFullProps = {
  children?: ReactNode;
};

export function OneColFull({ children }: OneColFullProps) {
  return (
    <div className="h-full bg-image bg-cover flex" data-testid='oc-wrapper'>
      <div className='flex flex-col flex-1'>
        <div className=' bg-theme-primary flex items-center py-2 px-4 rounded-b-2xl'>
          <Image
            src="/logo.png"
            alt="PABC"
            width={40}
            height={20}
          />
          <div className=' text-white text-xl ml-8 font-bold flex-1'>
            Online Banking
          </div>
          <div className="flex items-center">
            <div className="flex text-white">
              <Button href="https://www.@qbitum/react-flat-ui.com/docs/components/button"
                size="xs"
                className=" bg-transparent border-0 hover:bg-transparent hover:text-theme-primaryDark border-r border-whitw"
              >
                Terms & Conditions
              </Button>
              <Button  href="https://www.@qbitum/react-flat-ui.com/docs/components/button"
                size="xs"
                className=" bg-transparent border-0 hover:bg-transparent hover:text-theme-primaryDark border-r border-white"
              >
                Contact Us
              </Button>
              <Button href="https://www.@qbitum/react-flat-ui.com/docs/components/button"
                size="xs"
                className=" bg-transparent border-0 hover:bg-transparent hover:text-theme-primaryDark border-r border-white"
              >
                Privacy Policy
              </Button>
              <Button href="https://www.@qbitum/react-flat-ui.com/docs/components/button"
                size="xs"
                className=" bg-transparent border-0 hover:bg-transparent hover:text-theme-primaryDark border-r border-white"
              >
                FAQs
              </Button>
            </div>
            <div className="flex items-center ml-8">
              <div className="text-xs  text-white mr-2">Change Language</div>
              <Dropdown
                label="EN"
                size="sm"
                placement="top"
                outline
                className="text-xs text-gray-800 font-bold hover:bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center flex-1'>
          <div className='text-xl w-[30rem] bg-white/80 rounded-3xl py-8 drop-shadow-xl'>
            <div className='mb-6 px-8'>
              Welcome to the Future of Online Banking with Seylan Bank PLC
            </div>
            <div className='text-xl font-bold'>
              <div className='mb-4 px-8'>Log in</div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OneColFull.defaultProps ={
  children:''
}
