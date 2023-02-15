import styles from './Navbar.module.css'
import { ActiveLink } from "./ActiveLink";

interface MenuI {
    text: string,
    href: string,
    id: number
}

const menuItems: MenuI[] = [
    {
        text: 'Home',
        href: '/',
        id: 1
    },
    {
        text: 'About',
        href: '/about',
        id: 2
    },
    {
        text: 'Contact',
        href: '/contact',
        id: 3
    },
    {
        text: 'Pricing',
        href: '/pricing',
        id: 4
    },
];
export const Navbar = () => {
  return (
      <nav className={ styles['menu-container'] }>
          {
              renderMenu()
          }
      </nav>
  )
}

const renderMenu = () => {
  return menuItems.map(item => {
     return <ActiveLink key={ item.id } text={ item.text } href={ item.href }/>
  });
}