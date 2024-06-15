// Importación de los módulos necesarios
import express, { Application, Request, Response } from 'express'; // Express y tipos de Express
import cors from 'cors'; // Middleware para manejar CORS
import rutaTipoEquipo from '../rutas/RutasTipoEquipo'; // Rutas relacionadas con el tipo de equipo
import rutaTipoUsuario from '../rutas/RutasTipoUsuario'; // Rutas relacionadas con el tipo de usuario
import rutasTipodeDocumento from '../rutas/RutasTipodeDocumento'; // Rutas relacionadas con el tipo de documento
import rutasTipodeServicio from '../rutas/RutastipóServicio';
import rutasEquipo from '../rutas/RutasEquipo';
import rutasAdministrador from '../rutas/RutasAdministrador';
import RutasMarcas from '../rutas/RutasMarcas';
import RutasServicio from '../rutas/RutasServicio';
import rutasCargoTecnico from '../rutas/RutasCargoTecnico';
import rutasTipoCambio from '../rutas/RutasTipoCambio';
import rutasPersona from '../rutas/RutasPersona';
import rustarusar  from '../rutas/User'
import rutasFactura from '../rutas/RutasFactura';
import rutasVistaUsuario from '../rutas/RustasVistaUsuario'
import db from '../db/conexion'; // Importación de la conexión a la base de datos
import { User } from './User/user';

// Definición de la clase del servidor de equipos
class ServerEquipo {
    private app: Application; // Aplicación Express
    private port: string; // Puerto en el que se ejecutará el servidor

    // Constructor de la clase
    constructor() {
        // Inicialización de la aplicación Express
        this.app = express();
        // Definición del puerto, obteniéndolo del entorno o utilizando el puerto 3001 por defecto
        this.port = process.env.PORT || '3001';

        // Inicialización de los componentes del servidor
        this.listen(); // Escucha en el puerto especificado
        this.midlewares(); // Configuración de middlewares
        this.routes(); // Configuración de rutas
        this.dbConnect(); // Conexión a la base de datos
    }

    // Método para escuchar en el puerto especificado
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }

    // Configuración de rutas
    routes() {
        // Ruta de prueba para verificar que la API está funcionando
        this.app.get('/equipos', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            });
        });

        // Uso de las rutas relacionadas con el tipo de equipo, tipo de usuario y tipo de documento
        this.app.use('/api/TipoEquipo/', rutaTipoEquipo);
        this.app.use('/api/tipousuario/', rutaTipoUsuario);
        this.app.use('/api/TipoDeDocumento/', rutasTipodeDocumento);
        this.app.use('/api/TipoDeservicio/' , rutasTipodeServicio);
        this.app.use('/api/Equipo/' , rutasEquipo);
        this.app.use('/api/TipoCambio/' , rutasTipoCambio);
        this.app.use('/api/Adiministrador/' , rutasAdministrador);
        this.app.use('/api/Factura/' , rutasFactura);
        this.app.use('/api/CargosTecnico/', rutasCargoTecnico);
        this.app.use('/api/Marcas/' , RutasMarcas);
        this.app.use('/api/Servicio/' , RutasServicio);
        this.app.use('/api/Persona/' , rutasPersona);
        this.app.use('/api/user/' , rustarusar);
        this.app.use('/api/vistaUsuario/' , rutasVistaUsuario);
    }

    // Configuración de middlewares
    midlewares() {
        // Parseo del cuerpo de las solicitudes en formato JSON
        this.app.use(express.json());
        // Middleware para manejar CORS
        this.app.use(cors());
    }

    // Método para conectar a la base de datos
    async dbConnect() {
        try {

            await User.sync()
            // Intento de autenticación con la base de datos
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos');
        }
    }
}

// Exportación de la clase del servidor de equipos
export default ServerEquipo;
