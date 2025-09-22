package com.tether.portailDalerte.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tether.portailDalerte.model.TypeAlerte;

public interface TypeAlerteRepository extends JpaRepository<TypeAlerte, Integer>{
   // Optional<TypeAlerte> findById(int id);
   TypeAlerte findByTypeAlerteId(int id);
}

   
