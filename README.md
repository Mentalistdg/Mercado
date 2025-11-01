# 🔐 Mercado - Informe de Mercados Seguro

Aplicación web con autenticación real para proteger informes financieros.

## 🎯 Características

- ✅ Autenticación segura con usuario y contraseña
- ✅ Contraseñas hasheadas con bcrypt
- ✅ Sesiones seguras con express-session
- ✅ Protección a nivel de servidor (no JavaScript del lado del cliente)
- ✅ Interfaz de login profesional
- ✅ Despliegue gratuito en Railway o Render

## 🚀 Despliegue Rápido (Railway - RECOMENDADO)

### Opción A: Railway (100% Gratis, 5 min de configuración)

**Railway ofrece 500 horas gratis al mes - suficiente para mantener tu app corriendo 24/7**

#### Paso 1: Crear cuenta en Railway
```
🌐 Ve a: https://railway.app
```
- Regístrate con tu cuenta de GitHub (gratis)
- No necesitas tarjeta de crédito

#### Paso 2: Crear nuevo proyecto
1. Clic en **"New Project"**
2. Selecciona **"Deploy from GitHub repo"**
3. Autoriza Railway a acceder a tus repositorios
4. Selecciona el repositorio **"Mercado"**
5. Railway detectará automáticamente que es una app Node.js

#### Paso 3: Configurar Variables de Entorno
1. En el dashboard del proyecto, ve a la pestaña **"Variables"**
2. Agrega las siguientes variables:

```bash
# Usuario de acceso
AUTH_USERNAME=tu_usuario

# Contraseña (ver instrucciones abajo para generar hash)
AUTH_PASSWORD_HASH=tu_hash_aqui

# Secreto de sesión (genera uno aleatorio)
SESSION_SECRET=genera_un_secreto_aleatorio_aqui

# Entorno
NODE_ENV=production
```

**📝 Para generar el hash de tu contraseña:**

Opción 1 - Desde tu computadora local:
```bash
# 1. Clona el repositorio
git clone https://github.com/Mentalistdg/Mercado.git
cd Mercado

# 2. Instala dependencias
npm install

# 3. Genera tu hash con la contraseña que quieras
node generate-hash.js TuContraseñaSegura123

# 4. Copia el hash generado y úsalo en AUTH_PASSWORD_HASH
```

Opción 2 - Online:
```
🌐 Ve a: https://bcrypt-generator.com
- Ingresa tu contraseña deseada
- Usa 10 rounds
- Copia el hash generado
```

**📝 Para generar SESSION_SECRET:**
```bash
# Ejecuta en tu terminal:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# O usa esta página:
# https://www.random.org/strings/
```

#### Paso 4: Desplegar
1. Railway desplegará automáticamente tu aplicación
2. Espera 2-3 minutos
3. Verás un botón **"Generate Domain"** - haz clic para obtener tu URL pública
4. ¡Listo! Tu app estará en: `https://tu-app.up.railway.app`

---

### Opción B: Render (Alternativa Gratuita)

**Render ofrece 750 horas gratis al mes**

#### Paso 1: Crear cuenta
```
🌐 Ve a: https://render.com
```
- Regístrate con GitHub (gratis)

#### Paso 2: Crear Web Service
1. Clic en **"New +"** → **"Web Service"**
2. Conecta tu repositorio GitHub **"Mercado"**
3. Configuración:
   - **Name:** mercado-secure
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

#### Paso 3: Variables de Entorno
En la sección **"Environment"**, agrega las mismas variables que en Railway:
- `AUTH_USERNAME`
- `AUTH_PASSWORD_HASH`
- `SESSION_SECRET`
- `NODE_ENV=production`

#### Paso 4: Deploy
1. Clic en **"Create Web Service"**
2. Espera 3-5 minutos
3. Tu app estará en: `https://mercado-secure.onrender.com`

---

## 💻 Desarrollo Local

