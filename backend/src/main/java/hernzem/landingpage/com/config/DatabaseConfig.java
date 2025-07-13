package hernzem.landingpage.com.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import hernzem.landingpage.com.util.ReadFile;


@Configuration
public class DatabaseConfig {

    @Value("${spring.datasource.host}")
    private String host;

    @Value("${spring.datasource.port}")
    private String port;
    
    @Value("${spring.datasource.database}")
    private String database;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String postgresPasswordFilePath;

    @Bean
    public DataSource dataSource() {
        String url = "jdbc:postgresql://" + host + ":" + port + "/" + ReadFile.readFile(database);
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setUrl(url);
        dataSource.setUsername((ReadFile.readFile(username)));
        dataSource.setPassword(ReadFile.readFile(postgresPasswordFilePath));
        return dataSource;
    }    
}
