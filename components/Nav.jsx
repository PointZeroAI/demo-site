import Link from 'next/link';

const Nav = () => {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/demo">CONTACTS</Link>
                    </li>
                    <li>
                        <Link href="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link href="/register">REGISTER</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;