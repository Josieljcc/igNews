import styles from './styles.module.scss'
import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image height="30px" width="108px" src="/images/logo.svg" alt="logo" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
