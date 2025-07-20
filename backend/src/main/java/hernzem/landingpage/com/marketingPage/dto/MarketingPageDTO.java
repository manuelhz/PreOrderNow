package hernzem.landingpage.com.marketingPage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MarketingPageDTO {
    private String pageVersion;
    private AppAppBarDTO appBar;
    private HeroDTO hero;
    private FeaturesDTO features;
    private HighlightsDTO highlights;
    private PricingDTO pricing;
    private FaqDTO faq;
    private FooterDTO footer;
}
