import React from 'react'
import './LandingPage.css'
// import {do-img, dont-img, handwash-1, handwash-2, handwash-3, handwash-4, handwash-5, handwash-6, home-img, map, protect-1, protect-2, protect-3, scroll-img, symptoms-img} from './images'
import home from './images/home.png'
import protect_1 from './images/protect-1.png'
import protect_2 from './images/protect-2.png'
import protect_3 from './images/protect-3.png'
import symptoms from './images/symptoms.png'
import do_img from './images/do.png'
import dont_img from './images/dont.png'
import scroll from './images/scroll.png'
import handwash_1 from './images/handwash-1.png'
import handwash_2 from './images/handwash-2.png'
import handwash_3 from './images/handwash-3.png'
import handwash_4 from './images/handwash-4.png'
import handwash_5 from './images/handwash-5.png'
import handwash_6 from './images/handwash-6.png'
// import dont from './images/dont.png'





const LandingPage = () => {
    return (
        <>
            {/* <h1>Landing Page</h1>   
            <div className="container">
                <header>
                    <span>UR COVID-19 App</span>
                    <nav>
                        <ul>
                            <li><a href="/global_dashboard">Global Dashboard</a></li>
                        </ul>
                    </nav>
                </header>
            </div>  */}

            <header>

            <a href="#" className="logo">c<span className="fas fa-virus"></span>ovid-19</a>

            <div id="menu" className="fas fa-bars"></div>

            <nav className="navbar">
                <ul>
                    <li><a className="active" href="#home">home</a></li>
                    <li><a href="#protect">protect</a></li>
                    <li><a href="#symtoms">symtoms</a></li>
                    <li><a href="#prevent">prevent</a></li>
                    <li><a href="#handwash">handwash</a></li>
                    <li><a href="#spread">spread</a></li>
                    <li><a href="/global_dashboard">global dashboard</a></li>
                </ul>
            </nav>

            </header>

            <section className="home" id="home">

                <div className="content">

                    <span>Covid-19</span>
                    <h3>stay safe, stay home</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores quibusdam ad sapiente quod harum recusandae esse voluptates repellat tempore.</p>
                    <a href="#" className="btn">protect now</a>

                </div>

                <div className="image">
                    <img src={home} alt="" />
                </div>

            </section>

            <section className="protect" id="protect">

                <h1 className="heading">take steps to <span>protect</span> yourself</h1>

                <div className="box-container">

                    <div className="box">
                        <img src={protect_1} alt=""/>
                        <h3>Wear A Face Mask</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                        <a href="#" className="btn">learn more</a>
                    </div>

                    <div className="box">
                        <img src={protect_2} alt=""/>
                        <h3>Wash Your Hands</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                        <a href="#" className="btn">learn more</a>
                    </div>

                    <div className="box">
                        <img src={protect_3} alt=""/>
                        <h3>Avoid Close Contact</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
                        <a href="#" className="btn">learn more</a>
                    </div>

                </div>

            </section>
            

            <section className="symtoms" id="symtoms">

                <div className="image">
                    <img src={symptoms} alt=""/>
                </div>
                
                <div className="content">
                    <h1 className="heading">What Are The Main <span>Symptoms?</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos ex, magnam odit quaerat labore amet! Numquam obcaecati nobis possimus.</p>
                    <ul>
                        <div className="one">
                            <li>fever</li>
                            <li>Tiredness</li>
                            <li>Dry Cough</li>
                        </div>
                        <div className="two">
                            <li>Sore Throat</li>            
                            <li>Aches and Pains</li>
                            <li>Shortness of Breath</li>
                        </div>
                    </ul>
                    <a href="#" className="btn">know more</a>
                </div>

                

            </section>


            <section className="prevent" id="prevent">

                <div className="row">

                    <div className="image">
                        <img src={dont_img} alt=""/>
                    </div>

                    <div className="content">
                        <h1 className="heading">things <span>not to do</span> during covid</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
                        <ul>
                            <li>Do Not Share Eating</li>
                            <li>Do Not Touch Your Face or Nose</li>
                            <li>Do Not Contact Sick People</li>
                        </ul>
                    </div>

                </div>

                <div className="row">

                    <div className="content">
                        <h1 className="heading">things <span>to do</span> during covid</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
                        <ul>
                            <li>Wash Your Hands For 20 sec</li>
                            <li>Wear a Mask if Available</li>
                            <li>Seek Medical Care Regularly</li>
                        </ul>
                    </div>

                    <div className="image">
                        <img src={do_img} alt=""/>
                    </div>

                </div>

            </section>


            <section className="handwash" id="handwash">

                <h1 className="heading">how to <span>wash you hand</span> properly</h1>

                <div className="box-container">

                    <div className="box">
                        <span>1</span>
                        <img src={handwash_1} alt=""/>
                        <h3>Apply Soap on Hand</h3>
                    </div>

                    <div className="box">
                        <span>2</span>
                        <img src={handwash_2} alt=""/>
                        <h3>Palm to Palm</h3>
                    </div>

                    <div className="box">
                        <span>3</span>
                        <img src={handwash_3} alt=""/>
                        <h3>Between Fingers</h3>
                    </div>

                    <div className="box">
                        <span>4</span>
                        <img src={handwash_4} alt=""/>
                        <h3>Back of The Hands</h3>
                    </div>

                    <div className="box">
                        <span>5</span>
                        <img src={handwash_5} alt=""/>
                        <h3>clean with water</h3>
                    </div>

                    <div className="box">
                        <span>6</span>
                        <img src={handwash_6} alt=""/>
                        <h3>Use Towel to Dry</h3>
                    </div>

                </div>

            </section>


            <section className="spread" id="spread">

                <h1 className="heading">how Covid-19 <span>spreads</span> over the world</h1>

                <div className="image"></div>

            </section>

            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>about us</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum explicabo impedit aperiam non quod. Velit sunt voluptatem nemo beatae.</p>
                    </div>

                    <div className="box">
                        <h3>locations</h3>
                        <a href="#">india</a>
                        <a href="#">USA</a>
                        <a href="#">russia</a>
                        <a href="#">japan</a>
                        <a href="#">france</a>
                        <a href="#">africa</a>
                        <a href="#">spain</a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#">home</a>
                        <a href="#">protect</a>
                        <a href="#">symtoms</a>
                        <a href="#">prevent</a>
                        <a href="#">handwash</a>
                        <a href="#">spread</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <p> <i className="fas fa-phone"></i> +123-456-7890. </p>
                        <p> <i className="fas fa-envelope"></i> example@gmail.com </p>
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, indai - 400104. </p>
                        <div className="share">
                            <a href="#" className="fab fa-youtube"></a>
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>

                </div>

                <h1 className="credit"> &copy; 2021, All rights reserved! </h1>

            </section>

            <a href="#home" className="scroll-top">
                <img src={scroll} alt=""/>
            </a>

        </>
    )
}

export default LandingPage
