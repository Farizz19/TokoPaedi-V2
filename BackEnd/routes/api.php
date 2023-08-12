<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', App\Http\Controllers\API\LoginController::class)->name('login');

Route::post('/logout', App\Http\Controllers\API\LogoutController::class)->name('logout');

Route::get('/users', App\Http\Controllers\API\UserController::class)->name('users');

Route::post('/add', App\Http\Controllers\API\AddController::class)->name('add');

// Route::get('delete/{id}', App\Http\Controllers\API\DeleteController::class)->name('delete');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});