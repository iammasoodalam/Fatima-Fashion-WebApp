import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import {
  Task,
  TaskActive,
  Cart,
  CartActive,
  Reports,
  ReportsActive,
  Profile,
  ProfileActive,
} from "./Icons";

export default function NavBar() {
  const [activeNav, setActiveNav] = useState(1);

  function changeNav(e) {
    setActiveNav(e.currentTarget.tabIndex);
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.navIcon} tabIndex="1" onClick={changeNav}>
        {activeNav == 1 ? <TaskActive active= {styles.active} /> : <Task />}
      </div>
      <div className={styles.navIcon} tabIndex="2" onClick={changeNav}>
        {activeNav == 2 ? <CartActive active= {styles.active} /> : <Cart />}
      </div>
      <div className={styles.navIcon} tabIndex="3" onClick={changeNav}>
        {activeNav == 3 ? <ReportsActive active= {styles.active} /> : <Reports />}
      </div>
      <div className={styles.navIcon} tabIndex="4" onClick={changeNav}>
        {activeNav == 4 ? <ProfileActive active= {styles.active} /> : <Profile />}
      </div>
    </div>
  );
}
