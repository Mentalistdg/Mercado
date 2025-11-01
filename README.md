# Mercado - Informe de Mercados

Informe semanal de mercados financieros publicado de forma segura con protección por contraseña.

## 🔒 Opciones de Despliegue con Privacidad

### Opción A: Netlify (✅ RECOMENDADA - Password Gratis)

**Password protection incluida en plan gratuito**

1. **Crear cuenta en Netlify:**
   - Ve a https://netlify.com
   - Registrate gratis con tu cuenta de GitHub

2. **Importar repositorio:**
   - Clic en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Autoriza Netlify a acceder a tus repositorios
   - Selecciona el repositorio "Mercado"

3. **Configurar despliegue:**
   - Build command: (dejar vacío)
   - Publish directory: `/` (root)
   - Clic en "Deploy site"

4. **Activar protección por contraseña:**
   - Ve a: Site settings → General → Site details
   - Scroll hasta "Password protection"
   - Clic en "Change password"
   - Ingresa tu contraseña deseada
   - Guarda cambios

5. **¡Listo!** Tu sitio estará en: `https://tu-sitio.netlify.app`
   - Cualquier visitante necesitará la contraseña para acceder
   - Solo tú conoces la contraseña

---

### Opción B: Vercel (⚠️ Password solo en plan Pro)

**Nota:** Vercel requiere plan Pro ($20/mes) para password protection nativo.

1. **Crear cuenta en Vercel:**
   - Ve a https://vercel.com
   - Registrate gratis con tu cuenta de GitHub

2. **Importar repositorio:**
   - Clic en "Add New" → "Project"
   - Selecciona el repositorio "Mercado"
   - Clic en "Import"

3. **Configurar despliegue:**
   - Framework Preset: Other
   - Root Directory: ./
   - Clic en "Deploy"

4. **Protección (solo plan Pro):**
   - Settings → Deployment Protection
   - Enable "Password Protection"

**Alternativa gratuita para Vercel:** Puedes usar sin password o implementar autenticación personalizada (más complejo).

---

## 📋 Archivos del Proyecto

- `index.html` - Página principal del informe
- `netlify.toml` - Configuración de Netlify
- `vercel.json` - Configuración de Vercel

## 🔐 Seguridad

- Password protection a nivel de servidor (Netlify)
- Headers de seguridad configurados
- Protección contra XSS y clickjacking

## 💡 Recomendación

**Usa Netlify** si quieres password protection gratis y real. Es la opción más simple y efectiva para tu caso de uso.
