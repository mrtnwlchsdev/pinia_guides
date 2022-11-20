# Pinia

Pinia es el administrador de estados actual de Vue.js, (de facto Pinia es Vuex 4).

Pinia permite almacenar estados globales de una aplicacion en stores. Cuando el valor de un estado global es modificado, este cambio podra ser visualizado en todos los componentes que tengan acceso a dicho estado global.

Las stores de Pinia contienen funciones llamadas actions, las cuales se encargan de modificar el estado de la aplicacion. Estas funciones pueden ser accedidas desde cualquier componente de la aplicacion.

## Instalacion de Pinia

Pinia puede ser instalado como una libreria externa a traves de npm haciendo uso del siguiente comando

    $ npm install pinia

Una vez finalizada la instalacion, en el archivo main.js del proyecto de Vue.js se debe realizar la importacion de Pinia

    import { createPinia } from 'pinia'

Luego de realizada la importacion, mediante un middleware se podra invocar al metodo createPinia() que posteriormente permitira acceder a la funcionalidad de administracion de estados

    const app = createApp(App)
    app.use(createPinia())

Sin embargo el proceso anterior puede ser omitido al inicializar un nuevo proyecto de Vue.js 3 Composition API, ya que el siguiente comando permite incluir Pinia por defecto en dicho proyecto

    $ npm init vue@latest

## Estructura de archivos

Las stores de Pinia se ubican en la siguiente ruta

    |- src
        |- stores
            |- store1.js
            |- store2.js
            ...

