// Import the necessary interfaces from your types folder
import type {
    MarketingPageContent,
    AppAppBar,
    Hero,
    Feature,
    Highlights,
    Pricing,
    Faq,
    Footer,
    NavigationItem,
    EmailInput,
    FeatureItem,
    HighlightItem,
    PricingTier,
    FaqItem,
    NavigationList,
    Copyright,
    SocialLink
} from '../types/content.ts';

// hero images
import lightHeroImage from '/src/assets/images/hero/pexels-blue-bird-7210472.jpg';
import darkHeroImage from '/src/assets/images/hero/pexels-blue-bird-7210472.jpg';

// features images
import photoFeat1 from '/src/assets/images/features/pexels-blue-bird-7210727.jpg'; 
import photoFeat2 from '/src/assets/images/features/pexels-goochie-poochie-3299905.jpg';
import photoFeat3 from '/src/assets/images/features/pexels-pixabay-257519.jpg';

// features icons
// import { default as CalendarMonthRoundedIcon } from '@mui/icons-material/CalendarMonthRounded';
// import { default as PhotoCameraRoundedIcon } from '@mui/icons-material/PhotoCameraRounded';
// import { default as TrendingUpRoundedIcon } from '@mui/icons-material/TrendingUpRounded';
// import {
//   CalendarMonthRounded as CalendarMonthRoundedIcon,
//   PhotoCameraRounded as PhotoCameraRoundedIcon,
//   TrendingUpRounded as TrendingUpRoundedIcon,
// } from '@mui/icons-material';
/**
 * Mock data for the MarketingPage component.
 * This object conforms to the MarketingPage interface defined in src/types/contents.ts.
 */

