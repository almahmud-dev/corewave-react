import img1 from '../../src/assets/Images/Our_Projects/Project1.png'
import img2 from '../../src/assets/Images/Our_Projects/Project2.png'
import img3 from '../../src/assets/Images/Our_Projects/Project3.png'

const OurProjects = () => {
  return (
    <>
    <section className='pt-22.75'>
        <div className="container">
            <h3>our latest project</h3>
            <p>
                <span>Mobile App</span>
                <span>Web Development</span>
                <span>UI/UX Design</span>
                <span>Graphic Design</span>
                <span>Motion Graphic</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className=" rounded-lg overflow-hidden">
                    <img src={img1} alt="Project 1" className="w-full h-full object-cover" />
                </div>
                <div className=" rounded-lg overflow-hidden">
                    <img src={img2} alt="Project 2" className="w-full h-full object-cover" />
                </div>
                <div className=" rounded-lg overflow-hidden">
                    <img src={img3} alt="Project 3" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurProjects