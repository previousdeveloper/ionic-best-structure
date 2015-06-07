# ionic-best-template

 - Define 1 component per file.

  The following example defines the `app` module and its dependencies, defines a controller, and defines a factory all in the same file.

  ```javascript
  /* recommended */

  // app.module.js
  angular
      .module('app', ['ngRoute']);
  ```

  ```javascript
  /* recommended */

  // ChatDetailCtrl.js
  angular
      .module('app')
      .controller('ChatDetailCtrl', ChatDetailCtrl);

  function ChatDetailCtrl() { }
  ```

  ```javascript
  /* recommended */

  // someFactory.js
  angular
      .module('app')
      .factory('Chats', chatDetailService);

  function chatDetailService() { }
  ```
  
  ###Separate file structure
  
  
     ```
/www
  /js
    /account
      /controller
        /account.controller.js
      /service
        /account.service.js
      /config.js
index.html
    ```
    

    
    ##For browser
     ```
    $ ionic serve
    ```
    
    ##For android
    ```
    $ ionic platform add android
    $ ionic build android
    $ ionic emulate android
    ```
    
    ##For ios
    ```
    $ ionic platform add ios
    $ ionic build ios
    $ ionic emulate ios
     ```
    
