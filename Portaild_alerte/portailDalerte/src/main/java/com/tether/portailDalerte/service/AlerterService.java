package com.tether.portailDalerte.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tether.portailDalerte.model.Alerter;
import com.tether.portailDalerte.repository.AlerterRepository;

@Service
public class AlerterService {

    @Autowired
    private AlerterRepository repository;

    public String saveAlerter(Alerter al) {
        repository.save(al);
        return "Alerter ajouté avec succés";
    }

    public List<Alerter> allAlerte() {
        return repository.findAll();
    }

    public Alerter getAlerte(int id) {
        Alerter al = repository.getAlerteByAlerterId(id);
        return al;
    }

    public Alerter updateAlerte(int id, Alerter al) {
        Alerter alerte = repository.getAlerteByAlerterId(id);
        alerte.setDateDesFaits(al.getDateDesFaits());
        alerte.setLieuDesFaits(al.getLieuDesFaits());
        alerte.setTypeAlerte(al.getTypeAlerte());
        alerte.setPreuves(al.getPreuves());
        alerte.setStatus(al.getStatus());
        alerte.setAnonyme(al.isAnonyme());
        alerte.setMessage(al.getMessage());
        return alerte;
    }

    public void deleteAlerte(int id){
        Alerter al=repository.getAlerteByAlerterId(id);
        repository.delete(al);
    }

}
