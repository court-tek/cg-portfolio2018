<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.home');
})->name('home');

Route::get('/skills', function () {
    return view('pages.skills');
})->name('skills');

Route::get('/projects', function () {
    return view('pages.projects');
})->name('projects');

Route::get('/projects/project/{id}', function () {
    return view('pages.subPages.project');
})->name('info');

Route::get('/short-bio', function () {
    return view('pages.bio');
})->name('bio');

Route::get('/blog', function () {
    return view('pages.blog');
})->name('blog');
