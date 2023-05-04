import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(){
    return (
        <h1 className={styles.backgroundcolor}>
            Hello, world!
            <Link href="/education">Home</Link>
        </h1>
    )
}