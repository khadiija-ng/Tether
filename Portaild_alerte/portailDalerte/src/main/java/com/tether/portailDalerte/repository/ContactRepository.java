package com.tether.portailDalerte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tether.portailDalerte.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

    Contact getContactById(int id);


}
