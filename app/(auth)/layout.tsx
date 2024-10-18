import AuthNav from "./_components/authNav";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <AuthNav/>
                {children}
            </div>
        </main>
    );
}

export default AuthLayout;