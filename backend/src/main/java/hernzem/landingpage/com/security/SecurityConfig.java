package hernzem.landingpage.com.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // React app's URL
        configuration.setAllowedOrigins(Arrays.asList("http:/localhost:3000"));

        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // Allow all headers
        configuration.setAllowedHeaders(Arrays.asList("*"));

        // Important if sending cookies or auth headers with the request
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        // Apply to all paths
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
    @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                // Disable CSRF protection for stateless APIs (common and after neccesary with React)
                .csrf(AbstractHttpConfigurer::disable)

                // enable cors support using CorsConfigurationSource bean created
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                // This explicitly tells Spring Security not to create or use HTTP sessions.
                // This is a good practice for REST APIs, as it aligns with the stateless nature of
                // token-based authentication (like JWTs) that I will introduce later.
                // While not strictly necessary if you have permitAll(), it's harmless and sets a 
                // good foundation.
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                
                .authorizeHttpRequests(
                    authorize -> authorize
                                        .anyRequest()
                                        
                                        // Allow all request without authentication
                                        .permitAll()
                );
            return http.build();
        }
}
