import project1 from './images/Designer.jpeg';
import project2 from './images/Designer2.jpeg';
import project3 from './images/Designer3.jpeg';

export default function Projects() {
    return (
        <div className="pl-32 pr-32 pt-10 pb-10 bg-purple-400">
            <h1 className='text-3xl font-bold'>Projects</h1>
            <div className="flex justify-between items-center gap-20 mt-4">
                <div className='border rounded-md p-4 w-96'>
                    <img src={project1} alt="" className='w-80 rounded'/>
                    <h1 className='text-xl font-bold text-white mt-4'>NFL Discord Bot</h1>
                    <p>Developed a dynamic Python web scraper integrated into a Discord bot to provide real-time NFL statistics and game data, enhancing user engagement and information retrieval.</p>
                </div>
                <div className='border rounded-md p-4 w-96'>
                    <img src={project2} alt="" className='w-80 rounded'/>
                    <h1 className='text-xl font-bold text-white mt-4'>AggieStops</h1>
                    <p>Processed JSON data from user-uploaded student schedules in PDF format to generate personalized study space recommendations and developed a user-friendly interface using React.</p>
                </div>
                <div className='border rounded-md p-4 w-96'>
                    <img src={project3} alt="" className='w-80 rounded'/>
                    <h1 className='text-xl font-bold text-white mt-4'>Astrid: Safety App</h1>
                    <p>Led the development of the Astrid app, integrating Python web scraping and Swift for real-time news updates and emergency help guides, with offline-accessible interface to enhance public safety.</p>
                </div>
            </div>
        </div>
    )
}
