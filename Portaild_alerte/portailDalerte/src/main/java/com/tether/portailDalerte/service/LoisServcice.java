package com.tether.portailDalerte.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tether.portailDalerte.model.Loi;
import com.tether.portailDalerte.repository.LoiRepository;

@Service
public class LoisServcice {

    @Autowired
    private LoiRepository repository;

    public String addLoi(Loi loi){
        repository.save(loi);
        return "Loi ajouté avec succés";
    }

    public Loi getLoi(int id){
        Loi loi = repository.getLoiById(id);
        return loi;
    }
    public List<Loi> getAllLois(){
        return repository.findAll();
    }

    public Loi upadateLoi(int id, Loi loi){
        Loi lastLoi=repository.getLoiById(id);
        lastLoi.setTitre(loi.getTitre());
        lastLoi.setDescription(loi.getDescription());
        lastLoi.setFichiers(loi.getFichiers());
        return lastLoi;
    }

    public void deleteLoi(int id){
        Loi loi=repository.getLoiById(id);
        repository.delete(loi);
    }
}
