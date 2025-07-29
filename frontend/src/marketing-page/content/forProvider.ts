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
} from '../types/content.ts'; // Adjust path if your 'types' folder is elsewhere

// hero images
import lightHeroImage from '/src/assets/images/hero/pexels-blue-bird-7210472.jpg';
import darkHeroImage from '/src/assets/images/hero/pexels-blue-bird-7210472.jpg';

// features images
import photoFeat1 from '/src/assets/images/features/pexels-blue-bird-7210727.jpg'; 
import photoFeat2 from '/src/assets/images/features/pexels-goochie-poochie-3299905.jpg';
import photoFeat3 from '/src/assets/images/features/pexels-pixabay-257519.jpg';


export const forProviderContent: MarketingPageContent = {
    pageVersion: "1.0.0-beta",

    appBar: {
        logoLink: "/",
        logoAltText: "MyCompany Logo",
        mainNavigationItems: [
            { id: "1", label: "Features", path: "#features" },
            { id: "2", label: "Highlights", path: "#highlights" },
            { id: "3", label: "Pricing", path: "#pricing" },
            { id: "4", label: "FAQ", path: "#faq" },
        ] as NavigationItem[],
        earlyAccessButton: { label: "Get Early Access", path: "/early-access", target: "_blank" } as NavigationItem,
    } as AppAppBar, // Type assertion for clarity, though TS infers if structure matches

    hero: {
        titlePrefix: "Monetize Your Passion:",
        titleHighlight: "Join Our Network of Top Pet Carers.",
        description: "Streamline your bookings, expand your reach, and build your reputation with taskhunter.",
        emailInput: {
            label: "Email",
            placeHolder: "your@example.com",
            ariaLabel: "Enter your email address to get started",
        } as EmailInput,
        primaryButton: { label: "Start Earning", path: "/signup" } as  NavigationItem,
        disclaimerPrefix: "By clicking \"Start Earning\" you agree to our ",
        disclaimerLink: { label: "Terms & Conditions", path: "/terms", target: "_blank" } as NavigationItem,
        diclaimerSufix: ".",
        lightModeImageUrl: lightHeroImage, // Placeholder
        darkModeImageUrl: darkHeroImage,   // Placeholder
    } as Hero,

    features: {
        headerTitle: "For Our Valued Providers: Grow Your Pet Care Business with Us",
        headerDescription: "We believe that empowering pet care professionals is key to happy pets and satisfied owners. [Your Company Name] provides you with the tools and support to streamline your operations, attract more clients, and focus on what you do best – providing exceptional care.",
        items: [
            {
                icon: "ConnectWithoutContactRoundedIcon", // Material UI icon name or custom SVG path
                title: "Automated Lead Generation",
                description: "Spend less time searching for clients and more time doing what you love. Our platform connects you directly with pet owners in your area actively seeking your services, helping you fill your calendar effortlessly.",
                imageLightUrl: photoFeat1,
                imageDarkUrl: photoFeat1,
            },
            {
                icon: "CalendarMonthRoundedIcon",
                title: "Effortless Scheduling & Booking",
                description: "Say goodbye to phone tag and manual bookings. Manage your availability, accept new requests, and send automated confirmations and reminders—all from one intuitive dashboard. It's pet care management, simplified.",
                imageLightUrl: photoFeat2,
                imageDarkUrl: photoFeat2,
            },
            {
                icon: "PaymentsRoundedIcon",
                title: "Secure & Timely Payments",
                description: "Focus on providing excellent care, not on invoicing. Our secure payment system ensures you're paid reliably and promptly for every service, directly deposited into your account, giving you financial peace of mind.",
                imageLightUrl: photoFeat3,
                imageDarkUrl: photoFeat3,
            },
            {
                icon: "AccountCircleRoundedIcon", // Material UI icon name or custom SVG path
                title: "Enhanced Visibility & Profile Management",
                description: "Showcase your unique skills and passion. Create a professional profile that highlights your services, experience, and glowing reviews, making it easy for pet parents to find and choose you from our community.",
                imageLightUrl: photoFeat1,
                imageDarkUrl: photoFeat1,
            },
            {
                icon: "SupportAgentRoundedIcon",
                title: "Dedicated Support & Resources",
                description: "You're never alone on your pet care journey. Access a wealth of resources, tips, and our responsive support team, ready to assist you with any questions or challenges, ensuring your success.",
                imageLightUrl: photoFeat2,
                imageDarkUrl: photoFeat2,
            },
            {
                icon: "ReviewsRoundedIcon",
                title: "Reputation Building Tools (Reviews)",
                description: "Build trust and attract more clients with a strong online reputation. Our integrated review system allows satisfied clients to share their positive experiences, boosting your credibility and visibility within our platform and beyond.",
                imageLightUrl: photoFeat3,
                imageDarkUrl: photoFeat3,
            },
        ] as FeatureItem[],
    } as Feature,

    highlights: {
        title: "Highlights",
        subheader: "Discover how our platform empowers pet care professionals with the tools and support needed to grow their business, manage their services efficiently, and connect with a thriving local client base.",
        items: [
            {
                iconName: "TuneRoundedIcon", // Example using Material Icons name
                title: "Streamlined Operations & Efficiency",
                description: "ay goodbye to administrative headaches. Our platform handles scheduling, client communication, and task management, freeing you to focus on providing top-tier pet care and growing your business.",
            },
            {
                iconName: "TrendingUpRoundedIcon",
                title: "Maximize Your Earning Potential",
                description: "Set your own competitive rates, offer diverse services, and efficiently fill your schedule. We connect you directly with local demand, helping you unlock your full earning capacity without traditional marketing costs.",
            },
            {
                iconName: "PeopleAltRoundedIcon",
                title: "Access to a Growing Client Base",
                description: "Tap into a readily available and expanding pool of pet owners in your local area actively seeking reliable and loving care. Expand your reach and acquire new clients effortlessly through our platform.",
            },
            {
                iconName: "StarRateRoundedIcon", // Example using Material Icons name
                title: "Build Your Professional Reputation",
                description: "aShowcase your expertise, passion, and reliability through verified reviews and ratings from satisfied clients. Our platform empowers you to establish trust, build a strong portfolio, and stand out as a premier pet care provider in your community.",
            },
            {
                iconName: "EventNoteRoundedIcon",
                title: "Flexible Scheduling & Autonomy",
                description: "You're in control of your career. Define your availability, choose the specific services you offer, and manage your workload to perfectly fit your personal lifestyle and commitments, achieving an ideal work-life balance.",
            },
            {
                iconName: "PaymentsRoundedIcon",
                title: "Secure & Timely Payments",
                description: "Rest easy knowing your hard-earned income is secure. Our integrated payment system ensures prompt, reliable, and transparent payouts for every completed service, directly deposited into your account, every single time.",
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