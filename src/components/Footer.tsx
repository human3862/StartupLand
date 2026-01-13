import { Header as HeaderType, Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './UI/Button'
import { Input } from './UI/Input'

interface FooterProps {
  data: HeaderType
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const { logo, logoName, navItems } = data
  const logoData = logo as Media
  return (
    <footer>
      <div className="text-white">
        <div className="bg-grey-light flex flex-col items-center gap-5 py-[clamp(40px,5vw,200px)]">
          <h3 className="text-[clamp(22px,5vw,36px)] font-semibold">
            Subscribe to get notified about update
          </h3>
          <p className="mb-[clamp(10px,3vw,24px)] text-gray-400">
            By subscribing with your mail, you will accept our privacy policy
          </p>
          <div className="flex gap-4">
            <Input placeholder="Enter your email" variant="secondary" />
            <Button label="Subscribe us" variant="secondary" />
          </div>
        </div>
        <div className="bg-grey-black flex items-center justify-between p-[clamp(10px,3vw,30px)] px-[clamp(20px,10vw,400px)]">
          <div className="flex items-center gap-4">
            {logoData?.url && (
              <Image src={logoData.url} alt={logoData.alt || 'Logo'} height={40} width={30} />
            )}
            <h2 className="text-[20px] font-bold">{logoName}</h2>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-8">
              {navItems?.map((item, index) => (
                <li key={index} className="hover:text-gray-400">
                  {item?.link ? (
                    <Link href={item.link}>{item.label}</Link>
                  ) : (
                    <Link href="">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