### Requisitos
- Node.js 18+ instalado
- Git

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/Mentalistdg/Mercado.git
cd Mercado

# 2. Instalar dependencias
npm install

# 3. Generar contraseña hasheada
node generate-hash.js TuContraseña123

# 4. Crear archivo .env
cp .env.example .env

# 5. Editar .env con tus credenciales
# AUTH_USERNAME=tu_usuario
# AUTH_PASSWORD_HASH=el_hash_generado
# SESSION_SECRET=un_secreto_aleatorio

# 6. Iniciar servidor
npm start

# 7. Abrir en navegador
# http://localhost:3000
```

### Credenciales por Defecto (solo para desarrollo)
- **Usuario:** admin
- **Contraseña:** admin123

⚠️ **IMPORTANTE:** Cambia estas credenciales antes de desplegar a producción.

---

## 📁 Estructura del Proyecto

```
Mercado/
├── server.js              # Servidor Express con autenticación
├── package.json           # Dependencias
├── .env.example          # Plantilla de variables de entorno
├── generate-hash.js      # Script para generar hash de contraseñas
├── views/
│   └── login.html        # Página de inicio de sesión
├── public/
│   └── informe.html      # Informe de mercados protegido
└── README.md             # Este archivo
```

---

## 🔒 Seguridad

### Características de Seguridad Implementadas:
- ✅ Contraseñas hasheadas con bcrypt (no se guardan en texto plano)
- ✅ Sesiones seguras con httpOnly cookies
- ✅ Protección CSRF básica
- ✅ Variables de entorno para credenciales
- ✅ Timeout de sesión (24 horas)
- ✅ Cookies seguras en HTTPS (producción)

### Recomendaciones Adicionales:
- 🔐 Usa contraseñas fuertes (mínimo 12 caracteres, mezcla de letras, números y símbolos)
- 🔄 Cambia las credenciales regularmente
- 🚫 Nunca compartas tu archivo `.env`
- 🌐 Usa HTTPS en producción (Railway y Render lo proveen automáticamente)

---

## 🆘 Solución de Problemas

### Error: "Cannot find module 'express'"
```bash
npm install
```

### Error: "Port already in use"
```bash
# Cambiar puerto en .env
PORT=3001
```

### Olvidé mi contraseña
1. Genera un nuevo hash con `node generate-hash.js NuevaContraseña`
2. Actualiza `AUTH_PASSWORD_HASH` en las variables de entorno de Railway/Render
3. Railway/Render redesplegará automáticamente

### La sesión no persiste
- Verifica que `SESSION_SECRET` esté configurado
- Verifica que las cookies no estén bloqueadas en tu navegador

---

## 📊 Costos

| Servicio | Plan Gratuito | Límites | Recomendación |
|----------|---------------|---------|---------------|
| **Railway** | ✅ Sí | 500 hrs/mes | ⭐⭐⭐⭐⭐ Mejor opción |
| **Render** | ✅ Sí | 750 hrs/mes | ⭐⭐⭐⭐ Buena alternativa |
| **Vercel** | ✅ Sí | Sin password gratis | ⭐⭐ Solo sin autenticación |
| **Netlify** | ✅ Sí | Solo sitios estáticos | ⭐⭐ No soporta Node.js |

**Recomendación:** Usa **Railway** por su simplicidad y generosidad con el plan gratuito.

---

## 📝 Notas

- El plan gratuito de Railway dura indefinidamente (mientras uses menos de $5/mes en recursos)
- La aplicación se "duerme" después de 15 minutos de inactividad, y se despierta en 30 segundos al recibir una petición
- Para mantenerla siempre despierta, puedes usar servicios como [UptimeRobot](https://uptimerobot.com) (gratis)

---

## 📄 Licencia

MIT

---

## 👤 Autor

Strategic Investment Research

---

## 🌟 ¿Necesitas Ayuda?

Si tienes problemas con el despliegue, crea un issue en GitHub o contacta al administrador.
