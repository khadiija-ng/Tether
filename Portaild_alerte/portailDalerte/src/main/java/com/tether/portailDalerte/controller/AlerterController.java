package com.tether.portailDalerte.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.tether.portailDalerte.model.Alerter;
import com.tether.portailDalerte.service.AlerterService;

@RestController
@RequestMapping("/portail")
public class AlerterController {
    @Autowired
    private AlerterService service;

    @PostMapping("/alerte/add")
    @CrossOrigin(origins = "*")
    public String addNewAlerte(@RequestBody Alerter alerte) {
        return service.saveAlerter(alerte);
    }

    @GetMapping("/alerte/all")
    @CrossOrigin(origins = "*")
    public List<Alerter> getAllAlertes() {
        return service.allAlerte();
    }

    @GetMapping("/alerte/{id}")
    @CrossOrigin(origins = "*")
    public Alerter getAlerter(@PathVariable int id) {
        return service.getAlerte(id);
    }

    @PutMapping("/alerte/update/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Map<String, String>> updateAlerte(@PathVariable int alerterId,
            @RequestBody Alerter ps) {
        Map<String, String> response = new HashMap<>();

        try {
            service.updateAlerte(alerterId, ps);
            response.put("message", "Alerte mis à jour avec succès");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("error", "Erreur : " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @DeleteMapping("/alerte/{id}")
    @CrossOrigin(origins = "*")
    public void deleteAlerte(@PathVariable("id") int id) {
        service.deleteAlerte(id);
    }



}
