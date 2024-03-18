import './App.css';
export const  Hero = () => {
    return(
        <div>
            <main className="hero container">
                <div className="hero_About">
                    <h1>YOUR FEET 
                          DESERVE
                          THE BEST</h1>

                   <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">

                   <button className='first-btn' >Shop Now</button>
                   <button className='second-btn' >Category</button>

                    </div>
                   <p className='Shopping'>Also Available On</p>
                   <div className="brand-icons">

                   <img src="/images/flipkart.png" alt="" />
                   <img src="/images/amazon.png" alt="" />

                   </div>
                </div>
                <div className="hero_images">
                <img src="/images/shoe_image.png" alt="" id='images'/>
                </div>
            </main>   
        </div>
    )
}