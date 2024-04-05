import "dotenv/config";

export default ({ config }) => {
  return {
    expo: {
      name: "languageCards",
      slug: "languageCards",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.noeosorio.languageCards",
        useModularHeaders: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.noeosorio.languageCards",
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        eas: {
          projectId: "916c396c-c901-4595-8219-d78df73d165d",
        },
        // Aquí agregamos las variables de entorno que el script create-env.sh establecerá
        // en EAS Build, o se usarán desde .env en desarrollo local
        firebaseApiKey: process.env.FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
        firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID,
        firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
      owner: "noeosorio",
      plugins: [
        [
          "expo-build-properties",
          {
            ios: {
              useModularHeaders: true,
            },
            android: {},
          },
        ],
      ],
    },
  };
};
