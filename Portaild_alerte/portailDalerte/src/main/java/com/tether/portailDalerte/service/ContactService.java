package com.tether.portailDalerte.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tether.portailDalerte.model.Contact;
import com.tether.portailDalerte.repository.ContactRepository;

@Service
public class ContactService {
    @Autowired
    private ContactRepository repository;

    public String addContact(Contact conn) {
        repository.save(conn);
        return "Contact ajouté avec succés";
    }

    public List<Contact> getAllContact(){
        return repository.findAll();
    }


    public Contact getContact(int id){
        Contact conn = repository.getContactById(id);
        return conn;
    }
    
}
