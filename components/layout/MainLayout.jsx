import Link from 'next/link';
import { FlowComponent, FlowText } from './FlowComponent'
import Navbar from './Navbar';
import { useTranslations } from 'next-intl';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function MainLayout({ children }) {
  const t = useTranslations('IndexPage');
  
  return (
    <main className="flex flex-col min-h-screen">
      <div className='beta_m fixed bg-red-800 w-[50vw] py-2 z-50 items-center justify-center flex md:hidden'>BETA</div>
      <div className='beta fixed bg-red-800 w-[10vw] py-2 z-50 items-center justify-center hidden md:flex'>BETA</div>
      <Navbar />
      <section className='relative top-0 w-full px-10 flex-1'>
        <div className='relative max-w-[1400px] m-auto w-full'>
          <div className='absolute -z-10 -mt-10 leading-[70px] pt-48'>
            <FlowComponent text={t('word')} />
          </div>
          <div className='pt-2'>
            <FlowText className='font-bold' opacityStep={30} text={t('word')} />
            {children}
          </div>
        </div>
      </section>

      <section className='bg-deep_gray z-10 relative mt-14'>
        <div className='flex flex-col gap-12 justify-center items-center py-12'>
          <p className='font-lora text-lg opacity-25'>[ dev by deep ]</p>
          <ul className='flex gap-10'>
          <li><Link href='tg://resolve?domain=deep0D' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faTelegram} color={'#fff'} size={'3x'} /></Link></li>
          <li><Link href='whatsapp://send?phone=79689374217' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faWhatsapp} color={'#fff'} size={'3x'} /></Link></li>
          <li><Link href='mailto:mail@1deep1.com' className='hover:brightness-75 duration-75'><FontAwesomeIcon icon={faEnvelope} color={'#fff'} size={'3x'} /></Link></li>
          </ul>
        </div>
      </section>
    </main>
  )
}