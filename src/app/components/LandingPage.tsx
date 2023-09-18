import React from "react";
import 'public/css/glanz_library.css';
import 'public/fonts/themify-icons.css';
import 'public/css/glanz_style.css';
import 'public/fonts/marsha/stylesheet.css';
import {MainMenuContent} from "@/app/components/styles";

export default function LandingPage() {
    return (
        <>
            <div className="gla_page" id="gla_page">
                <a href="#gla_page" className="gla_top ti ti-angle-up gla_go"/>
                <a href="#gla_page" className="gla_top ti ti-angle-up gla_go"/>
    
                <header className="gla_nav_abs">
        
        
                    <nav className="gla_light_nav gla_image_bck" data-color="#efe5dd">
            
                        <div className="container">
                
                            <div className="gla_logo_container clearfix">
                                <img src="/images/glanz_logo_bl.png" alt="" />
                                    <div className="gla_logo_txt">
                                        <a href="/" className="gla_logo">Luan & Quynh</a>
                            
                                        <div className="gla_logo_und">March 31st, 2024</div>
                                    </div>
                            </div>
                
                            <div className="gla_main_menu gla_main_menu_mobile">
                                <div className="gla_main_menu_icon">
                                    <b>Menu</b>
                                    <b className="gla_main_menu_icon_b">Back</b>
                                </div>
                            </div>
                            
                            <MainMenuContent className="gla_main_menu_content gla_image_bck">
                                <div className="gla_over" data-color="#000" data-opacity="0.7" />
                            </MainMenuContent>
                
                            <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                                <div className="container">
                                    <ul>
                                        <li className="gla_parent"><a href="#">Demos</a>
                                            <ul>
                                                <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated
                                                    Flowers</a></li>
                                                <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated
                                                    Flowers</a></li>
                                                <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                                <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                                <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                                <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                                <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                                <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                                            </ul>
                                        </li>
                            
                                        <li className="gla_parent"><a href="#">Business</a>
                                            <ul>
                                                <li><a href="01_07_wedding_planner.html">Wedding Planner</a></li>
                                                <li><a href="01_08_wedding_flowers.html">Wedding Flowers</a></li>
                                                <li><a href="01_11_wedding_cakes.html">Wedding Cakes</a></li>
                                            </ul>
                                        </li>
                            
                                        <li className="gla_parent"><a href="#">Invitations</a>
                                            <ul>
                                                <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                                <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                                <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                                <li><a href="02_04_invitation.html">Invitation 4</a></li>
                                            </ul>
                                        </li>
                            
                                        <li className="gla_parent"><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="03_01_blog_sidebar.html">Blog with Sidebar</a></li>
                                                <li><a href="03_02_blog_1col.html">Blog Full Width</a></li>
                                                <li><a href="03_03_blog_single_sidebar.html">Single Post with
                                                    Sidebar</a></li>
                                                <li><a href="03_04_blog_single_col1.html">Single Post Full Width</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="gla_parent"><a href="#">Shop</a>
                                            <ul>
                                                <li><a href="04_01_shop_category_col1.html">Shop Category</a></li>
                                                <li><a href="04_02_shop_category_sidebar.html">Shop Category with
                                                    Sidebar</a></li>
                                                <li><a href="04_03_shop_single_sidebar.html">Shop Item Page</a></li>
                                                <li><a href="04_04_shop_cart.html">Shop Cart</a></li>
                                                <li><a href="04_05_shop_checkout.html">Shop Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="gla_parent"><a href="#">Elements</a>
                                            <ul className="mega-menu">
                                    
                                                <li className="mega-menu-col">
                                                    <ul>
                                                        <li className="mega-menu-col-header">Shortcodes</li>
                                                        <li><a href="05_01_shortcodes.html#accordions"><i
                                                            className="ti ti-layout-accordion-separated"></i> Accordions</a>
                                                        </li>
                                                        <li><a href="05_01_shortcodes.html#tabs"><i
                                                            className="ti ti-layout-tab"></i> Tabs</a></li>
                                                        <li><a href="05_01_shortcodes.html#buttons"><i
                                                            className="ti ti-layout-grid2"></i> Buttons</a></li>
                                                        <li><a href="05_01_shortcodes.html#labels"><i
                                                            className="ti ti-comment"></i> Labels</a></li>
                                                        <li><a href="05_01_shortcodes.html#alerts"><i
                                                            className="ti ti-alert"></i> Alerts</a></li>
                                                        <li><a href="05_01_shortcodes.html#lightbox"><i
                                                            className="ti ti-plus"></i> Lightbox</a></li>
                                                        <li><a href="05_01_shortcodes.html#progress_bars"><i
                                                            className="ti ti-layout-list-post"></i> Progress Bars</a>
                                                        </li>
                                                        <li><a href="05_01_shortcodes.html#counters"><i
                                                            className="ti ti-timer"></i> Counters & Charts</a></li>
                                                        <li><a href="05_01_shortcodes.html#twitter"><i
                                                            className="ti ti-twitter"></i> Twitter Feeds</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col">
                                                    <ul>
                                                        <li className="mega-menu-col-header">Wedding Elements</li>
                                                        <li><a href="05_14_when_where.html">When & Where Blocks</a></li>
                                                        <li><a href="05_15_friends.html">Friends Blocks</a></li>
                                                        <li><a href="05_16_about.html">About Us Blocks</a></li>
                                                        <li><a href="05_17_save.html">Save the Date Blocks</a></li>
                                                        <li><a href="05_18_rsvp.html">RSVP Blocks</a></li>
                                                        <li><a href="05_19_badges.html">All Animated Badges</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col">
                                                    <ul>
                                                        <li className="mega-menu-col-header">Other</li>
                                                        <li><a href="05_02_testimonials.html">Testimonials Page</a></li>
                                                        <li><a href="05_03_passpartu.html">Passpartu Page</a></li>
                                                        <li><a href="05_04_preloader.html">Preloader Page</a></li>
                                                        <li><a href="05_05_videointro.html">Video Intro Page</a></li>
                                                        <li><a href="05_06_video_slider.html">Video Slider Page</a></li>
                                                        <li><a href="05_07_video_section.html">Video Section Page</a>
                                                        </li>
                                                        <li><a href="05_08_slider.html">Slider Page</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col">
                                                    <ul>
                                                        <li className="mega-menu-col-header">Headers & Footers</li>
                                                        <li><a href="05_09_header_transparent.html">Transparent
                                                            Header</a></li>
                                                        <li><a href="05_10_header_white.html">White Header</a></li>
                                                        <li><a href="05_11_header_black.html">Black Header</a></li>
                                                        <li><a href="05_12_header_image.html">Image Header</a></li>
                                                        <li><a href="05_13_footers.html#grey">Grey Footer</a></li>
                                                        <li><a href="05_13_footers.html#black">Black Footer</a></li>
                                                        <li><a href="05_13_footers.html#white">White Footer</a></li>
                                                        <li><a href="05_13_footers.html#simple">Simple Footer</a></li>
                                                    </ul>
                                                </li>
                                
                                
                                            </ul>
                                        </li>
                        
                        
                                    </ul>
                                    <div className="gla_main_menu_content_menu_copy">
                                        <form>
                                            <input type="text" className="form-control"
                                                   placeholder="Enter Your Keywords" />
                                                <button type="submit" className="btn">
                                                    Search
                                                </button>
                                        </form>
                                        <br />
                                            <p>© GlanzThemes 2017</p>
                                            <div className="gla_footer_social">
                                                <a href="#"><i className="ti ti-facebook gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-instagram gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-google gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-youtube gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-twitter gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-pinterest gla_icon_box"></i></a>
                                            </div>
                        
                                    </div>
                                </div>
                            </div>
                
                            <div className="gla_search_block">
                    
                                <div className="gla_search_block_link gla_search_parent"><i
                                    className="ti ti-search"></i>
                                    <ul>
                                        <li>
                                            <form>
                                                <input type="text" className="form-control"
                                                       placeholder="Enter Your Keywords" />
                                                    <button type="submit" className="btn">
                                                        <i className="ti ti-search"></i>
                                                    </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                
                            <div className="gla_default_menu">
                                <ul>
                                    <li className="gla_parent"><a href="#">Demos</a>
                                        <ul>
                                            <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated Flowers</a>
                                            </li>
                                            <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated Flowers</a>
                                            </li>
                                            <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                            <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                            <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                            <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                            <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                            <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                                        </ul>
                                    </li>
                        
                                    <li className="gla_parent"><a href="#">Business</a>
                                        <ul>
                                            <li><a href="01_07_wedding_planner.html">Wedding Planner</a></li>
                                            <li><a href="01_08_wedding_flowers.html">Wedding Flowers</a></li>
                                            <li><a href="01_11_wedding_cakes.html">Wedding Cakes</a></li>
                                        </ul>
                                    </li>
                        
                                    <li className="gla_parent"><a href="#">Invitations</a>
                                        <ul>
                                            <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                            <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                            <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                            <li><a href="02_04_invitation.html">Invitation 4</a></li>
                                        </ul>
                                    </li>
                        
                                    <li className="gla_parent"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="03_01_blog_sidebar.html">Blog with Sidebar</a></li>
                                            <li><a href="03_02_blog_1col.html">Blog Full Width</a></li>
                                            <li><a href="03_03_blog_single_sidebar.html">Single Post with Sidebar</a>
                                            </li>
                                            <li><a href="03_04_blog_single_col1.html">Single Post Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="gla_parent"><a href="#">Shop</a>
                                        <ul>
                                            <li><a href="04_01_shop_category_col1.html">Shop Category</a></li>
                                            <li><a href="04_02_shop_category_sidebar.html">Shop Category with
                                                Sidebar</a></li>
                                            <li><a href="04_03_shop_single_sidebar.html">Shop Item Page</a></li>
                                            <li><a href="04_04_shop_cart.html">Shop Cart</a></li>
                                            <li><a href="04_05_shop_checkout.html">Shop Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="gla_parent"><a href="#">Elements</a>
                                        <ul className="mega-menu">
                                
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Wedding Elements</li>
                                                    <li><a href="05_14_when_where.html">When & Where Blocks</a></li>
                                                    <li><a href="05_15_friends.html">Friends Blocks</a></li>
                                                    <li><a href="05_16_about.html">About Us Blocks</a></li>
                                                    <li><a href="05_17_save.html">Save the Date Blocks</a></li>
                                                    <li><a href="05_18_rsvp.html">RSVP Blocks</a></li>
                                                    <li><a href="05_19_badges.html">All Animated Badges</a></li>
                                                </ul>
                                            </li>
                                
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Shortcodes</li>
                                                    <li><a href="05_01_shortcodes.html#accordions"><i
                                                        className="ti ti-layout-accordion-separated"></i> Accordions</a>
                                                    </li>
                                                    <li><a href="05_01_shortcodes.html#tabs"><i
                                                        className="ti ti-layout-tab"></i> Tabs</a></li>
                                                    <li><a href="05_01_shortcodes.html#buttons"><i
                                                        className="ti ti-layout-grid2"></i> Buttons</a></li>
                                                    <li><a href="05_01_shortcodes.html#labels"><i
                                                        className="ti ti-comment"></i> Labels</a></li>
                                                    <li><a href="05_01_shortcodes.html#alerts"><i
                                                        className="ti ti-alert"></i> Alerts</a></li>
                                                    <li><a href="05_01_shortcodes.html#lightbox"><i
                                                        className="ti ti-plus"></i> Lightbox</a></li>
                                                    <li><a href="05_01_shortcodes.html#progress_bars"><i
                                                        className="ti ti-layout-list-post"></i> Progress Bars</a></li>
                                                    <li><a href="05_01_shortcodes.html#counters"><i
                                                        className="ti ti-timer"></i> Counters & Charts</a></li>
                                                    <li><a href="05_01_shortcodes.html#twitter"><i
                                                        className="ti ti-twitter"></i> Twitter Feeds</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Other</li>
                                                    <li><a href="05_02_testimonials.html">Testimonials Page</a></li>
                                                    <li><a href="05_04_preloader.html">Preloader Page</a></li>
                                                    <li><a href="05_05_videointro.html">Video Intro Page</a></li>
                                                    <li><a href="05_06_video_slider.html">Video Slider Page</a></li>
                                                    <li><a href="05_07_video_section.html">Video Section Page</a></li>
                                                    <li><a href="05_08_slider.html">Slider Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Headers & Footers</li>
                                                    <li><a href="05_09_header_transparent.html">Transparent Header</a>
                                                    </li>
                                                    <li><a href="05_10_header_white.html">White Header</a></li>
                                                    <li><a href="05_11_header_black.html">Black Header</a></li>
                                                    <li><a href="05_12_header_image.html">Image Header</a></li>
                                                    <li><a href="05_13_footers.html#grey">Grey Footer</a></li>
                                                    <li><a href="05_13_footers.html#black">Black Footer</a></li>
                                                    <li><a href="05_13_footers.html#white">White Footer</a></li>
                                                    <li><a href="05_13_footers.html#simple">Simple Footer</a></li>
                                                </ul>
                                            </li>
                            
                            
                                        </ul>
                                    </li>
                                </ul>
                            </div>
            
            
                        </div>
                    </nav>
    
                </header>
        
                <div className="gla_slider gla_image_bck gla_fixed" data-stellar-background-ratio="0.2"
                     data-color="#efe5dd">
            
                    <div className="gla_slider_flower">
                        <div className="gla_slider_flower_c1 gla_slider_flower_item" data-start="top:0px; left:0px"
                             data-200-start="top:-300px; left:-300px"></div>
                        <div className="gla_slider_flower_c2 gla_slider_flower_item" data-start="top:0px; right:0px"
                             data-200-start="top:-300px; right:-300px"></div>
                        <div className="gla_slider_flower_c3 gla_slider_flower_item" data-start="bottom:0px; right:0px"
                             data-200-start="bottom:-300px; right:-300px"></div>
                        <div className="gla_slider_flower_c4 gla_slider_flower_item" data-start="bottom:0px; left:0px"
                             data-200-start="bottom:-300px; left:-300px"></div>
                        <div className="gla_slider_flower_c5 gla_slider_flower_item" data-start="top:0px; left:50%"
                             data-200-start="top:-300px; left:50%"></div>
                        <div className="gla_slider_flower_c6 gla_slider_flower_item" data-start="bottom:0px; left:50%"
                             data-200-start="bottom:-300px; left:50%"></div>
                    </div>
            
                    <div className="gla_over" data-color="#9abab6" data-opacity="0"></div>
            
                    <div className="container">
                
                
                        <div className="gla_slide_txt gla_slide_center_middle text-center">
                    
                            <div className="gla_slide_midtitle">Luan & Quynh <br/>31 March, 2024</div>
                
                
                        </div>
                    </div>
            
                    <a className="gla_scroll_down gla_go" href="#gla_content">
                        <b></b>
                        Scroll
                    </a>
        
        
                </div>
        
        
                <section id="gla_content" className="gla_content">
            
            
                    <section className="gla_section gla_lg_padding gla_image_bck gla_fixed gla_wht_txt"
                             data-stellar-background-ratio="0.2" data-image="https://placehold.it/1400x800">
                
                        <div className="gla_slider_flower" data-bottom-top="@class:active"
                             data--200-bottom="@class:no_active">
                            <div className="gla_slider_flower_c1 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c2 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c3 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c4 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c5 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c6 gla_slider_flower_item"></div>
                        </div>
                
                
                        <div className="container text-center">
                    
                            <p><img src="/images/animations/ourwedding_wh.gif"
                                    data-bottom-top="@src:/images/animations/ourwedding_wh.gif" height="150" alt=""/></p>
                    
                            <h2>We’re Getting Married!</h2>
                    
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi earum nihil
                                perspiciatis
                                magnam facilis, error explicabo obcaecati maiores sunt exercitationem doloribus tempora, sit
                                voluptate
                                autem quibusdam velit alias. Reprehenderit.</p>
                
                
                        </div>
            
                    </section>
            
            
                    <section className="gla_section gla_image_bck gla_fixed" data-stellar-background-ratio="0.2"
                             data-color="#fff">
                
                
                        <div className="container text-center">
                            <p><img src="/images/animations/savethedate.gif"
                                    data-bottom-top="@src:/images/animations/savethedate.gif"
                                    height="150" alt=""/></p>
                            <h2>March 31st, 2024</h2>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="gla_subtitle">St. Thomas's Church,<br/>Bristol, U.K.</h3>
                            <div className="gla_countdown" data-year="2024" data-month="03" data-day="31"></div>
                
                        </div>
            
                    </section>
            
            
                    <section className="gla_section gla_lg_padding gla_image_bck" data-color="#efe5dd">
                
                        <div className="gla_slider_flower" data-bottom-top="@class:active" data--200-bottom="@class:no_active">
                            <div className="gla_slider_flower_c1 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c2 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c3 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c4 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c5 gla_slider_flower_item"></div>
                            <div className="gla_slider_flower_c6 gla_slider_flower_item"></div>
                        </div>
                
                
                        <div className="container text-center">
                            <p><img src="/images/animations/just_st.gif" data-bottom-top="@src:resources/images/animations/just.gif"
                                    height="150"
                                    alt=""/></p>
                            <div className="gla_slide_midtitle">See you at the wedding!</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum pariatur vel rerum qui
                                nesciunt eaque,
                                suscipit delectus sunt, dolore facilis! Dignissimos fugit facere veniam ad nisi, eveniet
                                pariatur
                                maiores laborum!</p>
                            <p><a href="#" className="btn">RSVP</a></p>
                
                
                        </div>
            
                    </section>
            
            
                    <section className="gla_section gla_image_bck gla_wht_txt gla_fixed" data-stellar-background-ratio="0.8"
                             data-image="http://placehold.it/1400x800">
                
                        <div className="gla_over" data-color="#1e1d2d" data-opacity="0.4"></div>
                
                        <div className="container text-center">
                    
                    
                            <h2>Registry</h2>
                            <p>We’re lucky enough to have nearly everything we need for our home already. And since neither
                                of us has
                                ever been outside of North America, we want our honeymoon to be extra special! If you want
                                to help make
                                it unforgettable, you can contribute using the link to the right. If you would like to give
                                us something
                                to update our home, we’ve compiled a short registry as well.</p>
                    
                            <div className="gla_icon_boxes gla_partners row">
                        
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                        
                                <div className="gla_partner_box">
                                    <a href="#"><img src="http://placehold.it/250x100" height="80" alt=""/></a>
                                </div>
                    
                    
                            </div>
                
                
                        </div>
            
                    </section>
            
            
                    <section className="gla_section gla_image_bck">
                
                
                        <div className="container text-center">
                            <h2>The Day They Got Engaged</h2>
                            <p>Andy and Jeska met in university in the Graphic Design program. They both remember each other
                                from
                                orientation, but it wasn’t love at first sight, that’s for sure. Andy remembers Jeska as a
                                ‘snooty art
                                bitch (having been in the visual arts program at the time), and she remembers Andy being an
                                ‘arrogant
                                computer nerd’, boasting his knowledge of Macs over the other students.</p>
                    
                            <div className="button-group filter-button-group">
                                <a data-filter="*">Show All</a>
                                <a data-filter=".engagement">Engagement</a>
                                <a data-filter=".ceremony">Ceremony</a>
                            </div>
                    
                            <div className="gla_portfolio_no_padding grid">
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item engagement">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                        
                                <div className="col-sm-4 gla_anim_box grid-item ceremony">
                                    <div className="gla_shop_item">
                                        <a href="http://placehold.it/1400x800" className="lightbox">
                                            <img src="http://placehold.it/600x600" alt=""/>
                                        </a>
                            
                            
                                    </div>
                                </div>
                    
                            </div>
                
                        </div>
            
                    </section>
            
            
                    <section className="gla_section gla_image_bck gla_fixed gla_wht_txt" data-stellar-background-ratio="0.2"
                             data-image="http://placehold.it/1400x800">
                
                        <div className="gla_over" data-color="#000" data-opacity="0.4"></div>
                
                        <div className="container text-center">
                            <p><img src="/images/animations/thnyou_wh.gif" alt="" height="200"
                                    data-bottom-top="@src:/images/animations/thnyou_wh.gif"/></p>
                
                
                        </div>
            
                    </section>
        
                </section>
    
            </div>
        </>
    )
}