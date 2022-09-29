// services helper //
import web from '../../assets/images/services/web_development.jpg';
import mobile from '../../assets/images/services/mobile_app.jpg';
import desktop from '../../assets/images/services/desktop_app.jpg';
import { SSP_Feature1 } from '../../components/__dump__/__field_dump';

// social media icons
import {FiFacebook, FiLinkedin, FiGithub} from 'react-icons/fi';

// mission and vision icon 
import {BiRocket} from 'react-icons/bi';
import {MdOutlineInsights} from 'react-icons/md'

// contact us icons 
import { TbPhone } from "react-icons/tb";
import { FiMail, FiMapPin } from "react-icons/fi";

// import hero banner images 
import herobanner from '../../assets/images/herobanner/herobanner.jpg';
import herobanner2 from '../../assets/images/herobanner/herobanner2.jpg';
import herobanner3 from '../../assets/images/herobanner/herobanner3.jpg';

// import Testimonials Image
import testimonials from '../../assets/images/testimonials/testimonial.jpg'
import testimonials2 from '../../assets/images/testimonials/testimonial2.jpg'
import testimonials3 from '../../assets/images/testimonials/testimonial3.jpg'

// import shop banner images //
import shopBanner1 from '../../assets/images/shop/banner/shop1.jpg';
import shopBanner2 from '../../assets/images/shop/banner/shop2.jpg';
import shopBanner3 from '../../assets/images/shop/banner/shop3.jpg';

// import products images //
import webApp1 from '../../assets/images/shop/products/webApp/p1.webp';
import webApp2 from '../../assets/images/shop/products/webApp/p2.webp';
import webApp3 from '../../assets/images/shop/products/webApp/p3.webp';
import webApp4 from '../../assets/images/shop/products/webApp/p4.webp';
import webApp5 from '../../assets/images/shop/products/webApp/p5.webp';
import webApp6 from '../../assets/images/shop/products/webApp/p6.webp';

export const heroBannerData = [
    {
        img: herobanner
    },
    {
        img: herobanner2
    },
    {
        img: herobanner3
    }
];

// mission and vision data 
export const missionAndVisionData = [
    {
        title: 'Our Mission',
        description: 'To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the Country',
        icon: <BiRocket style={{fontSize: '30px', color: 'red'}}/>
    },
    {
        title: 'Our Vision',
        description: 'To become a prime performer, in providing quality Web, Print and Software solutions in the competitive Local market place.',
        icon: <MdOutlineInsights style={{fontSize: '30px', color: 'red'}}/>
    },
];

// techstacks 
export const techStacksData = [ 
    {
        stack: 'fa-html5'
    },
    {
        stack: 'fa-css3-alt'
    },
    {
        stack: 'fa-js'
    },
    {
        stack: 'fa-vuejs'
    },
    {
        stack: 'fa-react'
    },
    {
        stack: 'fa-python'
    },
    {
        stack: 'fa-php'
    },
    {
        stack: 'fa-laravel'
    },
    {
        stack: 'fa-java'
    },
    {
        stack: 'fa-aws'
    },
    {
        stack: 'fa-npm'
    },
    {
        stack: 'fa-html5'
    },
    {
        stack: 'fa-css3-alt'
    },
    {
        stack: 'fa-js'
    },
    {
        stack: 'fa-vuejs'
    },
    {
        stack: 'fa-react'
    },
    {
        stack: 'fa-python'
    },
    {
        stack: 'fa-php'
    },
    {
        stack: 'fa-laravel'
    },
    {
        stack: 'fa-java'
    },
    {
        stack: 'fa-aws'
    },
    {
        stack: 'fa-npm'
    },
];

// services data //
export const ServicesData = [ 
    {
        img: web,
        title: 'Web App Development',
        description: 'description about our website app development'
    },
    {
        img: desktop,
        title: 'Desktop App Development',
        description: 'description about our desktop app development'
    },
    {
        img: mobile,
        title: 'Mobile App Development',
        description: 'description about our mobile app development'
    },

];

