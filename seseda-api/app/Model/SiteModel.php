<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class SiteModel extends Model
{
    protected $table = 'site';

    public function site_link()
    {
        return $this->belongsToMany(LinkModel::class, 'site_link', 'site_id', 'link_id');
    }

    public static function getLink(int $id)
    {
//        return self::query()->where('id', $id)->with('site_link')->get();
        return self::query()->where('id', $id)->first()->site_link()->get();
    }

    public static function find(int $id)
    {
        return self::query()->find($id);
    }
}