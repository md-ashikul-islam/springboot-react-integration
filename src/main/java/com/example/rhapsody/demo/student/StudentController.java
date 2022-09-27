package com.example.rhapsody.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;
import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudents(){
        return List.of(
                new Student(UUID.randomUUID(),"Ashikul","Islam","ashikul005@gmail.com",Student.Gender.MALE),
                new Student(UUID.randomUUID(),"Maymuna","Rukaiya","rukaiyamaymuna@gmail.com",Student.Gender.FEMALE)

        );
    }
}
