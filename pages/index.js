import { useUser } from "@auth0/nextjs-auth0/client";
import Logo from "../components/Logo";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {!user && !isLoading && (
        <div>
          <div className={styles.banner}>
            <Logo />
          </div>
          <p className={styles.motto}>
            Your own personal area to manage your customers and orders for your
            boutique
          </p>
          <Link href="/api/auth/login" className={styles.login}>
            <div >Get Started</div>
          </Link>
        </div>
      )}

      {user && (
        <div>
          <Header />
          <NavBar />
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <div className={styles.login}>
            <Link href="/api/auth/logout">Logout</Link>
          </div>
        </div>
      )}
    </>
  );
}
