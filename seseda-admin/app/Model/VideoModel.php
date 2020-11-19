<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class VideoModel extends Model
{
    protected $table = 'video';

    protected $guarded = [];

    public $timestamps = false;

    const STATUS = [
        1 => '待审核',
        2 => '已上架',
        3 => '已下架',
    ];

    public function site()
    {
        return $this->belongsTo(SiteModel::class);
    }

    public function category()
    {
        return $this->belongsTo(CategoryModel::class);
    }

    public function video_label()
    {
        return $this->hasMany(VideoLabelModel::class, 'video_id', 'id');
    }

    protected static function conditionList(array &$parameter)
    {
        return self::query()
            ->when($parameter['site_id'], function ($query) use (&$parameter) {
                if ($parameter['site_id'] == 9999) {
                    $parameter['site_id'] = 0;
                }
                $query->where('site_id', $parameter['site_id']);
            })
            ->when($parameter['category_id'], function ($query) use (&$parameter) {
                if ($parameter['category_id'] == 9999) {
                    $parameter['category_id'] = 0;
                }
                $query->where('category_id', $parameter['category_id']);
            })
            ->when($parameter['status'], function ($query) use (&$parameter) {
                $query->where('status', $parameter['status']);
            })
            ->when($parameter['title'], function ($query) use (&$parameter) {
                $query->where('title', 'like', '%' . $parameter['title'] . '%');
            })
            ->when($parameter['image'], function ($query) use (&$parameter) {
                $query->where('image', 'like', '%' . $parameter['image'] . '%');
            })
            ->when($parameter['video'], function ($query) use (&$parameter) {
                $query->where('video', 'like', '%' . $parameter['video'] . '%');
            })
            ->when($parameter['label'], function (Builder $query) use (&$parameter) {
                $query->whereHas('video_label', function (Builder $query) use (&$parameter) {
                    $query->where('label_id', $parameter['label']);
                });
            });
    }

    public static function getAll(array $parameter)
    {
        return self::conditionList($parameter)
            ->orderByDesc('id')
            ->when($parameter['page'], function ($query) use (&$parameter) {
                $query->offset(($parameter['page'] - 1) * $parameter['limit']);
            })
            ->limit($parameter['limit'])
            ->with(['site', 'category'])
            ->get();
    }

    public static function find(int $id)
    {
        return self::query()->find($id);
    }

    public static function countAll(array &$parameter)
    {
        return self::conditionList($parameter)->count();
    }

    public static function edit(int $id, array $data)
    {
        return self::query()->where('id', $id)->update($data);
    }

    public static function statusEdit(int $status, array $id)
    {
        return self::query()->whereIn('id', $id)->update(['status' => $status,'update_time'=> time()]);
    }
}
