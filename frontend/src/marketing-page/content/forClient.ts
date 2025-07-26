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

/**
 * Mock data for the MarketingPage component.
 * This object conforms to the MarketingPage interface defined in src/types/contents.ts.
 */
export const forClientContent: MarketingPageContent = {
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
        earlyAccessButton: { label: "Early Access", path: "/signup", target: "_blank" } as NavigationItem,
    } as AppAppBar, // Type assertion for clarity, though TS infers if structure matches

    hero: {
        titlePrefix: "Unlock the Power of",
        titleHighlight: "Your Data",
        description: "Our cutting-edge dashboard transforms raw data into actionable insights, helping you make informed decisions effortlessly. Join us now and revolutionize your workflow.",
        emailInput: {
            label: "Email",
            placeHolder: "your@example.com",
            ariaLabel: "Enter your email address to get started",
        } as EmailInput,
        primaryButton: { label: "Start Free Trial", path: "/signup" , target: "_self"} as  NavigationItem,
        disclaimerPrefix: "By clicking \"Start Free Trial\" you agree to our ",
        disclaimerLink: { label: "Terms & Conditions", path: "/terms", target: "_blank" } as NavigationItem,
        diclaimerSufix: ".",
        lightModeImageUrl: "/images/hero-light.webp", // Placeholder
        darkModeImageUrl: "/images/hero-dark.webp",   // Placeholder
    } as Hero,

    features: {
        headerTitle: "Product Features",
        headerDescription: "Discover how our platform empowers you with intelligent tools and seamless integration.",
        items: [
            {
                icon: "monitoring", // Material UI icon name or custom SVG path
                title: "Advanced Analytics",
                description: "Gain deep insights with customizable dashboards and real-time data visualization.",
                imageLightUrl: "/images/feature1-light.webp",
                imageDarkUrl: "/images/feature1-dark.webp",
            },
            {
                icon: "security",
                title: "Robust Security",
                description: "Your data is protected with enterprise-grade encryption and compliance standards.",
                imageLightUrl: "/images/feature2-light.webp",
                imageDarkUrl: "/images/feature2-dark.webp",
            },
            {
                icon: "settings_suggest",
                title: "Effortless Customization",
                description: "Tailor the platform to your specific needs with flexible settings and integrations.",
                imageLightUrl: "/images/feature3-light.webp",
                imageDarkUrl: "/images/feature3-dark.webp",
            },
        ] as FeatureItem[],
    } as Feature,

    highlights: {
        title: "Why Choose Our Platform?",
        subheader: "Experience the difference with a solution built for speed, scalability, and user satisfaction.",
        items: [
            {
                iconName: "rocket_launch", // Example using Material Icons name
                title: "Blazing Fast Performance",
                description: "Optimized for speed, ensuring your operations run smoothly and efficiently.",
            },
            {
                iconName: "scale",
                title: "Scalable Infrastructure",
                description: "Grow without limits. Our platform scales with your business needs, big or small.",
            },
            {
                iconName: "support_agent",
                title: "Dedicated Support",
                description: "Access 24/7 expert support to help you every step of the way.",
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