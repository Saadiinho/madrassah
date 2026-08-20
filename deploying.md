# 📦 Documentation de déploiement — React + Vite sur Alwaysdata

> **Application** : Portfolio personnel  
> **Stack** : React 18 + Vite + TypeScript + Tailwind CSS  
> **Hébergeur** : Alwaysdata (fichiers statiques)  
> **URL de production** : `https://saadrafiqul.alwaysdata.net/my-portfolio`

---

## 🗂️ Sommaire

1. [Configuration côté serveur (Alwaysdata)](#1-configuration-côté-serveur-alwaysdata)
2. [Configuration côté code](#2-configuration-côté-code)
3. [Commandes de build et déploiement](#3-commandes-de-build-et-déploiement)
4. [Vérifications post-déploiement](#4-vérifications-post-déploiement)
5. [Dépannage rapide](#5-dépannage-rapide)

---

## 1. Configuration côté serveur (Alwaysdata)

### 🔧 Création du site statique

Dans le panneau d'administration Alwaysdata (`https://admin.alwaysdata.com/`) :

| Paramètre | Valeur |
|-----------|--------|
| **Type de site** | `Fichiers statiques` |
| **Répertoire racine** | `/home/saadrafiqul/www/my-portfolio/` |
| **Domaine** | `saadrafiqul.alwaysdata.net` (par défaut) |
| **Chemin d'accès** | `/my-portfolio/` |

> ⚠️ **Important** : Le répertoire racine doit correspondre au `base` défini dans `vite.config.ts`.

### 🔐 Activation HTTPS

- Alwaysdata active automatiquement **Let's Encrypt**.
- Vérifie dans *Sécurité > Certificats* que le certificat est bien émis pour `saadrafiqul.alwaysdata.net`.

### 📄 Fichier `.htaccess` (optionnel, pour le routing SPA)

Si tu utilises **React Router**, crée un fichier `.htaccess` à la racine de `dist/` **avant le déploiement** :

```apache
# dist/.htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /my-portfolio/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /my-portfolio/index.html [L]
</IfModule>
```

> 🔄 Si ton application est à la racine du domaine, remplace `/my-portfolio/` par `/`.

---

## 2. Configuration côté code

### ⚙️ `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/my-portfolio/',  // ✅ Doit correspondre au sous-dossier de déploiement
  build: {
    outDir: 'dist',        // Dossier de sortie (par défaut)
    assetsDir: 'assets',   // Sous-dossier pour les assets compilés
  },
})
```

> 💡 **Astuce** : Le `base` doit être un chemin relatif commençant et finissant par `/`.

### 📦 `package.json` (section pertinente)

```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "homepage": "https://saadrafiqul.alwaysdata.net/my-portfolio",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/vite": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

> 📌 **Note sur `"homepage"`** :  
> Bien que Vite n'utilise pas ce champ (contrairement à Create React App), il est conservé pour :
> - La documentation et la traçabilité
> - Une éventuelle migration future
> - Les outils tiers qui pourraient s'y référer

### 🔐 Variables d'environnement (optionnel)

Crée un fichier `.env.production` à la racine du projet :

```env
# .env.production
VITE_API_URL=https://api.tonsite.com
VITE_APP_TITLE=Mon Portfolio
```

> ✅ Les variables doivent impérativement commencer par `VITE_` pour être injectées dans le build.  
> 🔍 Accès dans le code : `import.meta.env.VITE_API_URL`

---

## 3. Commandes de build et déploiement

### 🛠️ Étape 1 : Build de production (en local)

```bash
# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Générer les fichiers statiques optimisés
npm run build
```

✅ Résultat : un dossier `dist/` contenant :
```
dist/
├── index.html
├── .htaccess          (si ajouté manuellement)
└── assets/
    ├── main.[hash].js
    ├── style.[hash].css
    └── [... autres assets]
```

### 📤 Étape 2 : Déploiement via rsync (SSH)

```bash
# Synchroniser le dossier dist/ vers Alwaysdata
rsync -rz --delete --mkpath dist/ saadrafiqul@ssh1.alwaysdata.net:www/my-portfolio/
```

| Option | Description |
|--------|-------------|
| `-r` | Récursif (copie les sous-dossiers) |
| `-z` | Compression pendant le transfert |
| `--delete` | Supprime les fichiers obsolètes sur le serveur |
| `--mkpath` | Crée le répertoire distant si nécessaire |

> 💡 **Alternative sans `--mkpath`** (si le dossier existe déjà) :
> ```bash
> rsync -rz --delete dist/ saadrafiqul@ssh1.alwaysdata.net:www/my-portfolio/
> ```

### 🔁 Script de déploiement automatisé (optionnel)

Ajoute ce script dans `package.json` pour simplifier les déploiements futurs :

```json
{
  "scripts": {
    "deploy": "npm run build && rsync -rz --delete dist/ saadrafiqul@ssh1.alwaysdata.net:www/my-portfolio/"
  }
}
```

→ Puis déploie en une commande :
```bash
npm run deploy
```

---

## 4. Vérifications post-déploiement

### ✅ Checklist manuelle

```bash
# 1. Vérifier la présence des fichiers sur le serveur
ssh saadrafiqul@ssh1.alwaysdata.net
ls -la www/my-portfolio/
# Doit afficher : index.html, assets/, .htaccess...

# 2. Tester la réponse HTTP
curl -I https://saadrafiqul.alwaysdata.net/my-portfolio/
# Doit retourner : HTTP/2 200

# 3. Ouvrir l'URL dans un navigateur et vérifier :
#    - La page se charge sans erreur 404
#    - Les assets JS/CSS sont bien chargés (DevTools > Network)
#    - Le routing fonctionne (rafraîchir une page interne comme /about)
#    - Aucune erreur CORS ou mixed content dans la console
```

### 🧪 Test local du build (avant déploiement)

```bash
# Prévisualiser le build en local comme en production
npm run preview
# → Ouvre http://localhost:4173/my-portfolio/
```

---

## 5. Dépannage rapide

| Symptôme | Cause probable | Solution |
|----------|---------------|----------|
| **404 sur la page principale** | `base` incohérent avec le répertoire de déploiement | Vérifie que `base: '/my-portfolio/'` correspond au chemin Alwaysdata |
| **404 sur les assets (JS/CSS)** | Chemins relatifs incorrects | Rebuild après avoir corrigé `base` dans `vite.config.ts` |
| **Page blanche sans erreur** | Erreur JS non catchée ou import cassé | Ouvrir la console DevTools (`F12`) pour voir l'erreur |
| **404 en rafraîchissant une route** | `.htaccess` manquant ou mal configuré | Ajouter/corriger le fichier `.htaccess` dans `dist/` avant déploiement |
| **Mixed Content Warning** | Requête HTTP sur site HTTPS | Utiliser des URLs relatives ou `https://` pour l'API |
| **Cache obsolète** | Le navigateur garde l'ancienne version | Hard refresh (`Ctrl+F5` / `Cmd+Shift+R`) ou vider le cache |

---

## 🔄 Mise à jour de l'application

Pour déployer une nouvelle version :

```bash
# 1. Modifier le code en local
# 2. Builder et déployer
npm run build
rsync -rz --delete dist/ saadrafiqul@ssh1.alwaysdata.net:www/my-portfolio/

# 3. Rafraîchir le navigateur (Ctrl+F5)
```

> 💡 L'option `--delete` est cruciale : elle évite l'accumulation de fichiers avec d'anciens hashs.

---

## 📚 Ressources utiles

- [Documentation Vite - Déploiement](https://vitejs.dev/guide/static-deploy.html)
- [Alwaysdata - Sites statiques](https://help.alwaysdata.com/fr/hebergement-web/sites-statiques/)
- [React Router - Static Hosting](https://reactrouter.com/en/main/start/tutorial#deploying-to-a-static-host)

---

> 📝 **Dernière mise à jour** : 09/03/2026  
> 👤 **Mainteneur** : Saad Rafiqul  
> 🐛 **Signaler un problème** : Ouvrir une issue sur le dépôt ou contacter l'hébergeur

---

*Cette documentation est conçue pour être versionnée avec le code source. N'hésite pas à l'adapter selon l'évolution du projet.* 🚀