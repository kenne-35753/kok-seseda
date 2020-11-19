<?php

use Illuminate\Support\Str;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Cache Store
    |--------------------------------------------------------------------------
    |
    | This option controls the default cache connection that gets used while
    | using this caching library. This connection is used when another is
    | not explicitly specified when executing a given caching function.
    |
    | Supported: "apc", "array", "database", "file", "memcached", "redis"
    |
    */

    'default' => env('CACHE_DRIVER', 'file'),

    /*
    |--------------------------------------------------------------------------
    | Cache Stores
    |--------------------------------------------------------------------------
    |
    | Here you may define all of the cache "stores" for your application as
    | well as their drivers. You may even define multiple stores for the
    | same cache driver to group types of items stored in your caches.
    |
    */

    'stores' => [

        'apc' => [
            'driver' => 'apc',
        ],

        'array' => [
            'driver' => 'array',
        ],

        'database' => [
            'driver' => 'database',
            'table' => env('CACHE_DATABASE_TABLE', 'cache'),
            'connection' => env('CACHE_DATABASE_CONNECTION', null),
        ],

        'file' => [
            'driver' => 'file',
            'path' => storage_path('framework/cache/data'),
        ],

        'memcached' => [
            'driver' => 'memcached',
            'persistent_id' => env('MEMCACHED_PERSISTENT_ID'),
            'sasl' => [
                env('MEMCACHED_USERNAME'),
                env('MEMCACHED_PASSWORD'),
            ],
            'options' => [
                // Memcached::OPT_CONNECT_TIMEOUT => 2000,
            ],
            'servers' => [
                [
                    'host' => env('MEMCACHED_HOST', '127.0.0.1'),
                    'port' => env('MEMCACHED_PORT', 11211),
                    'weight' => 100,
                ],
            ],
        ],


        'site1' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db1'),
        ],
        'site2' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db2'),
        ],
        'site3' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db3'),
        ],
        'site4' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db4'),
        ],
        'site5' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db5'),
        ],
        'site6' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db6'),
        ],
        'site7' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db7'),
        ],
        'site8' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db8'),
        ],
        'site9' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db9'),
        ],
        'site10' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db0'),
        ],
        'site15' => [
            'driver' => 'redis',
            'connection' => env('CACHE_REDIS_CONNECTION', 'db15'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Cache Key Prefix
    |--------------------------------------------------------------------------
    |
    | When utilizing a RAM based store such as APC or Memcached, there might
    | be other applications utilizing the same cache. So, we'll specify a
    | value to get prefixed to all our keys so we can avoid collisions.
    |
    */

    'prefix' => env(
        'CACHE_PREFIX',
        Str::slug(env('APP_NAME', 'lumen'), '_').'_cache'
    ),

];
