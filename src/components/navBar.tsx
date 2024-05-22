const NavBar = () => {
    return (
        // nav bar
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img src="" alt="Logo"/>
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-navyBlue">Skills</a>
                    <a href="#" className="hover:text-navyBlue">Projects</a>
                    <a href="#" className="hover:text-navyBlue">Experience</a>
                    <a href="#" className="hover:text-navyBlue">Blog</a>
                    <a href="#" className="hover:text-navyBlue">Contact</a>
                </div>

                <div className="a bg-darkBlue px-8 py-2 text-white rounded hover:brightness-200 transition duration-200 ease-in-out">Get CV</div>
            </div>
        </nav>
    )
}

export default NavBar;