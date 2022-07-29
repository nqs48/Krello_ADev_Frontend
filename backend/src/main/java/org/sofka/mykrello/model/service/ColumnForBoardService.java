//package org.sofka.mykrello.model.service;
//
//import org.sofka.mykrello.model.domain.TaskDomain;
//import org.sofka.mykrello.model.repository.ColumnForBoardRepository;
//import org.sofka.mykrello.model.service.interfaces.ColumnForBoardInterface;
//import org.springframework.beans.factory.annotation.Autowired;
//import java.util.List;
//
//public class ColumnForBoardService implements ColumnForBoardInterface {
//
//    @Autowired
//    ColumnForBoardRepository columnForBoardRepository;
//
//    @Override
//    public List<TaskDomain> getTasksByColumn(Integer idColumn) {
//        return columnForBoardRepository.findAll();
//    }
//}
