<?php

namespace App\Http\Middleware;

use Closure;

class SiteIdMiddleware
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
        switch ($request->getPathInfo()) {
            case '/video':
                $data     = $request->only(['category', 'page']);
                $rules    = [
                    'category' => 'bail | required | integer',
                    'page'     => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'category.*' => 201,
                    'page.*'     => 301,
                ];
                break;
            case '/video/search':
                $data     = $request->only(['keyword', 'page']);
                $rules    = [
                    'keyword' => 'bail | required | string | min:1',
                    'page'    => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'keyword.*' => 401,
                    'page.*'    => 301,
                ];
                break;
            case '/getLinkVideo':
                $data     = $request->only(['id']);
                $rules    = [
                    'id' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'id.*' => 1001,
                ];
                break;
            case '/video/label':
                $data     = $request->only(['id', 'label_id']);
                $rules    = [
                    'label_id' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'label_id.*' => 501,
                ];
                break;
            case '/video/hot':
                $data     = $request->only(['page']);
                $rules    = [
                    'page' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'page.*' => 301,
                ];
                break;
            case '/video/recommended':
                $data     = $request->only(['page']);
                $rules    = [
                    'page' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'page.*' => 301,
                ];
                break;
            case '/video/latest':
                $data     = $request->only(['page']);
                $rules    = [
                    'page' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'page.*' => 301,
                ];
                break;
            case '/video/watch':
                $data     = $request->only(['video_id']);
                $rules    = [
                    'video_id' => 'bail | required | integer | min:1',
                ];
                $messages = [
                    'video_id.*' => 1001,
                ];
                break;
        }

        $data['site_id']       = $request->input('site_id');
        $rules['site_id']      = 'bail | required | in:1,2,3,4,5,6,7,8,9,10';
        $messages['site_id.*'] = 101;

        $validator = validator($data, $rules, $messages);

        if ($validator->fails()) {
            return response(error($validator->errors()->first()));
        }

        return $next($request);
    }
}
