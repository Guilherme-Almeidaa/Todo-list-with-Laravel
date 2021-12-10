<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    private function checkDate ($data) {
       $error = [];
       foreach($data as $key => $value) {
          
           if(!$value || $value === "") {
            
            $error[$key] = "$key is required";
           }
       }
       if(count($error) === 0) {
           return null;
       } else {
           return $error;
       }
    }

    public function login(Request $request)
    {
       

        $credentials = request(['email', 'password']);
        $check = $this->checkDate($request->all());
        if($check) {
            return response($this->checkDate($request->all()),400);
        }
        
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    public function update(Request $request)
    
    {   
        $check = $this->checkDate($request->all());
        if($check) {
            return response($this->checkDate($request->all()),400);
        }
        auth()->user()->update($request->all());
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function register (Request $request) {
       
        $check = User::where('email' ,request('email'))->get();
        $checkField = $this->checkDate($request->all());
        if($checkField) {
            return response($this->checkDate($request->all()),400);
        }
       
        if(count($check->all())) {
            return response(['error' => 'email already registered'],400);
        };
       
       $result = User::create([
           'name'=> request('name'),
           'email' => request('email'),
           'password' => Hash::make(request('password'))
       ]);

      


       return $this->login(request());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user(),
        ]);
    }
}
