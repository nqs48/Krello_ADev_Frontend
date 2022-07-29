package org.sofka.mykrello.model.service.interfaces;
import org.sofka.mykrello.model.domain.TaskDomain;

import java.util.List;

public interface ColumnForBoardInterface {

    List<TaskDomain> getTasksByColumn(Integer idColumn);
}
