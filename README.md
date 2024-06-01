# Sistema de Carga y Validación de Datos con Autenticación

## Descripción

Esta aplicación permite a los usuarios autenticados, específicamente con rol de `admin`, cargar archivos CSV para la creación de registros en una base de datos. La aplicación recibe la respuesta del servidor y permite la corrección de registros inválidos.

## Características

- **Autenticación**: Solo los usuarios con credenciales válidas pueden acceder a la página de carga de archivos.
- **Carga de Archivos CSV**: Permite la carga de archivos CSV y muestra los resultados de la carga.
- **Corrección de Errores**: Muestra errores detallados y permite la corrección directa en la interfaz.
- **Simulación de Respuestas**: Simula las respuestas del servidor para autenticación y carga de datos.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas en la aplicación.
- **CSS Modules**: Para la gestión de estilos.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

2. Navega al directorio del proyecto:
```bash
cd nombre-del-repositorio
```
3. Instala las dependencias:
```bash
npm install
```

### Construcción
Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

## Estructura del Proyecto

```plaintext
public/
└── index.html
src/
├── components/
│   ├── Admin/
│   │   └── Admin.jsx
│   ├── App/
│   │   ├── App.jsx
│   │   └── App.module.css
│   ├── Start/
│   │   ├── Start.jsx
│   │   └── Start.module.css
│   └── Storage/
│       ├── Error/
│       │   ├── ErrorList/
│       │   │   ├── ErrorList.jsx
│       │   │   ├── ErrorList.module.css
│       │   │   └── ErrorList.test.jsx
│       │   └── ErrorRow/
│       │       ├── ErrorRow.jsx
│       │       ├── ErrorRow.module.css
│       │       └── ErrorRow.test.jsx
│       └── Storage.jsx
│       └── Storage.module.css
└── contexts/
    └── authContext.jsx
```

## Simulación de Respuestas del Servidor
### Endpoint de Autenticación
- **Ruta**: /api/login
- **Respuesta**:

```JSON
{
  "ok": true,
  "data": {
    "email": "admin@mail.com",
    "name": "Mr. Admin",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
}
```
### Endpoint de Carga de Datos
- **Ruta**: /api/upload
- **Respuesta**:

```JSON
{
  "ok": true,
  "data": {
    "success": [
      {
        "id": 1,
        "name": "Juan Perez",
        "email": "juan.perez@example.com",
        "age": 28
      }
      // Otros registros exitosos...
    ],
    "errors": [
      {
        "row": 4,
        "details": {
          "name": "El campo 'name' no puede estar vacío.",
          "email": "El formato del campo 'email' es inválido.",
          "age": "El campo 'age' debe ser un número positivo."
        }
      }
      // Otros registros con errores...
    ]
  }
}
```

## Páginas de la Aplicación
### Página de Login (/login)
- Formulario para ingreso de credenciales (email y contraseña).
- Muestra un mensaje de error si las credenciales son inválidas.
- Almacena el token de autenticación para uso futuro.

### Página de Carga de Archivos CSV (/)
- Solo accesible para usuarios con rol de admin.
- Formulario para seleccionar y cargar un archivo CSV.
- Botón de "Upload File" para enviar el archivo seleccionado.

### Visualización de Resultados y Corrección de Errores
- Muestra un resumen de los registros cargados exitosamente.
- Lista detallada de errores con mensajes específicos.
- Campos editables para corregir los errores y reenviar los registros específicos.
- Botón “New File” para reiniciar la vista al estado inicial.

## Despliegue
La aplicacion se encuentra desplegada en Render en la siguente URL:

[Enlace al proyecto](https://kudo-app.netlify.app).


## Contribuir
Las contribuciones son bienvenidas. Si deseas contribuir, por favor crea un fork del repositorio y envía un pull request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Autor
Kenny Ederson Forestal - KenL1999
