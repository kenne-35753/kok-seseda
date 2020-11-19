<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SiteLinkModel extends Model
{
    protected $table = 'site_link';

    protected $guarded = [];

    public $timestamps = false;

    public function link()
    {
        return $this->belongsTo(LinkModel::class, 'link_id', 'id');
    }

    public static function deleteByLinkId(int $link_id)
    {
        return self::query()->where('link_id', $link_id)->delete();
    }

    public static function getLinkBySiteId(int $site_id)
    {
        return self::query()->where('site_id', $site_id)->with('link')->orderByDesc('id')->get();
    }

    public static function del(int $id)
    {
        return self::query()->where('id', $id)->delete();
    }

    public static function add(array $data)
    {
        return self::query()->create($data);
    }
}
