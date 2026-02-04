
# Backend II: Diseño y Arquitectura Backend  
## Entrega Final – Ecommerce API

Este proyecto corresponde a la **Entrega Final** del curso **Backend II: Diseño y Arquitectura Backend**.  
El objetivo principal es mejorar la arquitectura de un servidor backend para un ecommerce, aplicando **patrones de diseño**, **autenticación y autorización**, **roles**, y una **lógica de negocio robusta y profesional**.

---

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Passport (Local + JWT)**
- **JWT (JSON Web Tokens)**
- **Bcrypt**
- **Nodemailer**
- **Dotenv**
- **Nodemon**

---

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado siguiendo una arquitectura en capas, separando responsabilidades:

```
src/
│
├── config/          # Configuración (Passport, variables, etc.)
├── controllers/     # Controladores (HTTP layer)
├── dao/             # Data Access Objects (MongoDB)
│   └── mongo/
├── dto/             # Data Transfer Objects
├── middlewares/     # Middlewares de autorización y seguridad
├── models/          # Modelos de Mongoose
├── repositories/    # Patrón Repository
├── routes/          # Rutas de la API
├── services/        # Lógica de negocio
├── utils/           # Utilidades (hash, mailer, tokens, etc.)
├── app.js           # Configuración de Express
└── server.js        # Inicialización del servidor
```

---

## 📦 Patrones Implementados

### 🔹 DAO (Data Access Object)
Encapsula el acceso a la base de datos MongoDB utilizando Mongoose.

### 🔹 Repository
Separa completamente la lógica de acceso a datos de la lógica de negocio, permitiendo una arquitectura más escalable y mantenible.

### 🔹 DTO (Data Transfer Object)
Evita exponer información sensible del usuario, especialmente en la ruta `/api/sessions/current`.

---

## 👤 Usuarios y Autenticación

### Modelo de Usuario
El modelo `User` incluye:

- `first_name`
- `last_name`
- `email` (único)
- `age`
- `password` (hash con bcrypt)
- `cart` (referencia a Carts)
- `role` (`user` por defecto)

### Autenticación
- Login con **Passport Local**
- Autorización con **JWT**
- Tokens enviados por **Authorization: Bearer**

---

## 🔐 Autorización y Roles

Middleware de autorización basado en roles:

- **Admin**
  - Crear, actualizar y eliminar productos
- **User**
  - Agregar productos al carrito
  - Realizar compras

El middleware trabaja en conjunto con la estrategia **current** de Passport.

---

## 🔁 Recuperación de Contraseña

- Envío de correo electrónico con **link de recuperación**
- El enlace:
  - Expira a la **1 hora**
  - No permite reutilizar la contraseña anterior
- Implementado con **Nodemailer** y **JWT temporales**

---

## 🛒 Compras y Tickets

### Modelo Ticket
Incluye:
- Código único
- Fecha de compra
- Monto total
- Comprador

### Lógica de Compra
- Verificación de stock
- Compra parcial o completa
- Generación automática de ticket
- Actualización de stock de productos

---

## 🌐 Endpoints Principales

### Usuarios
- `GET /api/users`
- `GET /api/users/:uid`
- `POST /api/users`
- `PUT /api/users/:uid`
- `DELETE /api/users/:uid`

### Sesiones
- `POST /api/sessions/login`
- `GET /api/sessions/current`

### Recuperación
- `POST /api/sessions/forgot-password`
- `POST /api/sessions/reset-password`

---

## ⚙️ Variables de Entorno (.env)

El proyecto requiere un archivo `.env` con las siguientes variables:

```
PORT=3000
MONGO_URL=mongodb+srv://...
JWT_SECRET=tu_jwt_secreto
JWT_EXPIRES_IN=1h
BCRYPT_SALT_ROUNDS=10
MAIL_USER=correo@gmail.com
MAIL_PASS=clave_app
```

---

## ▶️ Ejecución del Proyecto

Instalar dependencias:
```
npm install
```

Ejecutar en desarrollo:
```
npm run dev
```

---

## ✅ Estado del Proyecto

✔ DAO y DTO correctamente implementados  
✔ Patrón Repository aplicado  
✔ Autenticación y autorización con JWT  
✔ Middleware de roles  
✔ Recuperación de contraseña funcional  
✔ Lógica de compra y tickets completa  

---

## 📌 Autor

Proyecto desarrollado como parte del curso **Backend II: Diseño y Arquitectura Backend**.

