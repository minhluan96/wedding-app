'use client'

import React, {useCallback, useEffect, useMemo} from "react";
import 'public/css/glanz_library.css';
import 'public/fonts/themify-icons.css';
import 'public/css/glanz_style.css';
import 'public/fonts/marsha/stylesheet.css';
import {MainMenuContent} from "@/app/components/styles";
import {useGetImages} from "@/app/hooks/useGetImages/useGetImages";
import {EMPTY_IMAGE_HOLDER, ImageMapper, ShowCaseGallery} from "@/types/gallery/gallery";
import RSVP from "@/app/components/RSVP";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from "next/link";

export default function LandingPage({ locale }: { locale: string }) {
    const { images } = useGetImages();
    
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
    
    const getImageUrlFromLabel = useCallback((label: string) => {
        if (!images?.length) return EMPTY_IMAGE_HOLDER;

        return images.find((image) => image.label.includes(label))?.url;
    }, [images]);

    const imageUrlMapper = useMemo(() => {
        return Object.entries(ImageMapper).reduce((acc, [key, val]) => {
            // @ts-ignore
            acc[key] = getImageUrlFromLabel(val);
            return acc;
        }, {})
    }, [images]);
    
    const setDataBackground = useCallback(() => {
        Object.keys(ImageMapper).forEach((id) => {
            
            const section = document.body.querySelector(`#${id}`);
            // @ts-ignore
            const url = imageUrlMapper?.[id];
            if (!section || !url) return;

            section.setAttribute('style', `background-image: url(${url}); background-attachment: fixed; background-position: 50% 60%;`)
        })
    }, [imageUrlMapper]);
    
    useEffect(() => {
        setDataBackground();
    }, [imageUrlMapper]);
    
    const onMobileMenuClick = useCallback((section: string) => {
        window.location.reload();
    }, [locale])
    
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
            <div className="gla_page" id="gla_page">
                <a href="#gla_page" className="gla_top ti ti-angle-up gla_go"/>
                <a href="#gla_page" className="gla_top ti ti-angle-up gla_go"/>
    
                <header className="gla_nav_abs">
        
        
                    <nav className="gla_light_nav gla_image_bck" data-color="#efe5dd">
            
                        <div className="container">
                
                            <div className="gla_logo_container clearfix">
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
                            
                            <MainMenuContent id='mobile_cover_section' className="gla_main_menu_content gla_image_bck">
                                <div className="gla_over" data-color="#000" data-opacity="0.7" />
                            </MainMenuContent>
                
                            <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                                <div className="container">
                                    <ul>
                                        <li className="gla_parent"><a href="#" onClick={() => onMobileMenuClick("#rsvp_section")}>Invitation</a></li>
                                        <li className="gla_parent"><a href="#" onClick={() => onMobileMenuClick("#rsvp_section")}>Send wishes</a></li>
                                        <li className="gla_parent"><Link href='/#rsvp_section'>About us</Link></li>
                                    </ul>
                                    <div className="gla_main_menu_content_menu_copy">
                                        <br />
                                        <p>Luan & Quynh 2024</p>
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
                
                            <div className="gla_default_menu">
                                <ul>
                                    <li className="gla_parent"><a href="#rsvp_section">Invitation</a></li>
                                    <li className="gla_parent"><a href="#rsvp_section">Send wishes</a></li>
                                    <li className="gla_parent"><a href="#rsvp_section">About us</a></li>
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
                    
                    
                    <section id='getting_marry_section'
                             className="gla_section gla_lg_padding gla_image_bck gla_fixed gla_wht_txt"
                             data-stellar-background-ratio="0.2">
                        
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
                                    data-bottom-top="@src:/images/animations/ourwedding_wh.gif" height="150"
                                    alt=""/></p>
                            
                            <h2>We’re Getting Married!</h2>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi earum
                                nihil
                                perspiciatis
                                magnam facilis, error explicabo obcaecati maiores sunt exercitationem doloribus
                                tempora, sit
                                voluptate
                                autem quibusdam velit alias. Reprehenderit.</p>
                        
                        
                        </div>
                    </section>
                    
                    
                    <section id='count_down_section' className="gla_section gla_image_bck gla_fixed gla_wht_txt"
                             data-stellar-background-ratio="0.2"
                             data-color="#fff" data-opacity="0.7">
                        
                        
                        <div className="container text-center">
                            <p><img src="/images/animations/savethedate_wh.gif"
                                    data-bottom-top="@src:/images/animations/savethedate_wh.gif"
                                    height="150" alt=""/></p>
                            <h2>March 31st, 2024</h2>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="gla_subtitle">St. Thomas's Church,<br/>Bristol, U.K.</h3>
                            <div className="gla_countdown" data-year="2024" data-month="03" data-day="31"></div>
                        
                        </div>
                    
                    </section>
                    
                    
                    <section className="gla_section gla_lg_padding gla_image_bck" data-color="#efe5dd">
                        
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
                            <p><img src="/images/animations/just_st.gif"
                                    data-bottom-top="@src:resources/images/animations/just_st.gif"
                                    height="150"
                                    alt=""/></p>
                            <div className="gla_slide_midtitle">See you at the wedding!</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum pariatur vel rerum qui
                                nesciunt eaque,
                                suscipit delectus sunt, dolore facilis! Dignissimos fugit facere veniam ad nisi, eveniet
                                pariatur
                                maiores laborum!</p>
                            <p><a href="#rsvp_section" className="btn">RSVP</a></p>
                        
                        
                        </div>
                    
                    </section>
                    
                    <section className="gla_section" id='rsvp_section'>
                        <div className="container text-center">
                            <p><img src="/images/animations/rsvp_st.gif" data-bottom-top="@src:images/animations/rsvp.gif"
                                    height="180" alt=""/></p>
                            
                            <div className="row">
                                <div className="col-md-8 col-md-push-2">
                                    <RSVP/>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
                    <section id='registry_section' className="gla_section gla_image_bck gla_wht_txt gla_fixed"
                             data-stellar-background-ratio="0.8"
                             data-image="http://placehold.it/1400x800">
                        
                        <div className="gla_over" data-color="#1e1d2d" data-opacity="0.4"></div>
                        
                        <div className="container text-center">
                            
                            
                            <h2>Registry</h2>
                            <p>We’re lucky enough to have nearly everything we need for our home already. And since
                                neither
                                of us has
                                ever been outside of North America, we want our honeymoon to be extra special! If you
                                want
                                to help make
                                it unforgettable, you can contribute using the link to the right. If you would like to
                                give
                                us something
                                to update our home, we’ve compiled a short registry as well.</p>
                        </div>
                    
                    </section>
                    
                    
                    <section className="gla_section gla_image_bck">
                        
                        
                        <div className="container text-center">
                            <h2>The Day They Got Engaged</h2>
                            <p>Andy and Jeska met in university in the Graphic Design program. They both remember each
                                other
                                from
                                orientation, but it wasn’t love at first sight, that’s for sure. Andy remembers Jeska as
                                a
                                ‘snooty art
                                bitch (having been in the visual arts program at the time), and she remembers Andy being
                                an
                                ‘arrogant
                                computer nerd’, boasting his knowledge of Macs over the other students.</p>
                            
                            <div className="button-group filter-button-group">
                                <a data-filter="*">Show All</a>
                                <a data-filter=".engagement">Engagement</a>
                                <a data-filter=".ceremony">Ceremony</a>
                            </div>
                            
                            <div className="gla_portfolio_no_padding grid">
                                {ShowCaseGallery.map((label, idx) => {
                                    const url = getImageUrlFromLabel(label);
                                    return (
                                        <div key={idx} className="col-sm-4 gla_anim_box grid-item engagement">
                                            <div className="gla_shop_item">
                                                <a href={url} className="lightbox">
                                                    <img src={url} alt=""/>
                                                </a>
                                            
                                            
                                            </div>
                                        </div>
                                    )
                                })}
                            
                            </div>
                        
                        </div>
                    
                    </section>
                    
                    
                    <section id='thank_you_section' className="gla_section gla_image_bck gla_fixed gla_wht_txt"
                             data-stellar-background-ratio="0.2"
                             data-image="http://placehold.it/1400x800">
                        
                        <div className="gla_over" data-color="#000" data-opacity="0.4"></div>
                        
                        <div className="container text-center">
                            <p><img src="/images/animations/thnyou_wh.gif" alt="" height="200"
                                    data-bottom-top="@src:/images/animations/thnyou_wh.gif"/></p>
                        
                        
                        </div>
                    
                    </section>
                
                </section>
            </div>
        </GoogleReCaptchaProvider>
    )
}