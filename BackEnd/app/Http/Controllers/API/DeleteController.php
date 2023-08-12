<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    $user = User::find($id);
        $user->delete();
        // return response()->json([
        //     'status' => 200,
        //     'message' => 'user deleted',
        // ]);
}
