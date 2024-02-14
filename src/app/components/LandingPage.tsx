'use client'

import React, {useCallback, useMemo} from "react";
import 'public/css/glanz_library.css';
import 'public/fonts/themify-icons.css';
import 'public/css/glanz_style.css';
import 'public/fonts/marsha/stylesheet.css';
import {MainMenuContent, SectionBg} from "@/app/components/styles";
import {useGetImages} from "@/app/hooks/useGetImages/useGetImages";
import {EMPTY_IMAGE_HOLDER, ImageMapper, ShowCaseGallery} from "@/types/gallery/gallery";
import RSVP from "@/app/components/RSVP";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function LandingPage({ locale }: { locale: string }) {
    const t = useTranslations('Home');
    
    const { images } = useGetImages();
    
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
    
    const getImageUrlFromLabel = useCallback((label: string) => {
        if (!images?.length) return EMPTY_IMAGE_HOLDER;

        return images.find((image) => image.label.includes(label))?.url;
    }, [images]);

    const imageUrlMapper: any = useMemo(() => {
        return Object.entries(ImageMapper).reduce((acc, [key, val]) => {
            // @ts-ignore
            acc[key] = getImageUrlFromLabel(val);
            return acc;
        }, {})
    }, [images]);
    
    const onMobileMenuClick = useCallback((_: string) => {
        window.location.reload();
    }, []);
    
    const onChangeLanguage = useCallback(() => {
        const preferLocale = window.location.pathname === '/en' ? 'vi' : 'en';
        
        window.location.href = `${window.location.origin}/${preferLocale}`;
    }, []);
    
    return imageUrlMapper && (
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
                        
                                    <div className="gla_logo_und">{t('weddingDate')}</div>
                                </div>
                            </div>
                
                            <div className="gla_main_menu gla_main_menu_mobile">
                                <div className="gla_main_menu_icon">
                                    <b>Menu</b>
                                    <b className="gla_main_menu_icon_b">{t('backButton')}</b>
                                </div>
                            </div>
                            
                            <MainMenuContent $url={imageUrlMapper?.["mobile_cover_section"]} id='mobile_cover_section' className="gla_main_menu_content gla_image_bck">
                                <div className="gla_over" data-color="#000" data-opacity="0.7" />
                            </MainMenuContent>
                
                            <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                                <div className="container">
                                    <ul>
                                        <li className="gla_parent"><a href="#"
                                                                      onClick={() => onMobileMenuClick("#rsvp_section")}>{t('menu.invitation')}</a>
                                        </li>
                                        <li className="gla_parent"><a href="#"
                                                                      onClick={() => onMobileMenuClick("#rsvp_section")}>{t('menu.sendWishes')}</a>
                                        </li>
                                        <li className="gla_parent"><a href="#"
                                                                      onClick={() => onMobileMenuClick("#rsvp_section")}>{t('menu.aboutUs')}</a>
                                        </li>
                                        <li className="gla_parent">
                                            <Link href='#' onClick={onChangeLanguage}>
                                                {t('menu.language')}
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="gla_main_menu_content_menu_copy">
                                        <br/>
                                        <p>Luan & Quynh 2024</p>
                                        <div className="gla_footer_social">
                                                <a href="#"><i className="ti ti-facebook gla_icon_box"></i></a>
                                                <a href="#"><i className="ti ti-instagram gla_icon_box"></i></a>
                                        </div>
                        
                                    </div>
                                </div>
                            </div>
                
                            <div className="gla_default_menu">
                                <ul>
                                    <li className="gla_parent"><a href="#rsvp_section">{t('menu.invitation')}</a></li>
                                    <li className="gla_parent"><a href="#rsvp_section">{t('menu.sendWishes')}</a></li>
                                    <li className="gla_parent"><a href="#registry">{t('menu.aboutUs')}</a></li>
                                    <li className="gla_parent">
                                        <Link href='#' onClick={onChangeLanguage}>
                                            {t('menu.language')}
                                        </Link>
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
                    
                    <SectionBg $url={imageUrlMapper?.["getting_marry_section"]}
                               className="gla_section gla_fixed gla_lg_padding gla_wht_txt"
                               data-stellar-background-ratio="0.2"
                    >
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
                            
                            <h2>{t('gettingMarried')}</h2>
                            
                            <p>{t('gettingMarriedSubTitle')}</p>
                        
                        
                        </div>
                    </SectionBg>
                    
                    <SectionBg $url={imageUrlMapper?.["count_down_section"]}
                               className="gla_section gla_fixed gla_wht_txt" data-stellar-background-ratio="0.2"
                               data-color="#fff" data-opacity="0.7">
                        <div className="container text-center">
                            <p><img src="/images/animations/savethedate_wh.gif"
                                    data-bottom-top="@src:/images/animations/savethedate_wh.gif"
                                    height="150" alt=""/></p>
                            <h2>{t('weddingDate')}</h2>
                            <h3 className="gla_subtitle">{t('address')}<br/>{t('city')}</h3>
                            <div className="gla_countdown" data-year="2024" data-month="03" data-day="31"></div>
                        
                        </div>
                    </SectionBg>
                    
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
                            <p style={{ maxWidth: "700px" }}><img src="/images/animations/flowers3.gif"
                                    data-bottom-top="@src:images/animations/flowers3.gif"
                                    height="150"
                                    alt=""/></p>
                            <h2 style={{ maxWidth: "700px" }}>{t('seeYouAtWedding')}</h2>
                            <p>{t('seeYouAtWeddingSubTitle')}</p>
                            <p><a href="#rsvp_section" className="btn">RSVP</a></p>
                        
                        
                        </div>
                    
                    </section>
                    
                    <section className="gla_section" id='rsvp_section'>
                        <div className="container text-center">
                            <p><img src="/images/animations/rsvp_gold_wh.gif" data-bottom-top="@src:images/animations/rsvp_gold_wh.gif"
                                    height="180" alt=""/></p>
                            
                            <div className="row">
                                <div className="col-md-8 col-md-push-2">
                                    <RSVP/>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <SectionBg $url={imageUrlMapper?.["registry_section"]} className="gla_section gla_fixed gla_wht_txt"
                               data-stellar-background-ratio="0.2">
                        <div className="gla_over" data-color="#1e1d2d" data-opacity="0.4"></div>
                        
                        <div className="container text-center">
                            <h2>{t('registry')}</h2>
                            <p>{t('registrySubTitle')}</p>
                        </div>
                    </SectionBg>
                    
                    
                    <section className="gla_section gla_image_bck">
                        
                        
                        <div className="container text-center">
                            <h2>{t('theDayGotEngaged')}</h2>
                            <p>{t('theDayGotEngagedSubTitle')}</p>
                            
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
                    
                    <SectionBg $url={imageUrlMapper?.["thank_you_section"]} className="gla_section gla_fixed gla_wht_txt" data-stellar-background-ratio="0.2">
                        <div className="gla_over" data-color="#000" data-opacity="0.4"></div>
                        
                        <div className="container text-center">
                            <p><img src="/images/animations/thnyou_wh.gif" alt="" height="200"
                                    data-bottom-top="@src:/images/animations/thnyou_wh.gif"/></p>
                        
                        
                        </div>
                    </SectionBg>
                
                </section>
            </div>
        </GoogleReCaptchaProvider>
    )
}

