const AuthLayout = ({children}:{
    children:React.ReactNode
}) => {
    return (
        <div className="flex justify-center items-center bg-zinc-800 h-full">
            {children}
        </div>
    );
}

export default AuthLayout;