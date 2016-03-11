##university management app
this app use laravel framework as backend and angularjs as frontend. for authentication it uses json web token


###requirement
-PHP

-MySql

-composer

###Installation
```
git clone https://github.com/ducaale/university-management-app.git
```
```
composer install --prefer-dist
```
###Database setup
rename .env.example to .env and modify it according to your database then run
```
php artisan key:generate
```
```
php artisan migrate:install
```
```
php artisan migrate:refresh
```
```
php artisan db:seed
```

###Running the program
running this command will start server at port 8000
```
php artisan serve
```
###using the program
admin

-xaamud23

-secret

student

-user name: bcs1-12

-password:secret
