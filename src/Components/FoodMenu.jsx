import React from 'react'
import './FoodMenu.css'
import { RiCupFill } from "react-icons/ri";
import { MdLunchDining } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";

// import image from assets
import menu1 from '../assets/menu-1.jpg'
import menu2 from '../assets/menu-2.jpg'
import menu3 from '../assets/menu-3.jpg'
import menu4 from '../assets/menu-4.jpg'
import menu5 from '../assets/menu-5.jpg'
import menu6 from '../assets/menu-6.jpg'
import menu7 from '../assets/menu-7.jpg'
import menu8 from '../assets/menu-8.jpg'
const FoodMenu = () => {
  return (
    <div className='container mt-5 py-5' data-aos="fade-up">
        <div class="menu-header">
           <span class="line"></span>
           <h2 class="title">Food Menu</h2>
           <span class="line"></span>
        </div>
        <h1 className='text-center'><b>Most Popular Items</b></h1>
        <div className='text-center Food-flex'>
            <div className='mini-flex'>
                <RiCupFill className='icon'/>
                <p className='breakfast'>Popular <br /> <span className='break'><b>Breakfast</b></span></p>
            </div>
            <div className='mini-flex'>
                <MdLunchDining className='icon'/>
                <p className='breakfast'>Popular <br /> <span className='break'><b>Breakfast</b></span></p>
            </div>
            <div className='mini-flex'>
                <PiForkKnifeFill className='icon'/>
                <p className='breakfast'>Popular <br /> <span className='break'><b>Breakfast</b></span></p>
            </div>
        </div>


        <div className='menu-flex'>
            <div>
                <div  className='menu-flex-1'>
                    <div className='menu-flex-2'>
                       <img src={menu1} alt="menu1" className='img-fluid' />
                        <div>
                          <div className='menu-none'>
                            <h6 className='bold'><b>Chicken Burger</b></h6>
                            <p className='none'><b>$115</b></p>
                          </div>
                          <span className='linee'></span>
                          <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                        <button className='price'>Price:: $12.99</button>
                        <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div  className='menu-flex-1'>
                    <div className='menu-flex-2'>
                       <img src={menu2} alt="menu2" className='img-fluid' />
                        <div>
                          <div className='menu-none'>
                          <h6 className='bold'><b>Chicken Fried Steak</b></h6>
                          <p className='none'><b>$115</b></p> 
                          </div>
                          <span className='linee'></span>
                          <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div className='menu-flex-1'>
                    <div className='menu-flex-2'>
                        <img src={menu3} alt="menu3" className='img-fluid' />
                        <div>
                        <div className='menu-none'>
                            <h6 className='bold'><b>Gril led Chicken Sandwich</b></h6>
                            <p className='none'><b>$115</b></p>
                        </div>
                        <span className='linee'></span>
                        <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div className='menu-flex-1'>
                    <div className='menu-flex-2'>
                        <img src={menu4} alt="menu4" className='img-fluid' />
                        <div>
                        <div className='menu-none'>
                        <h6 className='bold'><b>Mushroom Risotto</b></h6>
                        <p className='none'><b>$115</b></p>
                        </div>
                        <span className='linee'></span>
                        <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div  className='menu-flex-1'>
                    <div className='menu-flex-2'>
                       <img src={menu5} alt="menu5" className='img-fluid' />
                        <div>
                          <div className='menu-none'>
                            <h6 className='bold'><b>Chicken Burger</b></h6>
                            <p className='none'><b>$115</b></p>
                          </div>
                          <span className='linee'></span>
                          <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div  className='menu-flex-1'>
                    <div className='menu-flex-2'>
                       <img src={menu6} alt="menu2" className='img-fluid' />
                        <div>
                          <div className='menu-none'>
                          <h6 className='bold'><b>Chicken Fried Steak</b></h6>
                          <p className='none'><b>$115</b></p>
                          </div>
                          <span className='linee'></span>
                          <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div className='menu-flex-1'>
                    <div className='menu-flex-2'>
                        <img src={menu7} alt="menu3" className='img-fluid' />
                        <div>
                        <div className='menu-none'>
                        <h6 className='bold'><b>Gril led Chicken </b></h6>
                        <p className='none'><b>$115</b></p>
                        </div>
                        <span className='linee'></span>
                        <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
                <div className='menu-flex-1'>
                    <div className='menu-flex-2'>
                        <img src={menu8} alt="menu4" className='img-fluid' />
                        <div>
                        <div className='menu-none'>
                        <h6 className='bold'><b>Mushroom Risotto</b></h6>
                        <p className='none'><b>$115</b></p>
                        </div>
                        <span className='linee'></span>
                        <p className='menu-p'>Ipsum clita erat amet dolor justo diam</p>
                        </div>
                    </div>
                    <div>
                       <button className='price'>Price:: $12.99</button>
                       <button className='menu-btn'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodMenu