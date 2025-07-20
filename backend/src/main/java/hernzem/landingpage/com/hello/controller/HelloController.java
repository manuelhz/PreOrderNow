package hernzem.landingpage.com.hello.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hernzem.landingpage.com.hello.service.HelloService;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("api/v1")
@Tag(name = "Hello Conbtroller", description = "Controller for Hello")

public class HelloController {

    @Autowired
    HelloService helloService;

    @GetMapping("/helloSpring")
    public String hello() {
        return "Hello Spring Boot!";
    }

    @GetMapping("/helloReact")
    public String helloReact() {
        return helloService.findFirstByIdDesc().getMessage();
    }
    
}
