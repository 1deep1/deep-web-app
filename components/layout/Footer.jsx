import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
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
  )
}