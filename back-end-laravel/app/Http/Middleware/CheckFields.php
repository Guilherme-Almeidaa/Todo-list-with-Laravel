<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckFields 
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
        if(!$request->description) {
            return response(['error'=>'required description'],400);
        };
        if (strlen($request->description) < 1) {
            return response()->json(['error'=>'description cannot be empty']);
        };
        return $next($request);
    }
}
