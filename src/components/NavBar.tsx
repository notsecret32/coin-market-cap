import { IoBriefcaseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ReactComponent as Logo } from 'src/assets/svg/logo.svg'
import { Button } from './Button'

export const NavBar = () => {
  return (
    <header className="flex flex-row justify-between items-center mx-4">
      {/* Logo */}
      <Logo />

      {/* Top Coins */}
      <div className="hidden sm:flex flex-row gap-4 md:gap-8 lg:gap-16 xl:gap-24">
        <div className="flex flex-row items-end gap-1">
          <h1 className="font-inter font-medium text-sm text-[#85879f]">BTC</h1>
          <h2>$65.48k</h2>
        </div>
        <div className="flex flex-row items-end gap-1">
          <h1 className="font-inter font-medium text-sm text-[#85879f]">ETH</h1>
          <h2>$3.48K</h2>
        </div>
        <div className="flex flex-row items-end gap-1">
          <h1 className="font-inter font-medium text-sm text-[#85879f]">BNB</h1>
          <h2>$603.31</h2>
        </div>
      </div>

      {/* Burger */}
      <div className="block sm:hidden">
        <Button>
          <RxHamburgerMenu size={24} />
        </Button>
      </div>

      {/* Briefcase */}
      <div className="hidden sm:block">
        <Button>
          <IoBriefcaseOutline size={24} />
        </Button>
      </div>
    </header>
  )
}
