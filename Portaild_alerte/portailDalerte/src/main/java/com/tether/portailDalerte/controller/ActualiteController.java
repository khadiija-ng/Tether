package com.tether.portailDalerte.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tether.portailDalerte.model.Actualite;
import com.tether.portailDalerte.service.ActualiteService;

@RestController
@RequestMapping("/portail")
public class ActualiteController {
    @Autowired
    private ActualiteService service;

    @PostMapping("/actualites/add")
    @CrossOrigin(origins = "*")
    public String addActualite(@RequestBody Actualite actualite) {
        service.createActualite(actualite); 
        return "Actualité ajoutée avec succès";
    }

    @GetMapping("/actualites/all")
    @CrossOrigin(origins = "*")
    public List<Actualite> getAllActualites() {
        return service.getAllActualites();
    }

    @GetMapping("/actualites/{id}")
    @CrossOrigin(origins = "*")
    public Optional<Actualite> getActualite(@PathVariable int id) {
        return service.getActualiteById(id);
    }

    @PutMapping("/actualites/update/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Map<String, String>> updateActualite(@PathVariable int id, @RequestBody Actualite actualite) {
        Map<String, String> response = new HashMap<>();
        Actualite updatedActualite = service.updateActualite(id, actualite);
        if (updatedActualite != null) {
            response.put("message", "Actualité mise à jour avec succès");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "Actualité non trouvée");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @DeleteMapping("/actualites/{id}")
    @CrossOrigin(origins = "*")
    public void deleteActualite(@PathVariable("id") int id) {
        service.deleteActualite(id);
    }
}