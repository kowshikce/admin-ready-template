const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .css('resources/css/app.css', 'public/css/dt.bs-4.css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/fontawesome.scss', 'public/css/fontawesome')
    .sass('resources/sass/bootstrap.scss', 'public/css/bootstrap')
    .js('resources/js/datatables/demoDatatable.js', 'public/js')
    .js('resources/js/auth/login_helper.js', 'public/js')
    .js('resources/js/ruang/ruang-admin.js', 'public/js')
    .js('resources/js/chart/demoChart.js', 'public/js');