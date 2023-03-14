import { useSession, signIn } from "next-auth/react";
import Link from "next/link";


const Navigation = () => {
    const { data: session } = useSession();
    const menuItems = [
        {href: '/', label: 'Home'},
        {href: '/features', label: 'Features'},
        {href: '/reactions', label: 'Role Reactions'}
    ];
    return (
        <>
            <nav className="bg-primary fixed w-full h-20 opacity-90">
                <div className="flex p-5 h-full align-middle">
                    <div className="flex-none p-2">
                        <span className="text-xl"><a href="/">Roach</a></span>
                    </div>
                    <div className="grow flex gap-3 justify-center">
                        {menuItems.map((menuItem) => (
                            <Link className="flex-none p-2 font-semibold rounded-xl text-black hover:bg-orange-500 hover:white" 
                                href={menuItem.href}>
                                {menuItem.label}
                            </Link>
                        ))}
                    </div>
                    { session ? (
                        <div className="flex-none p-2 font-semibold">
                            <Link className="p-2" href="/account">{session.user?.name}</Link>
                        </div>
                    ) : (
                        <div className="flex-none ">
                            <button className="bg-transparent hover:bg-orange-600  font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded" onClick={() => signIn()}>Sign In Using Discord</button>
                        </div>
                    )}
                </div>
            </nav>
            <div className="h-20"></div>
        </>
    )
}

export default Navigation;