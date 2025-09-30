#notre image de base 
From openjdk:21-jdk-slim

#Definir le repertoire de travail, si le repertoire n'existe pas docker le crée
WORKDIR /identyService

#copie du jar qui contient les ressources(bibliotheques...) de java en un seul fichier
COPY target/*.jar identyService-0.0.1-SNAPSHOT.jar

#indique à Docker le port réseau sur lequel l'application écoutera port par défaut de spring 8080
EXPOSE 8081

#commande d_execution
CMD ["java", "-jar", "identyService-0.0.1-SNAPSHOT.jar"]


#pas d_instruction RUN parceque j'ai deja construit le jar en local