### Full stack development

- ### `Backend api installation`
    - Install docker:
        ```sh 
        curl -fsSL https://get.docker.com -o get-docker.sh
        ```
        ```sh 
        bash get-docker.sh
        ```
        ```sh
        sudo usermod -aG docker $USER
        ```
        ... then, for the last command above to take effect, reboot!
    - Install docker-compose:
        ```sh
        sudo apt install docker-compose
        ```
    - Install laravelsail:

        ```sh 
        curl -s https://laravel.build/app | bash
        ```
    - Make alias for `./vendor/bin/sail` as:
        ```sh
        alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
        ```
    - ... and run sail:
        ```sh
        cd app && sail up -d
        ```

- ### `Postman installation for testing the api`
    - download [postman](https://www.postman.com/downloads/) and run:
    ```sh
    sudo tar -xvf Postman-linux-x86_64-8.12.4.tar.gz -C /usr/bin
    ```
    ```sh
    export PATH=$PATH:/usr/bin/Postman
    ```
    - Bring postman on the launcher:
        - inside `/usr/share/applications/Postman.desktop` copy and paste the following lines:
        ```sh
        [Desktop Entry] 
        Name=Postman API Tool
        GenericName=Postman
        Comment=Testing API
        Exec=/usr/bin/Postman/Postman
        Terminal=false
        X-MultipleArgs=false
        Type=Application
        Icon=/usr/bin/Postman/app/resources/app/assets/icon.png
        StartupWMClass=Postman
        StartupNotify=true
        ```
- ### `Frontend SPA (Single Page App) installation ...`
    - To begin the SPA development, run:
    ```sh
    docker build . --no-cache -t react-axios
    ```
    ```sh
    docker run --rm -it -v $(pwd)/app-fe/src:/home/react/app/src -v $(pwd)/app-fe/public:/home/react/app/public -p 3000:3000 --name react-app react-axios
    ```
### The Deployment
  #### ___ ;)
