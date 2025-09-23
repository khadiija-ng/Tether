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

import com.tether.portailDalerte.model.VideoSensibilisation;
import com.tether.portailDalerte.service.VideoSensibilisationService;

@RestController
@RequestMapping("/video-sensibilisation")
public class VideoSensibilisationController {

    @Autowired
    private VideoSensibilisationService service;

    @PostMapping("/add")
    @CrossOrigin(origins = "*")
    public String addVideo(@RequestBody VideoSensibilisation video) {
        return service.saveVideo(video);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<VideoSensibilisation> getAllVideos() {
        return service.getAllVideos();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*")
    public VideoSensibilisation getVideo(@PathVariable int id) {
        return service.getVideoById(id);
    }
}
