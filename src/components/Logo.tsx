const Logo = () => {
    return (
        <div className="flex-grow-0 flex-shrink-0 w-full h-[32px] relative hidden md:block">
            <div className="flex justify-center items-start absolute left-0 top-0 gap-0.5">
            <img src="/chadLogo.svg" />
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#20496c]">
                Chad
            </p>
            </div>
        </div>
    )
}

export default Logo