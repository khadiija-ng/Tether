package com.tether.portailDalerte.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.tether.portailDalerte.model.VideoSensibilisation;

public interface VideoSensibilisationRepository extends JpaRepository<VideoSensibilisation, Integer> {

    VideoSensibilisation findById(int id);
}