// contact us data //
export const contactUsData = [
    {
        icon: <FiMail style={{fontSize: '25px'}}/>,
        title: "Want to buy a system?",
        subtitle: "We are selling any kind of app...",
        description: "Email us at modernresolve@gmail.com",
      },
      {
        icon: <FiMapPin style={{fontSize: '25px'}}/>,
        title: "Current Location",
        subtitle: "Our office address...",
        description: "Brgy. Banlic, Cabuyao Laguna 4025",
      },
      {
        icon: <TbPhone style={{fontSize: '25px'}}/>,
        title: "Phone Number",
        subtitle: "You can call / text us at...",
        description: "+63-912-345-6789",
      },
];

// selection at login //
export const loginUserCategory = [
    {
        label: 'Business Owner',
        value: 'bo'
    },
    {
        label: 'Student',
        value: 'st'
    }
];

export const projectCategory = [
    {
        label : 'Point Of Sales & Inventory System',
        value : 'POS_INV'
    },
    {
        label : 'ECommerce',
        value : 'ECOM'
    },
    {
        label : 'Inventory System',
        value : 'INV'
    },
    {
        label : 'Payroll System',
        value : 'PYRLL'
    },
    {
        label : 'Dynamic Forms Studio',
        value : 'DFS'
    },
    {
        label : 'Personal Savings Bank',
        value : 'PSB'
    },
    {
        label : 'Enrollment System',
        value : 'ES'
    }
]

export const projectType = [
    {
        label : 'Small Scale Project',
        value : 'SSP'
    },
    {
        label : 'Medium Scale Project',
        value : 'MSP'
    },
    {
        label : 'Large Scale Project',
        value : 'LSP'
    }
]

// navbar data helper //
export const navbarData = [ 
    {
        link: 'Home',
        to: '/#home',
        dropdown: false,
    },
    {
        link: 'About',
        to: '/#about',
        dropdown: false,
    },
    {
        link: 'Services',
        to: '/#services',
        dropdown: false,
    },
    {
        link: 'Testimonials',
        to: '/#testimonials',
        dropdown: false,
    },
    {
        link: 'Contact Us',
        to: '/#contactus',
        dropdown: false,
    },
    {
        link: 'Shop',
        to: '/shop',
        dropdown: true,
    },
];

// footer social media icons 
export const socialAccounts = [
    {
        icon: <FiFacebook className='social-icons'/>,
        link: 'https://facebook.com',
    },
    {
        icon: <FiLinkedin className='social-icons'/>,
        link: 'https://linkedin.com',
    },
    {
        icon: <FiGithub className='social-icons'/>,
        link: 'https://github.com',
    }
];

// footer terms and conditions etc.
export const businessRules = [
    {
        name: 'Terms and Conditions',
        link: 'navigateTermsAndConditions',
    },
    {
        name: 'Privacy Policy',
        link: 'navigatePrivacyPolicy',
    },
    {
        name: 'Terms of Use',
        link: '',
    },
];

// dropdown shop button helper //
export const shopButton = [
    {
        active: false,
        title: 'Category',
        link: ''
    },
    {
        active: false,
        title: 'Web App',
        link: 'navigateToViewAll'
    },
    {
        active: false,
        title: 'Desktop App',
        link: 'navigateToViewAll'
    },
    {
        active: false,
        title: 'Mobile App',
        link: 'navigateToViewAll'
    },
    {
        active: false,
        title: 'View All',
        link: 'navigateToViewAll'
    },
]

// shopBanner helper //
export const shopBannerData = [
    {
        img: shopBanner1
    },
    {
        img: shopBanner2
    },
    {
        img: shopBanner3
    },
]

