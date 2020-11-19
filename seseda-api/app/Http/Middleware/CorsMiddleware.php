<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->isMethod('OPTIONS')) {
            $response = response('', 200);
        } else {
            // Pass the request to the next middleware
            $response = $next($request);
        }

        $response->header('Access-Control-Allow-Origin', '*');
//        $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
//
//        if (in_array($origin, [
//            'http://www.seseda86.com',
//            'http://seseda86.com',
//            'http://www.seseda29.com',
//            'http://seseda29.com',
//            'http://test.sesedanew.com'
//        ])) {
//            $response->header('Access-Control-Allow-Origin', $origin);
//        }
//
//        $response->header('Access-Control-Allow-Methods', 'GET, POST');//HEAD, GET, POST, PUT, PATCH, DELETE
//        $response->header('Access-Control-Allow-Headers', $request->header('Access-Control-Request-Headers'));
//        $response->header('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}