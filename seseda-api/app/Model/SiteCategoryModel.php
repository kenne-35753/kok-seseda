<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class SiteCategoryModel extends Model
{
    protected $table = 'site_category';

    public function category()
    {
        return $this->belongsTo(CategoryModel::class);
    }

    public function video()
    {
        return $this->hasMany(VideoModel::class, 'category_id', 'category_id');
    }

    public static function info(int $site_id)
    {
        return self::query()
            ->where('site_id', $site_id)
            ->with('category')
            ->withCount(['video' => function (Builder $query) use ($site_id) {
                $query->where('site_id', $site_id)->where('status', VideoModel::STATUS['show']);
            }])
            ->orderByDesc('sort')
            ->get();
    }
}