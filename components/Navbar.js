import Link from "next/link";
import {useRouter} from "next/router";

export default function Navbar() {

    const { pathname } = useRouter()

    return (
        <nav>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </nav>
    )
}
