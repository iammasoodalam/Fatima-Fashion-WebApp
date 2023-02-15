import { useUser } from "@auth0/nextjs-auth0/client";
import Logo from "../components/Logo";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useState } from "react";
import Tasks from "../components/tasks";
import Profile from "../components/Profile";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [activeNav, setActiveNav] = useState(1);

  function changeNav(e) {
    setActiveNav(e.currentTarget.tabIndex);
  }

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
            <div>Get Started</div>
          </Link>
        </div>
      )}

      {user && (
        <div className={styles.main}>
          <Header />
          {activeNav == 4 && <Profile />}
          {activeNav === 2 && <Tasks />}
          <NavBar activeNav={activeNav} changeNav={changeNav} />
        </div>
      )}
    </>
  );
}
