import pkg from "pg"
import dotenv from "dotenv";

const {Pool} = pkg
dotenv.configDotenv()



const pool = new Pool({
  user:'postgres'|| process.env.USER, 
  host: process.env.PGHOST || process.env.HOST || 'localhost',
  port: process.env.PGPORT || process.env.PORT || 5432,
  database: 'form',
  password: process.env.PGPASSWORD || process.env.SENHA,
});

const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Conexão com o banco OK:', res.rows[0]);
    } catch (err) {
        console.error('Erro na conexão:', err);
    }
};
testConnection();

// Adicione tratamento de erros
pool.on('error', (err) => {
  console.error('Erro inesperado no cliente PostgreSQL', err);
  process.exit(-1);
});
export default pool