import Link from "next/Link"
import styles from "../../styles/Header.module.css";

export default function Header (){
 
    return(
        <header className={styles.headerWrapper}>
            <div>
                <div> 
                    <h1>Users and Auth</h1>
                </div>

                <nav> 
                    <ul>
                        <li> 
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                        <Link href="/"login>Login</Link>
                        </li>
                        <li>
                        <Link href="/createUser">Create User</Link>
                        </li>
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                    </ul>
                    
                
                </nav>

            </div>

        </header>
    );
}