package hernzem.landingpage.com.marketingPage.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppAppBarDTO {

    // Logo/Sitemark related content
    private String logoLink; // The URL the Sitemark (logo) navigates to
    private String logoAltText; // Alt text for the logo image (good for accessiblity)

    // Main navigation items (Features, Footer, etc)
    private List<NavigationItem> mainNavigationItems;
    
    // Authentication buttons are replaced by Get Early Access button.
    private NavigationItem earlyAccessButton;

}