// products helper //
export const productsData = [
    {
      id: "1",
      image: webApp1,
      name: "WEB APP SYSTEM",
      category: "web",
      description: '',
      pointer: false,
    //   demo: "https://teslacloneui.netlify.app/",
    //   github: "https://github.com/BryanPalad/Tesla-clone",
    },
    {
        id: "2",
        image: webApp2,
        name: "DESKTOP APP SYSTEM",
        category: "desktop",
        description: '',
        pointer: false,
      //   demo: "https://teslacloneui.netlify.app/",
      //   github: "https://github.com/BryanPalad/Tesla-clone",
      },
      {
        id: "3",
        image: webApp3,
        name: "MOBILE APP SYSTEM",
        category: "mobile",
        description: '',
        pointer: false,
      //   demo: "https://teslacloneui.netlify.app/",
      //   github: "https://github.com/BryanPalad/Tesla-clone",
      },
      {
        id: "4",
        image: webApp4,
        name: "WEB APP SYSTEM",
        category: "web",
        description: '',
        pointer: false,
      //   demo: "https://teslacloneui.netlify.app/",
      //   github: "https://github.com/BryanPalad/Tesla-clone",
      },
      {
        id: "5",
        image: webApp5,
        name: "DESKTOP APP SYSTEM",
        category: "desktop",
        description: '',
        pointer: false,
      //   demo: "https://teslacloneui.netlify.app/",
      //   github: "https://github.com/BryanPalad/Tesla-clone",
      },
      {
        id: "6",
        image: webApp6,
        name: "MOBILE APP SYSTEM",
        category: "mobile",
        description: '',
        pointer: false,
      //   demo: "https://teslacloneui.netlify.app/",
      //   github: "https://github.com/BryanPalad/Tesla-clone",
      },
]

// radio button for shop helper //
export const shopCategoriesData = [
    {
        name: 'all',
        label: 'All Products'
    },
    {
        name: 'web',
        label: 'Web App'
    },
    {
        name: 'desktop',
        label: 'Desktop App'
    },
    {
        name: 'mobile',
        label: 'Mobile App'
    },
];

/* data helper */
export const customerStepper = [
    'Personal Information',
    'Project Details',
    'Project Features',
    'Credentials',
    'Verification',
    'Finish'
]
export const studentStepper = [
    'Personal Information',
    'Project Details',
    'Project Features',
    'Credentials',
    'Verification',
    'Consultation',
    'Finish'
]

export const studentRequirements = [
    '✓ Valid ID or Student ID',
    '✓ School Registration Form',
    '✓ Birth Certificate / NSO'
]

// hero banner button //
export const herobannerButton = [
    {
        to: "/#services",
        name: "Learn More",
        color: "button-white",
        dropdown: false
    },
    {
        to: "/#services",
        name: "Pricing",
        color: "button-black",
        dropdown: false
    }
]


export const testimonialData = [
    {
        img: testimonials,
        feedbackDisc:"The success of every websites now depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search engines then you are ahead among your competitors in terms of online sales.",
        creator:"Dr. Christopher Dayagdag",
        profession: 'Business Owner',
    },
    {
        img: testimonials2,
        feedbackDisc:"Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.",
        creator:"Leland Dieno",
        profession: 'Client',
    },
    {
        img: testimonials3,
        feedbackDisc:"If there’s one thing you learn by working on a lot of different Web sites, it’s that almost any design idea–no matter how appallingly bad–can be made usable in the right circumstances, with enough effort.",
        creator:"Steve Krug",
        profession: 'CEO',
    },
]

export const features = []

export const destinationArray = []

// security questions data //
export const security_questions = [
    {
        value : 'what is your dogs name ?',
        label : 'What is your dogs name ?'
    },
    {
        value : 'In what city were you born ?',
        label : 'In what city were you born ?'
    },
    {
        value : "What is your mother's maiden name ?",
        label : "What is your mother's maiden name ?"
    },
    {
        value : "What high school did you attend ?",
        label : "What high school did you attend ?"
    },
    {
        value : "What was the name of your elementary school ?",
        label : "What was the name of your elementary school ?"
    },
    {
        value : "What was the make of your first car ?",
        label : "What was the make of your first car ?"
    },
    {
        value : "What was your favorite food as a child ?",
        label : "What was your favorite food as a child ?"
    },
    {
        value : "Where did you meet your spouse?",
        label : "Where did you meet your spouse?"
    },
    {
        value : "What year was your father (or mother) born?",
        label : "What year was your father (or mother) born?"
    },
]

// REGEX //
export const validName = /^[a-zA-Z\s.]*$/;
export const validContactNumber = /^(09|\+639)\d{9}$/;
export const validEmailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// BUSINESS POLICY HELPER //
// TERMS AND CONDITIONS DATA //

