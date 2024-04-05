#!/bin/bash

# Antes de ejecutar este script, asegúrate de que `jq` esté instalado en tu sistema.
# jq es una herramienta de línea de comandos para manipular JSON.
#
# Para instalar jq:
# En Ubuntu/Debian: sudo apt-get install jq
# En Fedora: sudo dnf install jq
# En CentOS/RHEL (con EPEL habilitado): sudo yum install jq
# En macOS con Homebrew: brew install jq
# En macOS con MacPorts: sudo port install jq
# En Windows, descarga el binario desde https://stedolan.github.io/jq/download/
# y añádelo a tu PATH.

# Dale permisos de ejecución a este script:
# chmod +x scripts/create-env.sh

# Verificar el número de argumentos
if [ "$#" -ne 3 ]; then
    echo "Uso incorrecto. La forma correcta es: $0 <ruta_al_archivo_.env> --profile <perfil>"
    exit 1
fi

# Asegurarse de que el segundo argumento sea "--profile"
if [ "$2" != "--profile" ]; then
    echo "El segundo argumento debe ser --profile. Uso: $0 <ruta_al_archivo_.env> --profile <perfil>"
    exit 1
fi

ENV_FILE="$1"
PROFILE="$3"

# Verificar si el archivo .env existe
if [ ! -f "$ENV_FILE" ]; then
    echo "El archivo .env especificado ($ENV_FILE) no existe."
    exit 1
fi

echo "Archivo .env: $ENV_FILE"
echo "Perfil: $PROFILE"
# Aquí continuaría el resto de tu script que procesa las variables de entorno...


# Directorio raíz del proyecto
PROJECT_ROOT="$(dirname "$0")/.."

ENV_FILE="$PROJECT_ROOT/$1"
if [ ! -f "$ENV_FILE" ]; then
    echo "El archivo .env especificado no existe en el directorio raíz del proyecto."
    exit 1
fi

# Extrae el perfil
PROFILE="${@: -1}"

# Cambia al directorio raíz del proyecto
cd "$PROJECT_ROOT" || exit

# Lee las variables de entorno del archivo .env
while IFS='=' read -r name value || [[ -n "$name" ]]; do
    # Ignora líneas vacías y comentarios
    [[ "$name" == \#* ]] || [[ -z "$name" ]] && continue
    
    # Crea el secreto en EAS
    eas secret:create --name "$name" --value "$value" --type string
    
    # Prepara el nombre del secreto para eas.json
    SECRET_NAME=$(echo "@$name" | tr '[:upper:]' '[:lower:]')

    
    # Añade las variables de entorno al perfil correspondiente en eas.json
    # Usamos jq para editar el JSON de manera segura
    jq --arg profile "$PROFILE" --arg name "$name" --arg secretName "$SECRET_NAME" \
      '.build[$profile].env[$name] = $secretName' eas.json > tmp.$$.json && mv tmp.$$.json eas.json

done < "$ENV_FILE"

echo "Las variables de entorno se han configurado correctamente para el perfil '$PROFILE'."