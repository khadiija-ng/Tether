package com.tether.portailDalerte.model;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Actualite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ActualiteId;
    private String ActualiteImage;
    private String ActualiteTitle;
    private String ActualiteDescription;
    private Date ActualiteDate;

}













