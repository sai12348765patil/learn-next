import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>THis Is First Home Page</h1>
            <div className={styles.secounddiv}>
                <div>
                    <Link
                    href={"/two/1"}
                    >
                    <h2>2nd</h2>
                    </Link>
                </div>
                <div>
                <Link
                    href={"/two/2"}
                    >
                    <h3>3rd ddd</h3>
                    </Link>

                </div>
            </div>
        </div>
    );
}
