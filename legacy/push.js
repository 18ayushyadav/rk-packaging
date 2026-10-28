require('dotenv').config();
const { execSync } = require('child_process');

console.log("Current DATABASE_URL parsed by dotenv:", process.env.DATABASE_URL);

try {
  execSync('npx prisma db push --accept-data-loss', { 
    stdio: 'inherit', 
    env: { ...process.env, CI: 'true', NO_COLOR: 'true' } 
  });
  execSync('npx prisma generate', { 
    stdio: 'inherit', 
    env: { ...process.env, CI: 'true', NO_COLOR: 'true' } 
  });
  console.log("Successfully pushed and generated.");
} catch (e) {
  console.log("Failed execution.");
}
