<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class LinkModel extends Model
{
    protected $table = 'link';

    public $timestamps = false;

    protected $guarded = [];

    public function site_link()
    {
        return $this->hasMany(SiteLinkModel::class, 'link_id', 'id');
    }

    public static function getAll(string $sort)
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

    public static function add(string $name, string $url)
    {
        return self::query()->create([
            'name' => $name,
            'url'  => $url,
        ]);
    }

    public static function del(int $id)
    {
        DB::transaction(function () use ($id) {
            SiteLinkModel::deleteByLinkId($id);

            self::query()->where('id', $id)->delete();
        });
    }

    public static function getLinkByNoSite(int $site_id)
    {
        return self::query()->whereDoesntHave('site_link', function (Builder $query) use ($site_id) {
            $query->where('site_id', $site_id);
        })->get();
    }
}
