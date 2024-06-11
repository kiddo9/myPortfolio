
import { Link } from "react-router-dom";


function More() {

    const Projects = [
        {
            id: 1,
            name: 'Luxary Hotel. Developed with Reactjs and Tailwinds',
            img: '/luxuray.png',
            link: 'https://hotel-booking-ecru.vercel.app/'
        },
        {
            id: 2,
            name: 'Resturant. Developed with Reactjs and Tailwinds',
            img: '/Resturant.png',
            link: 'https://restaurant-chi-two.vercel.app/'
        },
        {
            id: 3,
            name: 'Marina Havan. Developed with Reactjs and Tailwinds',
            img: '/hotel.png',
            link: 'https://m-hotel-beryl.vercel.app/'
        },
        {
            id: 4,
            name: 'School project. Developed with Reactjs and Tailwinds',
            img: '/iuo.png',
            link: 'https://form-project-eight.vercel.app/'
        },
        {
          id: 4,
          name: 'full stack Laravel(PHP) E-commerce project. Developed with Laravel, php, Tailwinds, and javascript',
          img: '/lara.jpg',
          link: 'http://paschalecomm2.000.pe'
      }
    ]



  return (
    <div className="bg-[#171717] text-[#fff] lg:px-20 xl:px-40 2xl:px-64">
                   <nav className="flex items-center justify-between pt-3 mx-3 mb-5">
          <h2 className="text-xl font-semibold">Paschal Elechi</h2>

        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg></Link>  

          </nav>

          <div className="flex flex-col gap-4 px-4 md:grid md:grid-cols-2">
           {Projects.map((project, index) => (
        <div className="bg-[#212121] px-2 py-3" key={index}>
         <img src={project.img} className="relative object-cover" alt="" />
         <h2 className="text-xl font-medium text-center">{project.name} </h2>
        <a href={project.link} className="bg-[#27AE60] px-8 py-1 rounded-lg mt-6" >Visit</a>
          
        </div>
        
      ))} 
          </div>
      
    </div>
  )
}

export default More
