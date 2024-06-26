<div align="center">

# Nihongo Flip 📚

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Una aplicación de React Native para el aprendizaje de idiomas con tarjetas estilo Anki, que permite a los usuarios aprender y practicar vocabulario y frases en diferentes idiomas mediante tarjetas interactivas.

![Nihongo Flip Logo](assets/logo.png)

</div>

## 📸 Capturas de Pantalla

<img src="assets/ss1.png" alt="Home Screen" width="300" />
<img src="assets/ss2.png" alt="Home Screen with flipped card" width="300" />
<img src="assets/ss3.png" alt="Lessons Screen" width="300" />

## 🚀 Descripción

Nihongo Flip está diseñada para ofrecer una experiencia de aprendizaje interactiva y atractiva, permitiendo a los usuarios practicar idiomas con el método de repetición espaciada. La integración con Firebase Firestore ofrece un backend robusto y escalable, facilitando la gestión de tarjetas y lecciones.

## 🌟 Características Principales

- **Práctica con Tarjetas**: Practica idiomas con tarjetas que muestran frases y vocabulario.
- **Lecciones Personalizadas**: Acceso a diferentes sets de tarjetas organizados por lecciones.
- **Progreso del Usuario**: Visualización del progreso en cada lección.
- **Integración con Firebase Firestore**: Uso de Firestore para almacenar y recuperar datos de tarjetas y lecciones.

## 💻 Tecnologías Utilizadas

- React Native
- Firebase Firestore
- Expo

## 📚 Retos y Soluciones

Algunos de los retos enfrentados durante el desarrollo incluyen:

- **Integración de Firebase en React Native**: Configurar Firebase para que funcione con React Native, asegurando la compatibilidad entre plataformas.
- **Diseño de UI/UX para Múltiples Plataformas**: Crear una experiencia de usuario consistente y atractiva en Android e iOS.
- **Manejo de Estados en React Native**: Utilizar estados y efectos correctamente para gestionar la lógica de la aplicación sin comprometer el rendimiento.

### 🔍 Páginas Web Consultadas

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Firebase for React Native](https://firebase.google.com/docs/react-native/setup)
- [Expo Documentation](https://docs.expo.dev/)

## ⚙️ Configuración del Proyecto

Para configurar y ejecutar este proyecto en tu entorno de desarrollo:

1. Clona el repositorio.
2. Ejecuta `npm install` o `yarn install` para instalar las dependencias.
3. Configura tu proyecto Firebase y obtén tu `google-services.json` o `GoogleService-Info.plist`.
4. Inicia la aplicación con `expo start`.

## 📖 Cómo Subir Contenido a la Base de Datos

(Esta sección debe ser completada con detalles específicos sobre cómo los usuarios pueden subir tarjetas y lecciones a la base de datos de Firestore.)

## 🌱 Agregar Nuevas Variables de Entorno

Para agregar nuevas variables de entorno y asegurar su correcta implementación en tus entornos de desarrollo, prueba y producción:

1. **Localmente**:
   Añade la variable de entorno al archivo `.env` en la raíz de tu proyecto. Ejemplo:
   `NUEVA_VARIABLE=valor`

2. **En EAS Build**:
   Utiliza el script `scripts/create-env.sh` para sincronizar tus variables de entorno con EAS. Ejecuta el siguiente comando en la terminal, sustituyendo `<tu_perfil_de_build>` por el perfil de build deseado, como `preview` o `production`:
   `./scripts/create-env.sh .env --profile <tu_perfil_de_build>`
   Este paso creará los secretos en EAS y actualizará tu `eas.json` automáticamente.

3. **Verificación**:
   Revisa `eas.json` para confirmar que las nuevas variables de entorno se han añadido correctamente al perfil de build deseado.

Siguiendo estos pasos, puedes gestionar de manera eficiente las variables de entorno en tu proyecto Nihongo Flip, manteniendo una separación clara entre los entornos de desarrollo, prueba y producción.

## 📖 Agregar Datos
Para agregar nuevos datos a la base de datos, debes utilizar la herramienta [Nihongo Flip Data](https://github.com/NoeOsorio/NihongoFlip-data) que hemos creado específicamente para este propósito. Sigue los siguientes pasos:

1. Clona el repositorio de GitHub en tu entorno de desarrollo local.
2. Abre el archivo de datos correspondiente en el repositorio.
3. Agrega los nuevos datos siguiendo el formato establecido.
5. Los nuevos datos se actualizarán automáticamente en la base de datos.

Recuerda seguir las pautas y convenciones establecidas en el repositorio para garantizar la consistencia y calidad de los datos agregados.

¡Gracias por contribuir a nuestro proyecto!

## 🤝 Contribuir

Si deseas contribuir a este proyecto, te invitamos a realizar un pull request o enviar un correo a [business@noeosorio.com](mailto:business@noeosorio.com).

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.