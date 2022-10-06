package com.example.rhapsody.demo.student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class StudentService {

    public List<Student> getAllStudents(){
        return List.of(
                new Student(UUID.randomUUID(),"Ashikul","Islam","ashikul005@gmail.com",Student.Gender.MALE),
                new Student(UUID.randomUUID(),"Maymuna","Rukaiya","rukaiyamaymuna@gmail.com",Student.Gender.FEMALE)

        );
    }
}
