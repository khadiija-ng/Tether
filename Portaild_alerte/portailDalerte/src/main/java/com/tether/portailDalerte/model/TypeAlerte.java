package com.tether.portailDalerte.model;
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
public class TypeAlerte {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int typeAlerteId;
    private String typeAlerteName;
    private String typeAlerteDescription;

}



