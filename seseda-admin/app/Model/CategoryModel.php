<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    protected $table = 'category';

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

    public static function add(string $name)
    {
        return self::query()->create(['name' => $name]);
    }

    public function site_category()
    {
        return $this->hasMany(SiteCategoryModel::class, 'category_id', 'id');
    }

    public static function getCategoryByNoSite(int $site_id)
    {
        return self::query()->whereDoesntHave('site_category', function (Builder $query) use ($site_id) {
            $query->where('site_id', $site_id);
        })->get();
    }
}
