FROM node:16-alpine

# Créer le dossier de l'application
WORKDIR /app

# Copier les fichiers package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port sur lequel npm start fonctionne
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
