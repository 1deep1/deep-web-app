import { FlowComponent, FlowText } from './FlowComponent'
import Navbar from './Navbar';
import { useTranslations } from 'next-intl';
import Footer from './Footer';

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
      <Footer/>
    </main>
  )
}