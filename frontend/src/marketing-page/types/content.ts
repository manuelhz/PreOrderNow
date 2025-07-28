// import type { SvgIconComponent } from "@mui/icons-material";
// import type { SvgIconProps } from "@mui/material";


// AppAppBarDto
export interface NavigationItem {
    id: string;
    label: string;
    path: string;
    target?: string; // optional "_blank" for opening in a new tab
}
export interface AppAppBar {
    logoLink: string;
    logoAltText: string;
    mainNavigationItems: NavigationItem[];
    earlyAccessButton: NavigationItem;
}

// Hero
export interface EmailInput {
    label: string; // e.g. "Email" (viauslly hidden)
    placeHolder: string; // eg. "Your email address"
    ariaLabel: string; //  e.g., "Enter your email address"
}
export interface Hero {
    // Main Heading Section
    titlePrefix: string; // e.g., "Our latest"
    titleHighlight: string; // e.g., "products"
    description: string; // e.g., "Explore our cutting-edge dashboard..."

    // Call to action section
    emailInput: EmailInput; // Nested object for email input details
    primaryButton: NavigationItem; // eg. "Start now"

    // Disclaimer/Caption section
    disclaimerPrefix: string; // e.g., "By clicking \"Start now\" you agree to our "
    disclaimerLink: NavigationItem; // Nested object for the "Terms & Conditions" link
    diclaimerSufix: string; // e.g., "."

    // Hero image URLs (for light and dark mode)
    lightModeImageUrl: string;
    darkModeImageUrl: string;
}

// Feature
export interface FeatureItem {
    icon: string;
    title: string;
    description: string;
    imageLightUrl: string;
    imageDarkUrl: string;
}
export interface Feature {
    headerTitle: string;
    headerDescription: string;
    items: FeatureItem[];
}

//Highlight
export interface HighlightItem {
  iconName: string;
  title: string;
  description: string;
}
export interface Highlights {
  title: string;
  subheader: string;
  items: HighlightItem[];
}

//Pricing
export interface PricingTier {
  title: string;
  subheader: string; // only one will be the one recommended or most popular and the others will not have it
  price: number; // assuming BigDecimal is represented as a number
  billingCycle: string; // one-time purchase, etc.
  description: string[];
  button: NavigationItem;
}
export interface Pricing {
  title: string;
  subheader: string;
  tiers: PricingTier[];
}

//FAQ
export interface FaqItem {
  question: string;
  answer: string;
}
export interface Faq {
  title: string;
  faqs: FaqItem[];
}

// Footer
export interface NavigationList {
  title: string;
  navItems: NavigationItem[];
}

export interface Copyright {
  prefix: string;
  companyName: NavigationItem;
  year: string;
}

export interface SocialLink {
  icon: string;
  link: string;
}
export interface Footer {
  newsletterTitle: string;
  newsletterSubheader: string;
  subscribeButton: NavigationItem;
  navList: NavigationList[];
  privacyPolicy: NavigationItem;
  termsOfService: NavigationItem;
  copyright: Copyright;
  socials: SocialLink[];
}

// MarketingPage
export interface MarketingPageContent {
  pageVersion: string;
  appBar: AppAppBar;
  hero: Hero;
  features: Feature;
  highlights: Highlights;
  pricing: Pricing;
  faq: Faq;
  footer: Footer;
}