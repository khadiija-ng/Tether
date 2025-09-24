package com.tether.portailDalerte.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tether.portailDalerte.model.VideoSensibilisation;
import com.tether.portailDalerte.repository.VideoSensibilisationRepository;

@Service

public class VideoSensibilisationService {
    @Autowired
    private VideoSensibilisationRepository repository;

    public String saveVideo(VideoSensibilisation video) {
        repository.save(video);
        return "Vidéo ajoutée avec succès";
    }

    public List<VideoSensibilisation> getAllVideos() {
        return repository.findAll();
    }
    public VideoSensibilisation getVideoById(int id) {
        VideoSensibilisation video = repository.findById(id);
        return video;
    }



}
