<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', App\Http\Controllers\API\LoginController::class)->name('login');

Route::post('/logout', App\Http\Controllers\API\LogoutController::class)->name('logout');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});