package com.tether.portailDalerte.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tether.portailDalerte.model.Loi;
import com.tether.portailDalerte.service.LoisServcice;

@RestController
@RequestMapping("/loi")
public class LoiController {

    @Autowired
    private LoisServcice service;
    
    @PostMapping("/add")
    @CrossOrigin(origins = "*")
    public String addNewLoi(@RequestBody Loi loi) {
        return service.addLoi(loi);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<Loi> getAllLois() {
        return service.getAllLois();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public Loi getLoi(@PathVariable int id) {
        return service.getLoi(id);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "*")
    public Loi updateLoi(@PathVariable int id, @RequestBody Loi loi){
        return service.upadateLoi(id, loi);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "*")
    public void deleteLoi(@PathVariable int id){
        service.deleteLoi(id);
    }


}
