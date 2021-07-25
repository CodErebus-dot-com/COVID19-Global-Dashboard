import React from 'react'
import './LandingPage.css'

import protect_1 from './images/protect-1.png'
import protect_2 from './images/protect-2.png'
import protect_3 from './images/protect-3.png'
import protect_4 from './images/protect-4.png'
import protect_5 from './images/protect-5.png'
import protect_6 from './images/protect-6.png'
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
import main_wash from './images/main-wash-img.png'
import fever from './icons/Fever.png'
import lung_infected from './icons/Lung-Infected.png'
import flu from './icons/Flu.png'
import covid19 from './icons/covid19.png'
const LandingPage = () => {
    return (
        <>
            <header>

            <a href="#" className="logo">c<span><img src={covid19} alt="" style={{height: "2rem"}}/></span>VID - 19</a>

            <div id="menu" className="fas fa-bars"><i class="fas fa-bars"></i></div>

            <nav className="navbar">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#protect">protect</a></li>
                    <li><a href="#symtoms">symtoms</a></li>
                    <li><a href="#prevent">prevent</a></li>
                    <li><a href="#handwash">handwash</a></li>
                    <li><a href="#spread">spread</a></li>
                    <li><a className="active" href="/global_dashboard">global dashboard</a></li>
                </ul>
            </nav>

            </header>

            <section className="home" id="home">
                <div className="image"></div>
                <div className="content">
                    <h2>Prevention from coronavirus</h2>
                    <p>stay home, stay safe</p>
                    <a href="#protect" className="btn">protect now</a>
                </div>
            </section>


            <section className="protect" id="protect">
                <h1 className="heading">take steps to <span>protect</span> yourself</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={protect_1} alt=""/>
                        <h3>Wear A Face Mask</h3>
                        <p>Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives.</p>
                    </div>

                    <div className="box">
                        <img src={protect_4} alt=""/>
                        <h3>Sanitize Your Place</h3>
                        <p>While outside in public, make sure that you maintain a minimum distance of 6 feet with people around you.</p>
                    </div>

                    <div className="box">
                        <img src={protect_2} alt=""/>
                        <h3>Wash Your Hands</h3>
                        <p>You should wash your hands with soap and water for at least 20 seconds or use a hand sanitizer with at least 60% alcohol to clean hands.</p>
                    </div>

                    <div className="box">
                        <img src={protect_5} alt=""/>
                        <h3>Use Napkin</h3>
                        <p>While outside in public, make sure that you maintain a minimum distance of 6 feet with people around you.</p>
                    </div>

                    <div className="box">
                        <img src={protect_3} alt=""/>
                        <h3>Avoid Close Contact</h3>
                        <p>While outside in public, make sure that you maintain a minimum distance of 6 feet with people around you.</p>
                    </div>

                    <div className="box">
                        <img src={protect_6} alt=""/>
                        <h3>Don't Touch Face</h3>
                        <p>While outside in public, make sure that you maintain a minimum distance of 6 feet with people around you.</p>
                    </div>
                </div>
            </section>
            

            <section className="symtoms" id="symtoms">
                <div className="image">
                    <img src={symptoms} alt=""/>
                </div>
                
                <div className="content">
                    <h1 className="heading">What Are The Main <span>Symptoms?</span></h1>
                    <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                    <div className="box-container">
                        <ul> 
                            <div className="box">
                                <img src={lung_infected} alt=""/>
                                <span>Serious</span>
                                <li>Chest pain</li>
                                <li>Dypsnoea</li>
                                <li>Loss of speech or movement</li>
                            </div>

                            <div className="box">
                                <img src={flu} alt=""/>
                                <span>Less Common</span>
                                <li>Sore Throat</li>            
                                <li>Diarrhoea</li>
                                <li>Aches and Pains</li>
                            </div>

                            <div className="box">
                                <img src={fever} alt=""/>
                                <span>Most Common</span>
                                <li>fever</li>
                                <li>Tiredness</li>
                                <li>Dry Cough</li>
                            </div>
                        </ul>
                    </div>
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
                        <p>The internet is filled with information about covid19, many of it also wrong, causing panic among the people. Here are a few don'ts that you must try to avoid as musch as possible: </p>
                        <ul>
                            <li>Do Not go out in crowded places</li>
                            <li>Do Not Touch Your Face or Nose</li>
                            <li>Do Not believe everything on internet</li>
                            <li>Do Not travel unless necessary</li>
                            <li>Do Not seek alternative treatments</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="content">
                        <h1 className="heading">things <span>to do</span> during covid</h1>
                        <p>If you think you may have been exposed to COVID-19, contact your doctor or healthcare provider. If you feel like you have minor symptoms, then here are a few do's that you must abide by:</p>
                        <ul>
                            <li>Self isolate yourself and Stay home for 14 days</li>
                            <li>Sanitize the areas that you touch</li>
                            <li>Wear a Mask whenever in outdoors</li>
                            <li>Keep using a thermometer and oxymeter</li>
                            <li>Get rest and stay hydrated</li>
                        </ul>
                    </div>

                    <div className="image">
                        <img src={do_img} alt=""/>
                    </div>
                </div>
            </section>


            <section className="handwash" id="handwash">
                <h1 className="heading">how to <span>wash you hand</span> properly</h1>
                <div className="column">
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
                            <img src={handwash_5} alt=""/>
                            <h3>back of hand</h3>
                        </div>

                        <div className="box">
                            <span>4</span>
                            <img src={handwash_3} alt=""/>
                            <h3>Between Fingers</h3>
                        </div>

                        <div className="box">
                            <span>5</span>
                            <img src={handwash_4} alt=""/>
                            <h3>Base of thumbs</h3>
                        </div>

                        <div className="box">
                            <span>6</span>
                            <img src={handwash_6} alt=""/>
                            <h3>wrists</h3>
                        </div>
                    </div>

                    <div class="main-image">
                        <img src={main_wash} alt=""/>
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
                        <h3>about me</h3>
                        <p>I am an upcoming front-end developer (hopefully) and made this site to have some fun with React and some third-party libraries.</p>
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
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, India - 40008 </p>
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
