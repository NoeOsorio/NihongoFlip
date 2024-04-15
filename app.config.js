import "dotenv/config";

export default ({ config }) => {
  return {
    expo: {
      name: "nihongoFlip",
      slug: "nihongoFlip",
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
        bundleIdentifier: "com.noeosorio.nihongoFlip",
        useModularHeaders: true,
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.noeosorio.nihongoFlip",
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        eas: {
          projectId: "b27740e5-5cf1-4c52-be33-8add90e16d4c",
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
