package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.service.ColumnService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(value = "*")
public class ColumnController {

    @Autowired
    ColumnService columnService;

    @Autowired
    private MyResponseUtility response;

//    @GetMapping(path = "/api/v1/column")
//    public ResponseEntity<MyResponseUtility> index() {
//        response.data = boardService.getAll();
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }

    @GetMapping(path = "/api/v1/tasksbycolumn/{id}")
    public ResponseEntity<MyResponseUtility> getTasksByColumnId(@PathVariable(value = "id") Integer id) {
        response.data = columnService.getTasksByColumn(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
