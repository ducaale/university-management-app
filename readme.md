##university management app
this app use laravel framework as backend and angularjs as frontend. for authentication it uses json web token


###requirement
*PHP
*MySql
*composer

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
###seeding the Database with intial data

```
php artisan db:seeder -class=facultyTableSeeder
```
```
php artisan db:seeder -class=departmentTableSeeder
```
```
php artisan db:seeder -class=batchesTableSeeder
```
```
php artisan db:seeder -class=genderTableSeeder
```
```
php artisan db:seeder -class=userTableSeeder
```
```
php artisan db:seeder -class=guardiansTableSeeder
```
```
php artisan db:seeder -class=studentsTableSeeder
```

###Running the program
running this command will start server at port 8080
```
php artisan serve
```
###using the program
user name: bcs1-12
password:secret
