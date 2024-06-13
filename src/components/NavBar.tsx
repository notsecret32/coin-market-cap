import { IoBriefcaseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useGetCryptoCurrenciesListQuery } from 'src/api/crypto-currencies-list-api'
import { ReactComponent as Logo } from 'src/assets/svg/logo.svg'
import { Button } from './Button'
import { PopularCryptoCurrency } from './PopularCryptoCurrency'

export const NavBar = () => {
  const { data } = useGetCryptoCurrenciesListQuery({
    limit: 3,
  })

  return (
    <header className="flex flex-row justify-between items-center mx-4">
      {/* Logo */}
      <Logo />

      {/* Top Coins */}
      <div className="hidden sm:flex flex-row gap-4 md:gap-8 lg:gap-16 xl:gap-24">
        {data?.map((coin) => (
          <PopularCryptoCurrency key={coin.name} {...coin} />
        ))}
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
