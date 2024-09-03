# Ta Te Ti

![781_1x_shots_so](https://github.com/user-attachments/assets/6b6d2262-cf4e-4106-84f1-43ccbe50ba57)
[Demo en vivo](https://ta-te-ti-github-io.vercel.app/)

### Descripción del Proyecto
Esta aplicación es una versión digital del popular juego de "Ta Te Ti" (o "Tres en Raya"), desarrollada con React. Los jugadores pueden ingresar sus nombres, y el juego mantiene el puntaje entre ambos durante la sesión.


### Características
* Modo de juego: Dos jugadores.
* Mantenimiento de puntajes: El juego guarda los puntajes de cada jugador hasta que se recarga la página.
* Animaciones de confeti: Cuando hay un ganador, una animación de confeti celebra la victoria.
* Interfaz Moderna: Diseño limpio y moderno, con colores llamativos para una experiencia visual atractiva.

### Tecnologías Utilizadas
* React.js
* JavaScript
* Html
* CSS

## Instalación
Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

```bash
git clone https://github.com/LopezSantii/TaTeTi.github.io.git
cd ta-te-ti
npm install
npm start
```

### Lógica del Juego
* Estado Inicial: Se define el estado inicial del tablero (board), el turno actual (turn), y el ganador (winner). También se guardan los nombres de los jugadores y los puntajes.
* Actualización del Tablero: La función updateBoard se encarga de actualizar el tablero y verificar si hay un ganador después de cada movimiento. Si hay un ganador, se dispara una animación de confeti y se actualiza el puntaje del jugador correspondiente.
* Reseteo del Juego: La función reset restablece el tablero y el turno, permitiendo que los jugadores comiencen de nuevo.
* Inicio del Juego: El juego comienza cuando ambos jugadores han ingresado sus nombres y presionan el botón "Comenzar a jugar".

### Uso
Una vez que hayas iniciado la aplicación, los jugadores pueden ingresar sus nombres y comenzar a jugar haciendo clic en los cuadros del tablero.

### Roadmap

Este proyecto está en constante evolución. Aquí hay una lista de características y mejoras que planeo implementar en el futuro:

- [ ] **Funcionalidad Online**: Permitir a los jugadores competir en línea, conectándose desde diferentes dispositivos.
- [ ] **Mejoras en la UI**: Refinar la interfaz de usuario para mejorar la experiencia de juego, especialmente en dispositivos móviles.
- [ ] **Temas Personalizados**: Permitir a los usuarios cambiar los colores y estilos del juego para personalizar su experiencia.
- [ ] **Soporte Multilenguaje**: Añadir soporte para varios idiomas para que el juego sea accesible a una audiencia más amplia.

### Curso de React
Este proyecto fue desarrollado como parte del [curso de React de Midudev](https://www.youtube.com/watch?v=qkzcjwnueLA&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=2), una excelente guía para aprender React desde lo básico hasta conceptos avanzados. ¡Altamente recomendado para quienes quieren mejorar sus habilidades en desarrollo frontend!

### Gracias por llegar hasta aqui espero que les haya gustado ❤
[LinkedIn](https://www.linkedin.com/in/santiago-lopez-3962a4234/)