export const termsAndConditionsData = [
    {
        title: 'General Terms',
        description: (<span>By accessing and placing an order with, you confirm that you are in agreement with and bound by the terms of services contained in the Terms and Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and.<br/><br/> Under no circumstances shall team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof. will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment</span>),
        moreInfo: false,
    },
    {
        title: 'License',
        description: (<span>Modern Resolve grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use our service strictly in accordance with the terms of this Agreement. <br/> <br/> These Terms & Conditions are a contract between you and Modern Resolve (referred to in these Terms & Conditions as 'Modern Resolve', 'us', 'we' or 'our'), the provider of the Modern Resolve website and the services accessible from the Modern Resolve website (which are collectively referred to in these Terms & Conditions as the 'Modern Resolve Service'). <br/> <br/> You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the Service. In these Terms & Conditions, 'you' refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice</span>),
        moreInfo:  false,
    },
    {
        title: 'Definitions and key terms',
        description: false,
        moreInfo: 
            [
            {
                subDescription: (<span><strong>Cookie: </strong>small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</span>),
            },
            {
                subDescription: (<span><strong>Company: </strong>when this policy mentions 'Company,' 'we,' 'us,' or 'our,' it refers to Modern Resolve, Calamba City Laguna that is responsible for your information under this Privacy Policy.</span>),
            },
            {
                subDescription: (<span><strong>Country: </strong>where Modern Resolve or the owners/founders of Modern Resolve are based in this case is Philippines.</span>),
            },
            {
                subDescription: (<span><strong>Customer: </strong>refers to the company, organization or person that signs up to use the Modern Resolve Service to manage the relationships with your consumers or service users.</span>),
            },
            {
                subDescription: (<span><strong>Device: </strong>any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Modern Resolve and use the services.</span>),
            },
            {
                subDescription: (<span><strong>IP address: </strong>Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.</span>),
            },
            {
                subDescription: (<span><strong>Personnel: </strong>refers to those individuals who are employed by Modern Resolve or are under contract to perform a service on behalf of one of the parties.</span>),
            },
            {
                subDescription: (<span><strong>Personal Data: </strong>any information that directly, indirectly, or in connection with other information — including a personal identification number - allows for the identification or identifiability of a natural person.</span>),
            },
            {
                subDescription: (<span><strong>Service: </strong>refers to the service provided by Modern Resolve as described in the relative terms (if available) and on this platform.</span>),
            },
            {
                subDescription: (<span><strong>Third-party service: </strong>refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</span>),
            },
            {
                subDescription: (<span><strong>Website: </strong>Modern Resolve's site, which can be accessed via this URL: modernresolve.com.</span>),
            },
            {
                subDescription: (<span><strong>You: </strong> a person or entity that is registered with Modern Resolve to use the Services.</span>),
            },
        ]
    },
    {
        title: 'Restrictions',
        description: "",
        moreInfo: [
            {
                subDescription: "You agree not to, and you will not permit others to:",
            },
            {
                subDescription: "License, sell, rent, lease, assign, distribute, transmit, host, outsource disclose or otherwise commercially exploit the service or make the platform available to any third party.",
            },
            {
                subDescription: "Modify, make derivative works of disassemble, decrypt, reverse compile or reverse engineer any part of the service.",
            },
            {
                subDescription: "Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of or its affiliates, partners, suppliers or the licensors of the service.",
            },
        ]
    },
    {
        title: 'Payment',
        description: "If you register to any of our recurring payment plans, you agree to pay all fees or charges to your account for the Service in accordance with the fees, charges and billing terms in effect at the time that each fee or charge is due and payable. Unless otherwise indicated in an order form, you must provide us with a valid credit card (Visa, MasterCard, or any other issuer accepted by us) ('Payment Provider') as a condition to signing up for the Premium plan. Your Payment Provider agreement governs your use of the designated credit card account, and you must refer to that agreement and not these Terms to determine your rights and liabilities with respect to your Payment Provider. By providing us with your credit card number and associated payment information, you agree that we are authorized to verify information immediately, and subsequently invoice your account for all fees and charges due and payable to us hereunder and that no additional notice or consent is required. You agree to immediately notify us of any change in your billing address or the credit card used for payment hereunder. We reserve the right at any time to change its prices and billing methods, either immediately upon posting on our Site or by e-mail delivery to your organization's administrator(s). Any attorney fees, court costs, or other costs incurred in collection of delinquent undisputed amounts shall be the responsibility of and paid for by you. No contract will exist between you and us for the Service until we accept your order by a confirmatory e-mail, SMS/MMS message, or other appropriate means of communication. You are responsible for any third-party fees that you may incur when using the Service.",
        moreInfo:  false,
    },
    {
        title: 'Return and Refund Policy',
        description: (<span>Thanks for shopping with us. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you're exploring, evaluating, and purchasing our products.<br/> As with any shopping experience, there are terms and conditions that apply to transactions at our company. We'll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase from us, you agree to the terms along with our Privacy Policy<br/> If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.</span>),
        moreInfo:  false,
    },
    {
        title: 'Your Suggestions',
        description: "Any feedback, comments, ideas, improvements or suggestions (collectively, 'Suggestions') provided by you to us with respect to the service shall remain the sole and exclusive property of us. We shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.",
        moreInfo:  false,
    },
    {
        title: 'Your Consent',
        description: "We've updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our service, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.",
        moreInfo:  false,
    },
    {
        title: 'Links to Other Websites',
        description: "Our service may contain links to other websites that are not operated by Us. If you click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Terms & Conditions of every site you visit. We have no control over and assume no responsibility for the content, Terms & Conditions or practices of any third party sites or services.",
        moreInfo:  false,
    },
    {
        title: 'Cookies',
        description: "We use 'Cookies' to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use cookies to enhance the performance and functionality of our service but are nonessential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit our platform as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally identifiable Information in Cookies.",
        moreInfo:  false,
    },
    {
        title: 'Changes To Our Terms & Conditions',
        description: "You acknowledge and agree that we may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at our sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform us when you stop using the Service. You acknowledge and agree that if we disable access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account. If we decide to change our Terms & Conditions, we will post those changes on this page, and/or update the Terms & Conditions modification date below.",
        moreInfo:  false,
    },
    {
        title: 'Modifications to Our service',
        description: "We reserve the nght to modify, suspend or discontinue, temporarily or permanently, the service or any service to which it connects, with or without notice and without liability to you.",
        moreInfo:  false,
    },
    {
        title: 'Updates to Our service',
        description: "We may from time to time provide enhancements or improvements to the features/functionality of the service, which may include patches, bug fixes updates upgrades and other modifications ('Updates') Updates may modify or delete certain features and/or functionalities of the service. You agree that we have no obligation to provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the service to you. You further agree that all Updates will be () deemed to constitute an integral part of the service, and (0) subject to the terms and conditions of this Agreement.",
        moreInfo:  false,
    },
    {
        title: 'Third-Party Services',
        description: "We may display include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services ('Third-Party Services'). You acknowledge and agree that we shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. We do not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services. Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties terms and conditions.",
        moreInfo:  false,
    },
    {
        title: 'Term and Termination',
        description: "This Agreement shall remain in effect until terminated by you or us. We may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice. This Agreement will terminate immediately, without prior notice from us, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the service and all copies thereof from your computer. Upon termination of this Agreement, you shall cease all use of the service and delete all copies of the service from your computer. Termination of this Agreement will not limit any of our rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.",
        moreInfo:  false,
    },
    {
        title: 'Term and Termination',
        description: "If you are a copyright owner or such owner's agent and believe any material from us constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing. (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.",
        moreInfo:  false,
    },
    {
        title: 'Indemnification',
        description: "You agree to indemnify and hold us and our parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the service; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.",
        moreInfo:  false,
    },
    {
        title: 'No Warranties',
        description: "The service is provided to you 'AS IS' and 'AS AVAILABLE' and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, we, on our own behalf and on behalf of our affiliates and our respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, we provide no warranty or undertaking, and makes no representation of any kind that the service will meet your requirements, achieve any intended results, be compatible or work with any other software, websites, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. Without limiting the foregoing, neither us nor any provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the service, or the information, content, and materials or products included thereon; (ii) that the service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the service; or (iv) that the service, its servers, the content, or e-mails sent from or on behalf of us are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. Some jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you.",
        moreInfo:  false,
    },
    {
        title: 'Limitation of Liability',
        description: "Notwithstanding any damages that you might incur, the entire liability of us and any of our suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the service. To the maximum extent permitted by applicable law, in no event shall we or our suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the service, third-party software and/or third-party hardware used with the service, or otherwise in connection with any provision of this Agreement), even if we or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.",
        moreInfo:  false,
    },
    {
        title: 'Severability',
        description: (<span>If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect. <br/><br/> This Agreement, together with the Privacy Policy and any other legal notices published by us on the Services, shall constitute the entire agreement between you and us concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. YOU AND USAGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.</span>),
        moreInfo:  false,
    },
    {
        title: 'Waiver',
        description: (<span>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute waiver of any subsequent breach. <br/><br/> No failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern.</span>),
        moreInfo:  false,
    },
    {
        title: 'Amendments to this Agreement',
        description: "We reserve the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use our service.",
        moreInfo:  false,
    },
    {
        title: 'Entire Agreement',
        description: "The Agreement constitutes the entire agreement between you and us regarding your use of the service and supersedes all prior and contemporaneous written or oral agreements between you and us. You may be subject to additional terms and conditions that apply when you use or purchase other services from us, which we will provide to you at the time of such use or purchase.",
        moreInfo:  false,
    },
    {
        title: 'Updates to Our Terms',
        description: "We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.",
        moreInfo:  false,
    },
    {
        title: 'Intellectual Property',
        description: "Our platform and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by us, its licensors or other providers of such material and are protected by and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of us, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.",
        moreInfo:  false,
    },
    {
        title: 'Agreement to Arbitrate',
        description: "This section applies to any dispute EXCEPT IT DOESNT INCLUDE A DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR 's INTELLECTUAL PROPERTY RIGHTS. The term 'dispute' means any dispute, action, or other controversy between you and us concerning the Services or this agreement, whether in contract, warranty, tort, statute, regulation, ordinance, or any other legal or equitable basis. 'Dispute' will be given the broadest possible meaning allowable under law.",
        moreInfo:  false,
    },
    {
        title: 'Notice of Dispute',
        description: "In the event of a dispute, you or us must give the other a Notice of Dispute, which is a written statement that sets forth the name, address, and contact information of the party giving it the facts giving rise to the dispute, and the relief requested. You must send any Notice of Dispute via email to: . We will send any Notice of Dispute to you by mail to your address if we have it, or otherwise to your email address. You and us will attempt to resolve any dispute through informal negotiation within sixty (60) days from the date the Notice of Dispute is sent. After sixty (60) days, you or us may commence arbitration.",
        moreInfo:  false,
    },
    {
        title: 'Binding Arbitration',
        description: "If you and us don't resolve any dispute by informal negotiation, any other effort to resolve the dispute will be conducted exclusively by binding arbitration as described in this section. You are giving up the right to litigate (or participate in as a party or class member) all disputes in court before a judge or jury. The dispute shall be settled by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. Either party may seek any interim or preliminary injunctive relief from any court of competent jurisdiction, as necessary to protect the party's rights or property pending the completion of arbitration. Any and all legal, accounting, and other costs, fees, and expenses incurred by the prevailing party shall be borne by the non-prevailing party.",
        moreInfo:  false,
    },
    {
        title: 'Submissions and Privacy',
        description: "In the event that you submit or post any ideas, creative suggestions, designs, photographs, information, advertisements, data or proposals, including ideas for new or improved products, services, features, technologies or promotions, you expressly agree that such submissions will automatically be treated as non-confidential and non-proprietary and will become the sole property of us without any compensation or credit to you whatsoever. We and our affiliates shall have no obligations with respect to such submissions or posts and may use the ideas contained in such submissions or posts for any purposes in any medium in perpetuity, including, but not limited to, developing, manufacturing, and marketing products and services using such ideas.",
        moreInfo:  false,
    },
    {
        title: 'Promotions',
        description: "We may, from time to time, include contests, promotions, sweepstakes, or other activities (*Promotions) that require you to submit material or information concerning yourself. Please note that all Promotions may be governed by separate rules that may contain certain eligibility requirements, such as restrictions as to age and geographic location. You are responsible to read all Promotions rules to determine whether or not you are eligible to participate. If you enter any Promotion, you agree to abide by and to comply with all Promotions Rules. Additional terms and conditions may apply to purchases of goods or services on or through the Services, which terms and conditions are made a part of this Agreement by this reference.",
        moreInfo:  false,
    },
    {
        title: 'Typographical Errors',
        description: "In the event a product and/or service is listed at an incorrect price or with incorrect information due to typographical error, we shall have the right to refuse or cancel any orders placed for the product and/ or service listed at the incorrect price. We shall have the right to refuse or cancel any such order whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is canceled, we shall immediately issue a credit to your credit card account or other payment account in the amount of the charge.",
        moreInfo:  false,
    },
    {
        title: 'Miscellaneous',
        description: "If for any reason a court of competent jurisdiction finds any provision or portion of these Terms & Conditions to be unenforceable, the remainder of these Terms & Conditions will continue in full force and effect. Any waiver of any provision of these Terms & Conditions will be effective only if in writing and signed by an authorized representative of us. We will be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. We operate and control our Service from our offices in The Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. Accordingly, those persons who choose to access our Service from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. These Terms & Conditions (which include and incorporate our Privacy Policy) contains the entire understanding, and supersedes all prior understandings, between you and us concerning its subject matter, and cannot be changed or modified by you. The section headings used in this Agreement are for convenience only and will not be given any legal import.",
        moreInfo:  false,
    },
    {
        title: 'Disclaimer',
        description: (<span>We are not responsible for any content, code or any other imprecision. We do not provide warranties or guarantees. In no event shall we be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. We reserve the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.<br/><br/> Our Service and its contents are provided 'as is' and 'as available' without any warranty or representations of any kind, whether express or implied. We are a distributor and not a publisher of the content supplied by third parties, as such, our exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via our Service. Without limiting the foregoing, We specifically disclaim all warranties and representations in any content transmitted on or in connection with our Service or on sites that may appear as links on our Service, or in the products provided as a part of, or otherwise in connection with, our Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by us or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, we do not warrant that our Service will be uninterrupted, uncorrupted, timely, or error-free.</span>),
        moreInfo:  false,
    },
    {
        title: 'Contact Us',
        description: false,
        moreInfo: [
            {
                subDescription: "Don't hesitate to contact us if you have any questions.",
            },
            {
                subDescription: (<span><strong>Via Email: </strong>modernresolve@gmail.com</span>),
            },
            {
                subDescription: (<span><strong>Via Phone Number: </strong>+63-945-560-2846</span>),
            },
            {
                subDescription: (<span><strong>Via this Link: </strong>http:/modernresolve.com</span>),
            },
        ]
    },

];

export const privacyPolicyData = [
    {
        title: "Privacy Policy",
        description: (<span>We are not responsible for any content, code or any other imprecision. We do not provide warranties or guarantees. In no event shall we be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. We reserve the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.<br/><br/> Our Service and its contents are provided 'as is' and 'as available' without any warranty or representations of any kind, whether express or implied. We are a distributor and not a publisher of the content supplied by third parties, as such, our exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via our Service. Without limiting the foregoing, We specifically disclaim all warranties and representations in any content transmitted on or in connection with our Service or on sites that may appear as links on our Service, or in the products provided as a part of, or otherwise in connection with, our Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by us or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, we do not warrant that our Service will be uninterrupted, uncorrupted, timely, or error-free.</span>),
    }
]

export const adminSidebarData = [
    {
        title: 'Admin Overview',
        dropDown: false,
    },
    {
        title: 'User Management',
        dropDown: false,
    },
    {
        title: 'Ecommerce',
        dropDown: true,
    },
    {
        title: 'Client Profiles',
        dropDown: false,
    },
    {
        title: 'Transactions',
        dropDown: false,
    }
]