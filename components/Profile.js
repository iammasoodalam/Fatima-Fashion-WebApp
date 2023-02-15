import Link from "next/link";
import styles from "../styles/Profile.module.scss";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <div className={styles.profilepic}>
        <img src={user.picture} alt={user.name} />
      </div>
      <h3 className={styles.userName}>{user.name}</h3>
      <div className={styles.userInfo}>
        <p>Email: {user.email}</p>
        <p className={styles.biodata}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa,
          debitis, veritatis ad sequi, necessitatibus blanditiis explicabo vero
          dicta voluptatem temporibus repudiandae qui quis ab? Hic assumenda
          unde inventore blanditiis ab eius odit alias doloribus rem laudantium
          et commodi quasi, modi temporibus quia maiores voluptate placeat
          minus. Esse perferendis voluptas quisquam reprehenderit. Adipisci,
          officiis eos. Illo, quod non! Aliquam iure eaque architecto earum?
        </p>
      </div>
      <Link href="/api/auth/logout" className={styles.login}>
        <div>Logout</div>
      </Link>
    </div>
  );
}
