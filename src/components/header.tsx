import Images from "next/image";

const Header = () => {
    return (
        <header className="px-[30px] py-[40px] flex items-center justify-between sticky top-0 z-10 bg-white">
            <Images
                src="/images/svg/logo.svg"
                alt="logo"
                width={162}
                height={35}
                className="min-w-[162px]"
            />
            <div>
                <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.625 11.252H39.375M5.625 22.502H39.375M5.625 33.752H39.375"
                        stroke="black"
                        strokeWidth="3.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </header>
    );
};

export default Header;
