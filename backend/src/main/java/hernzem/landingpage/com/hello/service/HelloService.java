package hernzem.landingpage.com.hello.service;

import org.springframework.stereotype.Service;

import hernzem.landingpage.com.hello.model.Hello;

@Service("helloService")
public interface HelloService {

    public Hello save(Hello hello);

    public Hello findFirstByIdDesc();

}
