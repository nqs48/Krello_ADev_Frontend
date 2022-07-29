package org.sofka.mykrello.model.service;

import java.util.List;
import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.service.interfaces.LogServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LogService implements LogServiceInterface {

    @Autowired
    LogRepository logRepository;

    @Override
    public List<LogDomain> findById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    @Transactional
    public LogDomain create(LogDomain log) {
        return logRepository.save(log);
    }
}