export const forClientContent: MarketingPageContent = {
    pageVersion: "1.0.0-beta",


    appBar: {
        logoLink: "/",
        logoAltText: "logo",
        mainNavigationItems: [
            { id: "1", label: "Features", path: "#features" },
            { id: "2", label: "Highlights", path: "#highlights" },
            { id: "3", label: "Pricing", path: "#pricing" },
            { id: "4", label: "FAQ", path: "#faq" },
        ] as NavigationItem[],
        earlyAccessButton: { label: "Get Early Access", path: "/early-access", target: "_blank" } as NavigationItem,
    } as AppAppBar, // Type assertion for clarity, though TS infers if structure matches

    hero: {
        titlePrefix: "Your Pet Deserves the Best:",
        titleHighlight: "Trusted Care, Easy Booking.",
        description: "From quick potty breaks to extended adventures, find trusted pet sitters in Nottingham.",
        emailInput: {
            label: "Email",
            placeHolder: "your@example.com",
            ariaLabel: "Enter your email address to get started",
        } as EmailInput,
        primaryButton: { label: "Join the Waitlist", path: "/signup" , target: "_self"} as  NavigationItem,
        disclaimerPrefix: "By clicking \"Join the Waitlist\" you agree to our ",
        disclaimerLink: { label: "Terms & Conditions", path: "/terms", target: "_blank" } as NavigationItem,
        diclaimerSufix: ".",
        lightModeImageUrl: lightHeroImage, // Placeholder
        darkModeImageUrl: darkHeroImage,   // Placeholder
    } as Hero,    
    features: {
        headerTitle: "What Makes Us Different",
        headerDescription: "We are taskhunter, we're committed to providing not just excellent pet care, but also unparalleled convenience, trust, and peace of mind for you. Here's what sets us apart:",
        items:  [
            {
                icon: 'CalendarMonthRoundedIcon',
                title: "Easy Online Booking",
                description: "Schedule care effortlessly from anywhere, anytime. Our intuitive platform makes finding and booking the perfect sitter a breeze, so you can focus on what matters.",
                imageLightUrl: photoFeat1,
                imageDarkUrl: photoFeat1,
            },
            {
                icon: 'VerifiedUserRoundedIcon',
                title: "Verified & Trusted Sitters",
                description: "Your pet's safety and well-being are our top priority. Every sitter on our platform is thoroughly vetted, background-checked, and truly passionate about animals, giving you complete peace of mind.",
                imageLightUrl: photoFeat2,
                imageDarkUrl: photoFeat2,
            },
            {
                icon: 'PhotoCameraRounded',
                title: "Real-time Updates & Photos",
                description: "Stay connected with your furry friend, no matter where you are. Receive instant updates, GPS-tracked walk routes, and adorable photo 'pupdates' directly to your phone, so you're always in the loop.",
                imageLightUrl: photoFeat3,
                imageDarkUrl: photoFeat3,
            },
        ] as FeatureItem[],
    } as Feature,

    highlights: {
        title: "Highlights",
        subheader: "Discover the key advantages of our on-demand service, connecting you with trusted providers for convenient, personalized, and reliable care tailored to your needs.",
        items: [
            {
                iconName: "AccessTimeFilledRoundedIcon", // Example using Material Icons name
                title: "Convenience at Your Fingertips",
                description: "Effortlessly book trusted pet care, from quick pop-ins to adventurous walks, right from your phone. Our intuitive platform makes scheduling a breeze, giving you back precious time.",
            },
            {
                iconName: "VerifiedUserRoundedIcon",
                title: "Peace of Mind with Vetted Carers",
                description: "Rest assured knowing your beloved pets are in the hands of thoroughly vetted, background-checked, and passionate local caregivers. Safety and trustworthiness are our paramount promises.",
            },
            {
                iconName: "PetsRoundedIcon",
                title: "Personalized Care for Every Pet",
                description: "From playful puppies to serene seniors, and every unique critter in between, we offer tailored services designed to meet your pet's specific needs and your detailed instructions, ensuring their utmost comfort and happiness.",
            },
            {
                iconName: "CalendarMonthRoundedIcon", // Example using Material Icons name
                title: "Flexible Scheduling On-Demand",
                description: "Life's unpredictable, and your pet care shouldn't be rigid. Easily arrange spontaneous walks, recurring visits, or last-minute care adjustments to fit your dynamic schedule, all available on demand.",
            },
            {
                iconName: "MonetizationOnRoundedIcon",
                title: "Transparent & Fair Pricing",
                description: "Know exactly what you're paying for with clear, upfront pricing and no hidden fees. We believe quality pet care should be accessible and affordable, providing exceptional value.",
            },
            {
                iconName: "LocationOnRoundedIcon",
                title: "Local, Trusted Community",
                description: "Connect with dedicated and reliable pet care professionals right in your neighborhood. We foster a local ecosystem where trust and community support thrive, keeping your cherished pets happy and close to home.",
            },
        ] as HighlightItem[],
    } as Highlights,

    pricing: {
        title: "Simple & Transparent Pricing",
        subheader: "Choose the plan that best fits your needs, with no hidden fees.",
        tiers: [
            {
                title: "Free",
                subheader: "", // No subheader for free tier
                price: 0,
                billingCycle: "/month",
                description: [
                    "10 users included",
                    "2 GB of storage",
                    "Help center access",
                    "Email support",
                ],
                button: { label: "Sign Up for Free", path: "/signup/free" },
            },
            {
                title: "Pro",
                subheader: "Most Popular",
                price: 15,
                billingCycle: "/month",
                description: [
                    "20 users included",
                    "10 GB of storage",
                    "Priority email support",
                    "Help center access",
                    "Dedicated account manager",
                ],
                button: { label: "Get Started", path: "/signup/pro" },
            },
            {
                title: "Enterprise",
                subheader: "",
                price: 30, // Example, typically custom pricing
                billingCycle: "/month",
                description: [
                    "Unlimited users",
                    "Unlimited storage",
                    "Phone & email support",
                    "Custom integrations",
                    "SLA & dedicated infrastructure",
                ],
                button: { label: "Contact Us", path: "/contact" },
            },
        ] as PricingTier[],
    } as Pricing,

    faq: {
        title: "Frequently Asked Questions",
        faqs: [
            {
                question: "What is MyCompany?",
                answer: "MyCompany is a comprehensive data analytics platform designed to help businesses make informed decisions faster.",
            },
            {
                question: "How do I get started?",
                answer: "You can sign up for a free trial directly from our homepage. No credit card required to start!",
            },
            {
                question: "Is my data secure?",
                answer: "Yes, we prioritize your data security with industry-leading encryption and strict compliance protocols.",
            },
            {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time from your account settings.",
            },
        ] as FaqItem[],
    } as Faq,

    footer: {
        newsletterTitle: "Stay up to date",
        newsletterSubheader: "Subscribe to our newsletter for the latest product updates, news, and special offers.",
        subscribeButton: { label: "Subscribe", path: "/subscribe" } as NavigationItem,
        navList: [
            {

                title: "Product",
                navItems: [
                    { label: "Features", path: "/features" },
                    { label: "Testimonials", path: "/testimonials" },
                    { label: "Highlights", path: "/highlights" },
                    { label: "Pricing", path: "/pricing" },
                    { label: "FAQs", path: "/faq" }
                ] as NavigationItem[],
            },
            {
                title: "Company",
                navItems: [
                    { label: "About Us", path: "/about" },
                    { label: "Careers", path: "/careers" },
                    { label: "Press", path: "/press" },
                ] as NavigationItem[],
            },
            {
                title: "Legal",
                navItems: [
                    { label: "Terms", path: "/terms" },
                    { label: "Privacy", path: "/privacy" },
                    { label: "Contact", path: "/contact" },
                ] as NavigationItem[],
            }
        ] as NavigationList[],
        privacyPolicy: { label: "Privacy Policy", path: "/privacy" } as NavigationItem,
        termsOfService: { label: "Terms of Service", path: "/terms" } as NavigationItem,
        copyright: {
            prefix: "© ",
            companyName: { label: "MyCompany Inc.", path: "/" } as NavigationItem,
            year: new Date().getFullYear().toString(),
        } as Copyright,
        socials: [
            { icon: "X_icon", link: "https://twitter.com/mycompany" }, // Placeholder for icon name (e.g., Twitter icon)
            { icon: "LinkedIn_icon", link: "https://linkedin.com/company/mycompany" },
            { icon: "Facebook_icon", link: "https://facebook.com/mycompany" },
        ] as SocialLink[],
    } as Footer,
};

// You can export other content objects here if needed for other components/pages
// export const anotherComponentContent: AnotherComponentInterface = { ... };