package com.tether.portailDalerte.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tether.portailDalerte.model.Actualite;
import com.tether.portailDalerte.repository.ActualiteRepository;

@Service
public class ActualiteService {

    @Autowired
    private ActualiteRepository actualiteRepository;

    public List<Actualite> getAllActualites() {
        return actualiteRepository.findAll();
    }


    public Optional<Actualite> getActualiteById(int id) {
        return actualiteRepository.findById(id);
    }

    
    public Actualite createActualite(Actualite actualite) {
        return actualiteRepository.save(actualite);
    }

    
    public Actualite updateActualite(int id, Actualite actualiteDetails) {
        
        Optional<Actualite> optionalActualite = actualiteRepository.findById(id);

        if (optionalActualite.isPresent()) {
            Actualite actualite = optionalActualite.get();
            
            actualite.setActualiteImage(actualiteDetails.getActualiteImage());
            actualite.setActualiteTitle(actualiteDetails.getActualiteTitle());
            actualite.setActualiteDescription(actualiteDetails.getActualiteDescription());
            actualite.setActualiteDate(actualiteDetails.getActualiteDate());

            return actualiteRepository.save(actualite);
        } else {
            return null; 
        }
    }
    public void deleteActualite(int id) {
        actualiteRepository.deleteById(id);
    }
}