import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
 
export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <div className={`deep_grid`}>
      <Link href='about' className='deep_grid__chart flex flex-col backdrop-blur-sm gap-10 justify-center items-start px-8 py-24 bg-deep_light bg-opacity-80 rounded-3xl col-span-2 font-lora hover:bg-deep_main duration-200 ease-in min-h-full'>
        <p className='text-3xl font-semibold deep_grid__textMain'>{t('box1_title')}</p>
        <p className='font-thin text-xl flex items-center justify-between gap-4'><span className='deep_grid__textSecond '>{t('box1_text')}</span><span className='deep_grid__textHide text-white text-7xl font-semibold align-start opacity-0 absolute'>{t('more')}</span>  <FontAwesomeIcon className='deep_grid__ico' icon={faCircleChevronRight} color={'#fff'} size={'2x'} /></p>
      </Link>
      <div className='bg-deep_light/40 rounded-3xl col-span-2'>
        {/* <div>
          <Image src={mac} alt='mac' />
        </div> */}
        {/* <p className='text-3xl font-semibold'>Веб разработка и не только 🔬</p> */}
        {/* <p className='font-thin text-xl flex items-center justify-between gap-4'>Проработка вашего заказа до самой глубины. <FontAwesomeIcon icon={faCircleChevronRight} color={'#fff'} size={'2x'} /></p> */}
      </div>
      <Link href='works' className='deep_grid__chart flex flex-col backdrop-blur-sm gap-10 justify-center items-start px-8 py-16 bg-deep_light bg-opacity-80 rounded-3xl font-lora hover:bg-deep_main duration-200 ease-in min-h-full'>
        <FontAwesomeIcon className='deep_grid__logo' icon={faLayerGroup} color={'#fff'} size={'4x'} />
        <div className='flex justify-between items-end w-full deep_grid__square'>
          <p className='text-3xl font-semibold deep_grid__page'>{t('link1')}</p>
          <FontAwesomeIcon icon={faCircleChevronRight} color={'#fff'} size={'2x'} />
        </div>
      </Link>
      <div className='bg-deep_light/40 rounded-3xl'></div>
      <div className='bg-deep_light/40 rounded-3xl'></div>
      <div className='bg-deep_light/40 rounded-3xl'></div>
    </div>
  )
}