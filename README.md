# Proyecto de Ejemplo con jQuery

Este es un proyecto simple que demuestra algunas funcionalidades básicas de jQuery.

## Descripción

El proyecto consta de dos páginas HTML:

1.  **`index.html`**: Muestra ejemplos de:
    *   Ocultar y mostrar elementos.
    *   Seleccionar elementos (coloreando filas pares de una lista).
    *   Manipulación del DOM (agregar y eliminar elementos de una lista).

2.  **`formulario.html`**: Contiene:
    *   Un formulario de contacto simple con validación de campos (nombre y correo electrónico).
    *   Un carrusel de imágenes básico con botones de "Anterior" y "Siguiente".

## Estructura de Archivos

```
.
├── formulario.html     # Página con el formulario y el carrusel
├── img/                # Directorio de imágenes para el carrusel
│   ├── photo-1554272014-73b77edeb47f.avif
│   ├── photo-1562412692-26406e1bf600.avif
│   └── photo-1568920011133-e68fb433562e.avif
├── index.html          # Página principal con ejemplos de jQuery
├── js/                 # Directorio de archivos JavaScript
│   ├── formulario.js   # Lógica para el formulario y el carrusel
│   ├── jquery-3.7.1.js # Biblioteca jQuery (local)
│   └── main.js         # Lógica para index.html
└── README.md           # Este archivo
```

## Cómo Ejecutar el Proyecto

1.  Clona este repositorio o descarga los archivos.
2.  Abre los archivos `index.html` o `formulario.html` directamente en tu navegador web.

No se requiere ningún servidor web especial ni pasos de compilación.

## Mejoras Realizadas

*   Se eliminó la importación duplicada de jQuery en `index.html`.
*   Se mejoraron los mensajes de validación en `formulario.html` para ser más específicos e indicar qué campo es obligatorio.
*   Se añadió este archivo `README.md`.
```
