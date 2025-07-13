package hernzem.landingpage.com.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import hernzem.landingpage.com.model.Hello;
import hernzem.landingpage.com.service.HelloService;

@Component
public class SeedData implements CommandLineRunner {

    @Autowired
    HelloService helloService;

    @Override
    public void run(String... args) throws Exception {
        
        Hello hello = new Hello();
        hello.setMessage("Hello Database!");
        helloService.save(hello);
    }
    
}
