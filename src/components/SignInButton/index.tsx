import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signout } from 'next-auth/client'

export function SignInButton() {
  const [section] = useSession()
  console.log(section)
  return section ? (
    <button className={styles.button} type="button" onClick={() => signout()}>
      <FaGithub color="#04d361" />
      {section.user.name}
      <FiX />
    </button>
  ) : (
    <button
      className={styles.button}
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}
