package org.sofka.mykrello.model.domain;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ColumnDomain.class, cascade = CascadeType.DETACH)
    @JoinColumn(name = "clm_id_column")
    @JsonBackReference(value = "task-by-column")
    private ColumnDomain columnTask;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = BoardDomain.class, optional = false, cascade = CascadeType.DETACH)
    @JoinColumn(name = "brd_id_board")
    @JsonBackReference(value = "tasksByBoard")
    private BoardDomain boardTask;

    @Column(name = "tsk_name",nullable = false,length = 100)
    private String nameTask;

    @Column(name = "tsk_description",length = 2000)
    private String descriptionTask;

    @Column(name ="tsk_delivery_date")
    private Instant deliveryTask;

    @Column(name = "tsk_created_at", nullable = false, updatable = false)
    private Instant createdAtTask = Instant.now();

    @Column(name = "tsk_updated_at")
    private Instant updatedAtTask;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = LogDomain.class, cascade = CascadeType.ALL, mappedBy = "task")
    @JsonManagedReference(value = "taskLog")
    private List<LogDomain> taskLogs = new ArrayList<>();



}
