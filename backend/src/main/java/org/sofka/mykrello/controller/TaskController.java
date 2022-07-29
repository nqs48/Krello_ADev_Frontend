package org.sofka.mykrello.controller;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.TaskService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(value = "*")
@RestController
public class TaskController {

    @Autowired
    private MyResponseUtility response;
    @Autowired
    private TaskService taskService;


    @PostMapping(path = "/api/v1/task")
    public ResponseEntity<MyResponseUtility> createTask(@RequestBody TaskDomain task) {

        response.data = taskService.create(task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> putTask(@PathVariable(value = "id") Integer id,
                                                 @RequestBody TaskDomain task) {
        response.data = taskService.update(id, task);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/api/v1/task/{id}")
    public ResponseEntity<MyResponseUtility> deleteTask(@PathVariable(value = "id") Integer id) {
        response.data = taskService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
