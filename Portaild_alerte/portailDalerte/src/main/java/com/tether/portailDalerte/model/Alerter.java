package com.tether.portailDalerte.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Alerter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int alerterId;
    private Date dateDesFaits;
    private String lieuDesFaits;
    @ManyToOne
    @JoinColumn(name = "typeAlerteId")
    private TypeAlerte typeAlerte;
    private String preuves;
    @Enumerated(EnumType.STRING)
    private Status status;
    private boolean anonyme;
    private String prenom;
    private String nom;
    private String phone;
    private String email;
    private String message;

}
