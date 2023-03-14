import { useSession, signOut } from "next-auth/react";
import Navigation from "../../components/navigation";
import Link from "next/link";


const Account = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        );
    } else {
        return (
            <>
                <div className="flex"> 
                    You have been signed out
                </div>
                <div className="flex">
                    <Link href="/">Return Home</Link>
                </div>
            </>
        )
    }
}

export default Account;