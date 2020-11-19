<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    protected $table = 'category';

    public function video()
    {
        return $this->hasMany(VideoModel::class, 'category_id', 'id');
    }

    public static function groupNumber(int $site_id)
    {
        return self::query()->withCount(['video' => function ($query) use ($site_id) {
            $query->where('site_id', $site_id)->where('status', VideoModel::STATUS['show']);
        }])->get();
    }
}