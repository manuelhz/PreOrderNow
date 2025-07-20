package hernzem.landingpage.com.hello.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hernzem.landingpage.com.hello.model.Hello;

public interface HelloRepository extends JpaRepository <Hello, Long> {

    Hello findFirstByOrderByIdDesc();
    
}
