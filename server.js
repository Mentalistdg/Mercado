const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de credenciales desde variables de entorno
const USERNAME = process.env.AUTH_USERNAME || 'admin';
const PASSWORD_HASH = process.env.AUTH_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);
const SESSION_SECRET = process.env.SESSION_SECRET || 'cambiar-este-secreto-en-produccion';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de sesiones
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // true en HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}));

// Middleware para verificar autenticación
function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) {
    return next();
  }
  res.redirect('/login');
}

// Ruta pública: Login página
app.get('/login', (req, res) => {
  if (req.session && req.session.authenticated) {
    return res.redirect('/informe');
  }
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Ruta para procesar login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar credenciales
    const isValidUsername = username === USERNAME;
    const isValidPassword = await bcrypt.compare(password, PASSWORD_HASH);

    if (isValidUsername && isValidPassword) {
      req.session.authenticated = true;
      req.session.username = username;
      return res.redirect('/informe');
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Error de Autenticación</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .error-container {
              background: white;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
              text-align: center;
              max-width: 400px;
            }
            .error-icon {
              font-size: 48px;
              color: #e74c3c;
              margin-bottom: 20px;
            }
            h1 {
              color: #2c3e50;
              margin-bottom: 10px;
            }
            p {
              color: #7f8c8d;
              margin-bottom: 20px;
            }
            a {
              display: inline-block;
              padding: 12px 30px;
              background: #667eea;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              transition: background 0.3s;
            }
            a:hover {
              background: #5568d3;
            }
          </style>
        </head>
        <body>
          <div class="error-container">
            <div class="error-icon">⚠️</div>
            <h1>Credenciales Incorrectas</h1>
            <p>El usuario o contraseña ingresados no son válidos.</p>
            <a href="/login">Intentar de nuevo</a>
          </div>
        </body>
        </html>
      `);
    }
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).send('Error del servidor');
  }
});

// Ruta para logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/login');
  });
});

// Ruta protegida: Informe
app.get('/informe', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'informe.html'));
});

// Ruta raíz redirige a login o informe
app.get('/', (req, res) => {
  if (req.session && req.session.authenticated) {
    res.redirect('/informe');
  } else {
    res.redirect('/login');
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📊 Informe protegido en: http://localhost:${PORT}/informe`);
  console.log(`🔐 Usuario por defecto: ${USERNAME}`);
  console.log(`⚠️  Recuerda configurar las variables de entorno en producción`);
});
