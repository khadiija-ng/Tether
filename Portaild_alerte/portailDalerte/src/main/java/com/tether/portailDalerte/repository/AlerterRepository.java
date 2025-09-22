package com.tether.portailDalerte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tether.portailDalerte.model.Alerter;

public interface AlerterRepository extends JpaRepository<Alerter, Integer>{
Alerter getAlerteById(int alerterId);
}
