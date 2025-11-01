// Script para generar hash de contraseña
// Uso: node generate-hash.js tu_contraseña

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.log('❌ Error: Debes proporcionar una contraseña');
  console.log('📝 Uso: node generate-hash.js tu_contraseña');
  console.log('');
  console.log('Ejemplo:');
  console.log('  node generate-hash.js MiContraseñaSegura123');
  process.exit(1);
}

console.log('🔐 Generando hash de contraseña...\n');

const hash = bcrypt.hashSync(password, 10);

console.log('✅ Hash generado exitosamente:');
console.log('');
console.log(hash);
console.log('');
console.log('📋 Copia este hash y úsalo en tu variable de entorno AUTH_PASSWORD_HASH');
console.log('');
console.log('Ejemplo para .env:');
console.log(`AUTH_PASSWORD_HASH=${hash}`);
