import myImage from './images/DSCF0080.jpg';

export default function About() {
  return (
    <div className="flex justify-center items-center pl-32 pr-32 pt-10 pb-10 gap-16 bg-green-400">
        <img src={myImage} alt="" className='h-80 rounded'/>
        <div className="flex flex-col justify-start">
            <h2 className='text-3xl font-bold'>Hello, I'm Piyush 👋</h2>
            <h3 className='text-xl text-white'>CS Honors + Math @ Texas A&M</h3>
            <p className='text-lg mt-4'>Hi everyone, I'm Piyush, a sophomore at Texas A&M University driven to shape the future of finance with technology. While Quantitative Finance is my core focus, I believe a powerful combination of software engineering and Artificial Intelligence/ Machine Learning is essential. This fusion excites me as it unlocks a world of possibilities: building robust models, automating complex tasks with intelligence, and crafting trading algorithms that can learn and adapt within the ever-evolving market landscape.</p>
        </div>
    </div>
  )
}
