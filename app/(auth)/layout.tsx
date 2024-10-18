import AuthNav from "../../features/auth/components/authNav";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <AuthNav/>
                <div className="flex items-center flex-col justify-center pt-4 md:pt-14">
                {children}
                </div>
            </div>
        </main>
    );
}

export default AuthLayout;