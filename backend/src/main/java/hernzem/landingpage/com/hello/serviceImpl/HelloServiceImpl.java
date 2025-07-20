package hernzem.landingpage.com.hello.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hernzem.landingpage.com.hello.model.Hello;
import hernzem.landingpage.com.hello.repository.HelloRepository;
import hernzem.landingpage.com.hello.service.HelloService;

@Service("helloService")
public class HelloServiceImpl implements HelloService {
    
    @Autowired
    private HelloRepository helloRepository;

    @Override
    public Hello save(Hello hello) {
        return helloRepository.save(hello);
    }

    @Override
    public Hello findFirstByIdDesc() {
        return helloRepository.findFirstByOrderByIdDesc();
    }    
}
