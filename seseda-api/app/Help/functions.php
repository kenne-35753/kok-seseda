<?php


function success(array $data = []): array
{
    return [
        'code' => '0',
        'data' => $data
    ];
}

function error(string $code): array
{
    return [
        'code' => $code,
        'msg'  => ERROR_CODE[$code]
    ];
}

function sql_start()
{
    Illuminate\Support\Facades\DB::enableQueryLog();
}

function sql_show()
{
    dump(Illuminate\Support\Facades\DB::getQueryLog());
}