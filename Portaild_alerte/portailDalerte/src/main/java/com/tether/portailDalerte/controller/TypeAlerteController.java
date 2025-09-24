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

import com.tether.portailDalerte.model.TypeAlerte;
import com.tether.portailDalerte.service.TypeAlerteService;

@RestController
@RequestMapping("/portail")
public class TypeAlerteController {

    @Autowired
    private TypeAlerteService service;

    @PostMapping("/typeAlerte/add")
    @CrossOrigin(origins = "*")
    public String addTypeAlerte(@RequestBody TypeAlerte ta) {
        return service.saveTypeAlerte(ta);
    }

    @GetMapping("/typeAlerte/all")
    @CrossOrigin(origins = "*")
    public List<TypeAlerte> getAllTypeAlertes() {
        return service.getAllTypeAlerte();
    }

    @GetMapping("/typeAlerte/{id}")
    @CrossOrigin(origins = "*")
    public TypeAlerte getTypeAlerte(@PathVariable int id) {
        return service.getTypeAlerteById(id);
    }

    @PutMapping("/typeAlerte/update/{id}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Map<String, String>> updateTypeAlerte(@PathVariable int id, @RequestBody TypeAlerte ta) {
        Map<String, String> response = new HashMap<>();
        TypeAlerte updatedTypeAlerte = service.updateTypeAlerte(id, ta);
        if (updatedTypeAlerte != null) {
            response.put("message", "Type d'alerte mis à jour avec succès");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "Type d'alerte non trouvé");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @DeleteMapping("/typeAlerte/{id}")
    @CrossOrigin(origins = "*")
    public void deleteTypeAlerte(@PathVariable("id") int id) {
        service.deleteTypeAlerte(id);
    }
}