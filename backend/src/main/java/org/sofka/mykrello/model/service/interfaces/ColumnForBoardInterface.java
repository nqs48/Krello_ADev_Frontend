package org.sofka.mykrello.model.service.interfaces;
import org.sofka.mykrello.model.domain.ColumnForBoardDomain;
import org.sofka.mykrello.model.domain.TaskDomain;

import java.util.List;

public interface ColumnForBoardInterface {

    ColumnForBoardDomain getColumnForBoardById(Integer idColumn);

    List<TaskDomain> getTasksByColumn(Integer idColumn);
}
