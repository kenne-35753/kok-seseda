<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class AdvertisingModel extends Model
{
    protected $table = 'advertising';

    protected $guarded = [];

    public $timestamps = false;

    public static function getAll(int $site_id)
    {
        return self::query()->where('site_id', $site_id)
            ->where('is_show', 1)
            ->orderByRaw('state, sort desc')
            ->get(['state', 'title', 'image', 'address']);
    }
}