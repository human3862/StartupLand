import React from 'react'
import type { Header as HeaderType, Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './UI/Button'

interface HeaderProps {
  data: HeaderType
}
export const Header: React.FC<HeaderProps> = ({ data }) => {
  const { logo, logoName, navItems } = data
  const logoData = logo as Media
  return (
    <header className="mb-[clamp(35px,6vw,120px)] px-[clamp(10px,8vw,250px)] py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3">
            {logoData?.url && (
              <Image src={logoData.url} alt={logoData.alt || 'Logo'} height={40} width={30} />
            )}
            <h2 className="font-bold">{logoName}</h2>
          </div>
          <nav>
            <ul className="flex items-center gap-7">
              {navItems?.map((item, index) => (
                <li key={index} className="hover:text-gray-500">
                  {item?.link ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    <Link href="">{item.label}</Link>
                  )}
                </li>
              ))}
              <Image src="/search.png" alt="Поиск" height={20} width={20} />
            </ul>
          </nav>
        </div>

        <div className="flex gap-8">
          <Link href="/login" className="flex items-center gap-4">
            <Image src="/lock.png" alt="Войти" width={18} height={23} />
            Login
          </Link>
          <Button label="Get Started" variant="ternary" />
        </div>
      </div>
    </header>
  )
}
