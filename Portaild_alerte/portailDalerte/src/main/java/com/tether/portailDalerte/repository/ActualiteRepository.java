package com.tether.portailDalerte.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tether.portailDalerte.model.Actualite;

public interface ActualiteRepository extends JpaRepository<Actualite, Integer> {
   Optional<Actualite> findById(int actualiteId);
   Actualite findByActualiteId(int actualiteId);
}
