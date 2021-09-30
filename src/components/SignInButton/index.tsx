import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button className={styles.button} type="button">
      <FaGithub color="#04d361" />
      Nome do Usuário
      <FiX />
    </button>
  ) : (
    <button className={styles.button} type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}
