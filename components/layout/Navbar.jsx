import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import logo from '@/assets/logo.webp'
export const dynamic = "force-dynamic";

export default async function Navbar() {
  const locale = useLocale()
  const query = gql`
  query {
      menus(locale: "${locale}") {
        data {
          id
          attributes {
            title
            link
          }
        }
      }
    }
  `;

  const data = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5000 },
      },
    },
  });

  return (
    <section className='sticky top-0 bg-deep_gray z-10 px-10'>
      <div className='color_circle' />
      <nav className='justify-between items-center m-auto max-w-[1600px] py-6 hidden md:flex'>
        <Link href='./'><Image
          src={logo}
          alt='deep'
        /></Link>
        <div className='flex gap-24 items-center text-xl'>
          <ul className='flex gap-8'>
            {data.data.menus.data.map((menu) => (
              <li key={menu.id}><Link href={menu.attributes.link} className='opacity-80 hover:opacity-100 duration-75'>{menu.attributes.title}</Link></li>
            ))}
          </ul>
          <Link href='/pay' className='px-10 py-2 border-2 border-white rounded-xl hover:opacity-80 duration-75'>Заказать!</Link>
        </div>
      </nav>
      <Link href='./'><Image
        src={logo}
        alt='deep'
        className='m-auto block md:hidden py-4'
      /></Link>
    </section>
  );
}
