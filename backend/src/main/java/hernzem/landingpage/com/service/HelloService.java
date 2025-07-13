package hernzem.landingpage.com.service;

import org.springframework.stereotype.Service;

import hernzem.landingpage.com.model.Hello;

@Service("helloService")
public interface HelloService {

    public Hello save(Hello hello);

    public Hello findFirstByIdDesc();

}
