package ca.sheridancollege.kaushipr.beans;

import org.springframework.data.mongodb.core.mapping.Document;


import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Entity
@Document
public class Student {
	
	@Id
	private Long id;
	private String name;

}
