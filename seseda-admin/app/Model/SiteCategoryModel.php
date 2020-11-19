<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SiteCategoryModel extends Model
{
    protected $table = 'site_category';

    public $timestamps = false;

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(CategoryModel::class, 'category_id', 'id');
    }

    public static function getCategoryBySiteId(int $site_id)
    {
        return self::query()->where('site_id', $site_id)->with('category')->orderByDesc('id')->get();
    }

    public static function del(int $id)
    {
        return self::query()->where('id', $id)->delete();
    }

    public static function add(array $data)
    {
        return self::query()->create($data);
    }

    public static function edit(int $id, array $data)
    {
        return self::query()->where('id', $id)->update($data);
    }
}
