package ca.sheridancollege.kaushipr.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ca.sheridancollege.kaushipr.beans.Student;
import ca.sheridancollege.kaushipr.repositories.StudentRepository;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class BootstrapData implements CommandLineRunner {
	
	private final StudentRepository studentRepo;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		Student student1 = Student.builder().id(1L).name("Alice").build();
		
		Student student2 = Student.builder().id(2L).name("Bob").build();
		
		
		studentRepo.save(student1);
		studentRepo.save(student2);

	}

}
