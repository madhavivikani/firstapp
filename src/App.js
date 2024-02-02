import './App.css';
import { GoMail } from "react-icons/go";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import logo from "./image/creative-logo-white.svg";
import logonav from "./image/creative-logo-blue.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaChevronDown} from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";


const menu = [
  {icon:<GoMail></GoMail>,info:"info@cdmi.info"},
  {icon:<FaCertificate></FaCertificate>,info:"verify certificate"}
]


function App() {
  return (


      <div className="main_part">

          <div className="main_header">
              <div className="header">
                <div>
                  <i className='icon'></i>
                  <span className='info'>info@cdmi.info</span>
                  <i className='icon'><FaCertificate></FaCertificate></i>
                  <span className='verify'>verify certificate</span>
                </div>
                <p className='haveany'>HAVE ANY QUESTION?+91 90333 16003</p>
                <p className='icon'>  
                  <i><FaFacebookF></FaFacebookF></i>
                  <i><FaTwitter></FaTwitter></i>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                  <i><FaLinkedin></FaLinkedin></i>
                  <i><TiSocialInstagram></TiSocialInstagram></i>
                  <i><CiYoutube></CiYoutube></i>
                  <i><FaWhatsapp></FaWhatsapp></i>
                </p>
              </div>
          </div>

          <nav>
            <div className='bg_nav'>
                <div className='left_nav'> 
                    <div className='img_nav'>
                      <img src={logonav}></img>
                    </div>
                </div>
                <div className='right_nav'>
                  <ul className='main'>
                    <li className='active'><a href='#'>HOME</a></li>
                    <li><a href='#'>COURSES<i><FaChevronDown></FaChevronDown></i></a></li>
                    <li><a href='#'>ACTIVITIES<i><FaChevronDown></FaChevronDown></i></a>
                        <ul className='sub_menu'>
                          <li><a href='#'>Gallery</a></li>
                          <li><a href='#'>Events</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>KNOW US<i><FaChevronDown></FaChevronDown></i></a>
                        <ul className='sub_menu'>
                          <li><a href='#'>About Us</a></li>
                          <li><a href='#'>Success Stories</a></li>
                          <li><a href='#'>Placement Partner</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>GET IN TOUCH</a></li>
                    <li><a href='#'>STUDENT ZONE<i><FaChevronDown></FaChevronDown></i></a>
                        <ul className='sub_menu'>
                          <li><a href='#'>Student Login</a></li>
                          <li><a href='#'>Showcase</a></li>
                        </ul>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
          
          <div className='slider'>
              <div className='slider_img'> 
                  <img src={require('./image/2.webp')}></img>
              </div>
          </div>

          <div className='offer_part'>
              <div className='two_p'>
                  <div className='line'></div>
                  <div className='text_cdmi'>CREATIVE COURSE</div>
              </div>
              <p className='course'>OFFERED COURSES</p>
          </div>

          <div className='six_part'>
              <div className='first'>
                <div className='one'>
                  <div className='one_img'>
                    <img src={require('./image/one.webp')}></img>
                  </div>
                  <p className='dev'>Development Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='two'>
                  <div className='one_img'>
                    <img src={require('./image/two.webp')}></img>
                  </div>
                  <p className='dev'>Design Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='three'>
                  <div className='one_img'>
                    <img src={require('./image/three.webp')}></img>
                  </div>
                  <p className='dev'>Programming IT</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div> 
              </div>
              <div className='sec'>
                <div className='one'>
                  <div className='one_img'>
                    <img src={require('./image/img4.webp')}></img>
                  </div>
                  <p className='dev'>Trendy Courses</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='two'>
                  <div className='one_img'>
                    <img src={require('./image/img5.webp')}></img>
                  </div>
                  <p className='dev'>Civil-Mech. Engineering</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div>
                <div className='three'>
                  <div className='one_img'>
                    <img src={require('./image/img6.jpg')}></img>
                  </div>
                  <p className='dev'>Business Development</p>
                  <p className='br_line'></p>
                  <div className='two_start'>
                      <p className='start_icon'>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoIosStar></IoIosStar></i>
                        <i><IoStarHalfOutline></IoStarHalfOutline></i>
                      </p>
                      <p>
                        <a href='#' className='btn'>Know More..!</a>
                      </p>
                  </div>
                </div> 
              </div>
          </div>

          <div className='btn_part'>
            <a className='btn1'>View All Courses</a>
          </div>

          <div className='main_two'>
              <div className='text'>
                <div className='two_p1'>
                    <div className='line1'></div>
                    <div className='text_cdmi'>ABOUT US</div>
                </div> 
                <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
                <p className='prag'>
                Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                </p>
                <div className='btn_part1'>
                  <a className='btn2'>Enroll Now... !</a>
                </div>
              </div>
              <div className='photo'>
                <div className='img_sir'>
                  <img src={require('./image/about-us.jpg')}></img>
                </div>
                <p className='play'>
                <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><i className='p_icon'><FaPlay></FaPlay></i></a>
                </p>
              </div>
          </div>

          <div className='bg_img'>
            <div className='one_img11'>
                <div className='b1'>
                  <img src={require('./image/b1.png')}></img>
                </div>
                <p className='number'>18000+</p>
                <p className='std'>HAPPY STUDENT</p>
            </div>
            <div className='one_img11'>
                <div className='b1'>
                  <img src={require('./image/b2.png')}></img>
                </div>
                <p className='number'>10+</p>
                <p className='std'>CERTIFICATION APPROVAL</p>
            </div>
            <div className='one_img11'>
                <div className='b1'>
                  <img src={require('./image/b3.png')}></img>
                </div>
                <p className='number'>100+</p>
                <p className='std'>CERTIFIED TEACHERS</p>
            </div>
            <div className='one_img11'>
                <div className='b1'>
                  <img src={require('./image/b4.png')}></img>
                </div>
                <p className='number'>12000+</p>
                <p className='std'>STUDENTS PLACED</p>
            </div>
          </div>

          <div className='happy'>
            <div className='innder_happy'>
              <div className='testi'>
                <div className='two_p1'>
                    <div className='line1'></div>
                    <div className='text_cdmi'>HAPPY STUDENTS</div>
                </div> 
                <p className='ALUMNI'>ALUMNI SPEAK</p>
                <div className='two_quto'>
                    <div className='quote'>
                      <i><FaQuoteRight></FaQuoteRight></i>
                    </div>
                    <div className='icon_l_r'>
                      <p className='left_i'><i><MdKeyboardArrowLeft></MdKeyboardArrowLeft></i></p>
                      <p className='left_i'><i><MdChevronRight></MdChevronRight></i></p>
                    </div>
                </div>
                <p className='visit_p'>
                  I visited this coaching center and they treated me with good care and I am loving time here everyone is highly friendly and the learning atmosphere is great.
                </p>
                <div className='two_port'>
                    <div className='g_img'>
                        <img src={require('./image/pic1.jpeg')}></img>
                    </div>
                    <div className='name'>
                      <p className='vikani'>MADHAVI VIKANI</p>
                      <p className='full'>Full-Stack Developer<font color="grey">@Patoliya Infotech</font></p>
                    </div>
                </div>
              </div>
              <div className='pic'>
                  <img src={require('./image/Capture.PNG')}></img>  
              </div>
          </div>
          </div>

          <div className='choose_part'>
            <div className='offer_part'>
                <div className='two_p'>
                    <div className='line'></div>
                    <div className='text_cdmi'>READ OUR DIFFERENCE</div>
                </div>
                <p className='course'>WHY CHOOSE CREATIVE</p>
            </div>
            <div className='six_part1'>
              <div className='first1'>
                <div className='one1'>
                  <div className='one_img1'>
                    <img src={require('./image/1.png')}></img>
                  </div>
                  <p className='industry'>Industry Experts As Trainers</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img2'>
                    <img src={require('./image/5.png')}></img>
                  </div>
                  <p className='industry'>Latest Curriculum</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img3'>
                    <img src={require('./image/3.png')}></img>
                  </div>
                  <p className='industry'>Latest Technology</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
              <div className='sec1'>
              <div className='one1'>
                  <div className='one_img4'>
                    <img src={require('./image/4.png')}></img>
                  </div>
                  <p className='industry'>Interview Assistance</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img5'>
                    <img src={require('./image/6.png')}></img>
                  </div>
                  <p className='industry'>Free Upgradation</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img6'>
                    <img src={require('./image/7.png')}></img>
                  </div>
                  <p className='industry'>Lifetime Support</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
          </div>
          </div>

          <div className='std'>
            <div className='offer_part'>
                  <div className='two_p'>
                      <div className='line'></div>
                      <div className='text_cdmi'>STUDENT PLACEMENT</div>
                  </div>
                  <p className='course'>OUR RECRUITMENT PARTNERS</p>
              </div>
              <div className='company'>
                  <div className='inner_com'>
                      <div className='one_c'>
                        <a href='https://www.resolutesolutions.in/'> <img src={require('./image/company1.png')}></img></a> 
                      </div>
                      <div className='one_c'>
                      <a href='https://www.cdmi.in/'><img src={require('./image/company2.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://www.squareinfosoft.com/'><img src={require('./image/company3.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://trigontic.com/'><img src={require('./image/company4.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://viraniinfotech.com/'><img src={require('./image/company5.png')}></img></a>
                      </div>
                      <div className='one_c'>
                      <a href='https://www.webmigrates.com/'><img src={require('./image/company6.jpg')}></img></a>
                      </div>
                      

                  </div>
              </div>
          </div>

          
          <div className='bg_blue'>
              <div className='three_part'>
                  <div className='first_p'>
                    <div className='first_inner'>
                      <div className='cretive_logo'>
                        <img src={logo}></img>
                      </div>
                      <p className='cdmi_p'>
                        Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat. 
                      </p>
                      <a href='#'><p className='follow'>FOLLOW US ON</p></a>
                      <p className='icon1'>  
                        <p className='one_i'><i><FaFacebookF></FaFacebookF></i></p>
                        <p className='one_i'><i><FaTwitter></FaTwitter></i></p>
                        <p className='one_i'><i><TiSocialGooglePlus></TiSocialGooglePlus></i></p>
                        <p className='one_i'><i><FaLinkedin></FaLinkedin></i></p>
                        <p className='one_i'><i><TiSocialInstagram></TiSocialInstagram></i></p>
                        <p className='one_i'><i><CiYoutube></CiYoutube></i></p>
                        <p className='one_i'><i><FaWhatsapp></FaWhatsapp></i></p>
                      </p>
                    </div>
                  </div>
                  <div className='sec_p'>
                      <div className='inner_c'>
                          <p className='feature'>FEATURE LINKS</p>
                          <div className='i_one'>
                            <i><FaHandPointRight></FaHandPointRight></i>
                            < span>About Us</span>
                          </div>
                          <div className='i_one'>
                            <i><FaHandPointRight></FaHandPointRight></i>
                            <span>Blogs</span>
                          </div>
                          <div className='i_one'>
                            <i><FaHandPointRight></FaHandPointRight></i>
                            <span>Join Us</span>
                          </div>
                          <div className='i_one'>
                            <i><FaHandPointRight></FaHandPointRight></i>
                            <span>Company Login</span>
                          </div>
                          <div className='i_one'>
                            <i><FaHandPointRight></FaHandPointRight></i>
                            <span>Certificate Verification</span>
                          </div>
                      </div>
                  </div>
                  <div className='third_p'>
                      <div className='inner_con'>
                        <p className='contact'>CONTACT US</p>
                        <p className='head'>HEAD OFFICE - YOGICHOWK</p>
                        <p className='p_404'>
                          401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</p>
                        <p className='mo'>Mo :<font color="#FFBC06"> +91 90333 16003</font></p>
                        <p className='other'>OTHER BRANCHES</p>
                        <div className='i_one'>
                            <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                            <span>Katargam</span>
                        </div>
                        <div className='i_one'>
                            <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                            <span> Mota Varachha</span>
                          </div>
                          <div className='i_one'>
                            <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                            <span> Adajan</span>
                          </div>
                          <div className='i_one'>
                            <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                            <span> Navsari</span>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
          <div className='copy_part'>
            <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
          </div>


      </div>      
  );
}

export default App;
