package com.tether.portailDalerte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tether.portailDalerte.model.Loi;

public interface LoiRepository extends JpaRepository<Loi, Integer>{

    Loi getLoiById(int id);


}
