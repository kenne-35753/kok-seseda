<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class LabelModel extends Model
{
    protected $table = 'label';

    protected $guarded = [];

    public $timestamps = false;

    public function site_label()
    {
        return $this->hasMany(SiteLabelModel::class, 'label_id', 'id');
    }

    public function video_label()
    {
        return $this->hasMany(VideoLabelModel::class, 'label_id', 'id');
    }

    public static function getLabelByNoSite(int $site_id)
    {
        return self::query()->whereDoesntHave('site_label', function (Builder $query) use ($site_id) {
            $query->where('site_id', $site_id);
        })->get();
    }

    public static function getLabelByNoVideo(int $video_id)
    {
        return self::query()->whereDoesntHave('video_label', function (Builder $query) use ($video_id) {
            $query->where('video_id', $video_id);
        })->get();
    }

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

    public static function del(int $id)
    {
        DB::transaction(function () use ($id) {
            VideoLabelModel::deleteByLabelId($id);

            SiteLabelModel::deleteByLabelId($id);

            self::query()->where('id', $id)->delete();
        });
    }
}
