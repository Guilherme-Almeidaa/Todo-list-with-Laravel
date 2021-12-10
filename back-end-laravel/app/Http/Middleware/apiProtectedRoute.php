<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class apiProtectedRoute extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        try {
            $user = JWTAuth::parseToken()->authenticate();
            $request->user =$user;
        } catch(\Exception $e) {
           if($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response(['status' => 'Token is invalid'],400);
           } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response(['status' => 'Token is Expired'],400);
           } else {
                return response(['status' => 'Autorization token not found'],400);
           }
        }
        return $next($request);
    }
}
