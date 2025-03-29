import { Loved_by_the_King, Montserrat, Tektur } from 'next/font/google'
import './Carousel.css'

const test=Tektur({ weight: "400", subsets: ["latin"]})
export const Carousel=()=>{
    return(
        <>
        <div className='carouselWrap'>
            {/* <video className="introVideo" src="assets/videos/royce4_5983463401282607544.mp4" autoPlay loop muted></video> */}
            <div id="main">
                <h1 className={`${test.className} text-5xl line1 title` }>One Wheel</h1>
                <h1 className={`${test.className} text-5xl line2 title`}>Endless Luxury</h1>
                <h2 className={`${test.className} text-2xl line3 title`}>Steer Your Dreams</h2>
            </div>
        </div>
        <div></div>
        </>
    )
}