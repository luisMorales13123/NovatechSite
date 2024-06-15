"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importación de los módulos necesarios
const express_1 = __importDefault(require("express")); // Express y tipos de Express
const cors_1 = __importDefault(require("cors")); // Middleware para manejar CORS
const RutasTipoEquipo_1 = __importDefault(require("../rutas/RutasTipoEquipo")); // Rutas relacionadas con el tipo de equipo
const RutasTipoUsuario_1 = __importDefault(require("../rutas/RutasTipoUsuario")); // Rutas relacionadas con el tipo de usuario
const RutasTipodeDocumento_1 = __importDefault(require("../rutas/RutasTipodeDocumento")); // Rutas relacionadas con el tipo de documento
const Rutastip_Servicio_1 = __importDefault(require("../rutas/Rutastip\u00F3Servicio"));
const RutasEquipo_1 = __importDefault(require("../rutas/RutasEquipo"));
const RutasAdministrador_1 = __importDefault(require("../rutas/RutasAdministrador"));
const RutasMarcas_1 = __importDefault(require("../rutas/RutasMarcas"));
const RutasServicio_1 = __importDefault(require("../rutas/RutasServicio"));
const RutasCargoTecnico_1 = __importDefault(require("../rutas/RutasCargoTecnico"));
const RutasTipoCambio_1 = __importDefault(require("../rutas/RutasTipoCambio"));
const RutasPersona_1 = __importDefault(require("../rutas/RutasPersona"));
const User_1 = __importDefault(require("../rutas/User"));
const RutasFactura_1 = __importDefault(require("../rutas/RutasFactura"));
const RustasVistaUsuario_1 = __importDefault(require("../rutas/RustasVistaUsuario"));
const conexion_1 = __importDefault(require("../db/conexion")); // Importación de la conexión a la base de datos
const user_1 = require("./User/user");
// Definición de la clase del servidor de equipos
class ServerEquipo {
    // Constructor de la clase
    constructor() {
        // Inicialización de la aplicación Express
        this.app = (0, express_1.default)();
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
        this.app.get('/equipos', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        // Uso de las rutas relacionadas con el tipo de equipo, tipo de usuario y tipo de documento
        this.app.use('/api/TipoEquipo/', RutasTipoEquipo_1.default);
        this.app.use('/api/tipousuario/', RutasTipoUsuario_1.default);
        this.app.use('/api/TipoDeDocumento/', RutasTipodeDocumento_1.default);
        this.app.use('/api/TipoDeservicio/', Rutastip_Servicio_1.default);
        this.app.use('/api/Equipo/', RutasEquipo_1.default);
        this.app.use('/api/TipoCambio/', RutasTipoCambio_1.default);
        this.app.use('/api/Adiministrador/', RutasAdministrador_1.default);
        this.app.use('/api/Factura/', RutasFactura_1.default);
        this.app.use('/api/CargosTecnico/', RutasCargoTecnico_1.default);
        this.app.use('/api/Marcas/', RutasMarcas_1.default);
        this.app.use('/api/Servicio/', RutasServicio_1.default);
        this.app.use('/api/Persona/', RutasPersona_1.default);
        this.app.use('/api/user/', User_1.default);
        this.app.use('/api/vistaUsuario/', RustasVistaUsuario_1.default);
    }
    // Configuración de middlewares
    midlewares() {
        // Parseo del cuerpo de las solicitudes en formato JSON
        this.app.use(express_1.default.json());
        // Middleware para manejar CORS
        this.app.use((0, cors_1.default)());
    }
    // Método para conectar a la base de datos
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_1.User.sync();
                // Intento de autenticación con la base de datos
                yield conexion_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
// Exportación de la clase del servidor de equipos
exports.default = ServerEquipo;
