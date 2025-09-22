package com.tether.portailDalerte.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tether.portailDalerte.model.Contact;
import com.tether.portailDalerte.service.ContactService;

@RestController
@RequestMapping("contact/")
public class ContactController {

    @Autowired
    private ContactService service;

    @PostMapping("/add")
    @CrossOrigin(origins = "*")
    public String addNewContact(@RequestBody Contact conn) {
        return service.addContact(conn);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<Contact> getAllContacts() {
        return service.getAllContact();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public Contact getContact(@PathVariable int id) {
        return service.getContact(id);
    }

}
