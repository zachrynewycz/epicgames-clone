function Footer() {
    const FOOTER_LINKS = [
        "Support-A-Creator",
        "Online Services",
        "Careers",
        "Company",
        "Distribute on Epic Games",
        "Store EULA",
        "Fanart Policy",
    ];

    return (
        <footer className="bg-[#202020] py-8 px-12">
            <div className="max-w-lg">
                <h2 className="text-[#CCCCCC] font-bold opacity-40">Resources</h2>

                <ul className="grid md:grid-cols-2">
                    {FOOTER_LINKS.map((link, idx) => (
                        <li key={idx} className="text-[#e7e7e7] ">
                            {link}
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="opacity-40 mt-7 mb-10" />

            <>
                <p className="text-[#CCCCCC] text-xs mb-5">
                    © 2023, Made by Zach. This is a clone of the epic games store made for fun
                </p>
                <ul className="flex gap-5 text-[#CCCCCC] text-xs">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Store Refund Policy</li>
                </ul>
            </>
        </footer>
    );
}

export default Footer;
