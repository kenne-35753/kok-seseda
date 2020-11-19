<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SiteModel extends Model
{
    protected $table = 'site';

    protected $guarded = [];

    public $timestamps = false;

    public static function getAll(string $sort = '')
    {
        return self::query()
            ->when($sort, function ($query) use ($sort) {
                $query->orderByRaw($sort);
            })
            ->get();
    }

    public static function edit(int $id, array $data)
    {
        return self::query()->where('id', $id)->update($data);
    }
}
