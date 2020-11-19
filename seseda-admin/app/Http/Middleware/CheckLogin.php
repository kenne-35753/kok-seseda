<?php

namespace App\Http\Middleware;

use Closure;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $key = $request->cookie('laravel_session');

            $check = cache()->store('file')->has($key);
        } catch (\Exception $e) {
            return back();
        }

        if ($check) {
            return $next($request);
        }

        return redirect(route('login'));
    }
}
