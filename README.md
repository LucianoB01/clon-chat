# Clon Chat 💬

Una aplicación de mensajería moderna y responsiva construida con **React**, **Vite** y **CSS nativo**. Optimizada para dispositivos móviles.

## 🛠️ Tecnologías

- **React** 19.2.4
- **React Router DOM** 7.14.1
- **React Icons** 5.6.0 (iconografía)
- **Vite** 8.0.4 (bundler)
- **CSS3** nativo con variables y media queries

## ⚙️ Instalación

```bash
cd clon-chat
npm install
```

## 🎯 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Genera build optimizado para producción |
| `npm run preview` | Previsualizador local del build |
| `npm run lint` | Valida código con ESLint |

## 🚀 Cómo Ejecutar

```bash
npm run dev
```

## 📂 Estructura del Proyecto

```
clon-chat/
├── src/
│   ├── Components/
│   │   ├── ChatBox/           # Panel de chat e input
│   │   │   ├── ChatBox.jsx
│   │   │   └── ChatBox.css
│   │   └── Chats/             # Sidebar con lista y búsqueda
│   │       ├── Chats.jsx
│   │       └── Chats.css
│   ├── Context/
│    │  ├── UsersContext.jsx
│   ├── Screens/
│   │   ├── HomeScreen/        # Pantalla inicial (lista)
│   │   │   ├── HomeScreen.jsx
│   │   │   └── HomeScreen.css
│   │   ├── ChatScreen/        # Pantalla de conversación
│   │   │   ├── ChatScreen.jsx
│   │   │   └── ChatScreen.css
│   │   └── NotFoundScreen/    # Pantalla 404
│   ├── data/
│   │   └── users.js           # Array de usuarios
│   ├── styles/
│   │   └── global.css         # Tokens y reset global
│   ├── App.jsx                # Componente raíz
│   ├── main.jsx               # Entry point
│   └── ...
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 💡 Cómo Usar

### 1. **Home Screen** (`/`)
- Ver lista de todos los usuarios
- Buscar usuarios por nombre (filtro en tiempo real)
- Ver estado de actividad: "Online" o "Última vez hace X minutos"
- Presionar botón (+) para crear nuevo chat

### 2. **Chat Screen** (`/:id`)
- Conversación con usuario seleccionado
- Escribir mensaje y presionar Enter o click en "Enviar"
- Recibir respuesta automática después de 1 segundo
- En mobile: botón "Volver" para regresar a la lista

### 3. **Búsqueda y Filtrado**
- Escribe en la barra "Buscar usuarios..."
- Lista se actualiza en tiempo real

### 4. **Crear Chat**
- Presiona el botón flotante azul (+)
- Ingresa nombre del nuevo usuario

## 🎨 Diseño Visual

### Tema Color
- **Primario**: `#2563eb` (azul)
- **Fondo App**: `#eef2f7` (gris claro)
- **Panel**: `#ffffff` (blanco)
- **Texto**: `#1f2937` (gris oscuro)
- **Secundario**: `#6b7280` (gris medio)

### Componentes Clave
- **Burbujas de mensaje**: Diferenciadas por remitente
  - Enviado: azul degradado, derecha, redondeado
  - Recibido: blanco con borde, izquierda, redondeado
- **Input búsqueda**: Fondo suave, border sutil, focus con sombra azul
- **Botones**: Gradiente azul, hover con brillo
- **Modal**: Overlay oscuro, diálogo centrado

## 📱 Responsivo

La aplicación adapta su layout según el tamaño de pantalla:

| Resolución | Comportamiento |
|---|---|
| **Desktop** (>768px) | 2 columnas: sidebar (31%) + chat (69%) |
| **Tablet** (≤768px) | 1 panel a la vez con navegación suave |
| **Mobile** (≤480px) | Full width con paddings optimizados |

En mobile, al ingresar a un chat, la lista se oculta. El botón "Volver" permite regresar.

## 👨‍💻 Autor

Luciano Buceta
**Proyecto en React**  
Abril 2026


