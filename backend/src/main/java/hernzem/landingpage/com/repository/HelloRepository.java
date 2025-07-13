package hernzem.landingpage.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hernzem.landingpage.com.model.Hello;

public interface HelloRepository extends JpaRepository <Hello, Long> {

    Hello findFirstByOrderByIdDesc();
    
}
