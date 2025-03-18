package ca.sheridancollege.kaushipr.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import ca.sheridancollege.kaushipr.beans.Student;

public interface StudentRepository extends MongoRepository<Student, Long> {

}
