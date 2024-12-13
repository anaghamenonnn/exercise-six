import Link from "next/link";
import styles from "../../styles/Header.module.css";
export default function Header ({ isLoggedIn, logoutUserFunction }){
 
    return(
        <header className={styles.navWrapper}>
            <div>
                <div> 
                    <h1>Users and Auth</h1>
                </div>

                <nav> 
                    <ul className={styles.listWrapper}>
                        {isLoggedIn && (
                            <>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <a onClick={logoutUserFunction}>Log Out</a>
                                </li>
                            </>
                        )}
                        
                        {!isLoggedIn && (
                            <>
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                                <li>
                                    <Link href="/createUser">Create User</Link>
                                    </li>
                            </>
                        )}

                    </ul>
                </nav>

            </div>

        </header>
    );
}