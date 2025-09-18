package com.tether.portailDalerte.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tether.portailDalerte.model.TypeAlerte;
import com.tether.portailDalerte.repository.TypeAlerteRepository;

@Service
public class TypeAlerteService {
    @Autowired
    private TypeAlerteRepository repository;
    public String saveTypeAlerte(TypeAlerte ta) {
        repository.save(ta);
        return "Type d'alerte ajouté avec succès";
    }

    public List<TypeAlerte> getAllTypeAlerte() {
        return repository.findAll();
    }

    public Optional<TypeAlerte> getTypeAlerteById(int typeAlerteId) {
        return repository.findById(typeAlerteId);
    }
    public TypeAlerte updateTypeAlerte(int id, TypeAlerte typeAlerte) {
        Optional<TypeAlerte> optionalTa = repository.findById(id);
        if (optionalTa.isPresent()) {
            TypeAlerte ta = optionalTa.get();
            ta.setTypeAlerteName(typeAlerte.getTypeAlerteName());
            ta.setTypeAlerteDescription(typeAlerte.getTypeAlerteDescription());
            return repository.save(ta);
        }
        return null;
    }
    public void deleteTypeAlerte(int id) {
        repository.deleteById(id);
    }
}