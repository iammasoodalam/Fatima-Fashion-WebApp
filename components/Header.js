import styles from "../styles/header.module.scss";
import { useState } from "react";

const initialValues = {
  searchText: "",
};

export default function Header() {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  return (
    <div className={styles.header}>
      <input
        type="text"
        name="searchText"
        aria-label="search"
        className={styles.searchBar}
        value={values.searchText}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  )
}