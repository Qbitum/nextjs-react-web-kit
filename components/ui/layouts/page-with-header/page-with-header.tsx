import type { ReactNode } from 'react';
import Image from 'next/image'
import { Button } from 'flowbite-react';

export type PageWithHeaderProps = {
  children?: ReactNode;
  logOutEvent?:(e: any) => void
};

export function PageWithHeader({ children , logOutEvent}: PageWithHeaderProps) {
 
  const handleBtnClick =  (e:any) => {
      if(logOutEvent) {
          logOutEvent.call(e,null);
      }
  }

  return (
      <div className="h-full bg-cover flex">
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
              <div className="flex items-center ml-8">
                <Button
                    size="sm"
                    outline
                    className="text-xs text-gray-800 font-bold hover:bg-gray-100"
                    onClick={(e:any) => handleBtnClick(e)}
                >
                  Log Out
                </Button>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center flex-1'>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

PageWithHeader.defaultProps = {
    children:'',
    logOutEvent:(e:any) => {
      /* eslint-disable no-console */
        console.warn('PageWithHeader:logOutEvent -> not implemented',e);
    }
}