export default function Body() {
    return (
        <div className='flex flex-col justify-center items-center pt-24 pb-20 bg-blue-500'>
            <h1 className="text-6xl font-bold">Piyush Hole</h1>
            <p className="text-2xl text-white">Software Engineer</p>
            <div className="flex flex-row mt-4 gap-2">
                <a href="http://www.linkedin.com/in/piyush-hole" target="_blank" rel="noopener noreferrer">
                    <button className="hover:text-white ease-in-out duration-200">LinkedIn</button>
                </a>
                <a href="https://github.com/piyushh-11" target="_blank" rel="noopener noreferrer">
                    <button className="hover:text-white ease-in-out duration-200">GitHub</button>
                </a>
            </div>
        </div>
    )
}
