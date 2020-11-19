<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdvertisingModel extends Model
{
    protected $table = 'advertising';

    protected $guarded = [];

    const STATUS = [
        1 => 'pc-顶部',
        2 => 'pc-视频下方',
        3 => 'pc-底部横幅',
        4 => 'pc-右侧轮播',
        5 => 'pc-底部悬浮',
        6 => 'pc-左边悬浮',
        7 => 'pc-右边悬浮',
        8 => 'pc-播放视频中心',
        51 => 'phone-顶部',
        52 => 'phone-视频下方',
        53 => 'phone-底部横幅',
        54 => 'phone-右侧轮播',
        55 => 'phone-底部悬浮',
        58 => 'phone-播放视频中心',
    ];

    const IS_SHOW = [
        1 => '上架',
        2 => '下架',
    ];

    public function site()
    {
        return $this->belongsTo(SiteModel::class, 'site_id', 'id');
    }

    public static function getStatusAll()
    {
        $results = [];

        foreach (self::STATUS as $key => $item) {
            $results[] = [
                'title' => $item,
                'value' => $key
            ];
        }

        return $results;
    }

    public static function add(array $data)
    {
        return self::query()->insert($data);
    }

    public static function remove(int $id)
    {
        return self::query()->where('id', $id)->delete();
    }

    public static function edit(int $id, array $data)
    {
        return self::query()->where('id', $id)->update($data);
    }
    public static function statusEdit(int $status, array $id)
    {
        return self::query()->whereIn('id', $id)->update(['is_show' => $status,'updated_at'=> date("Y-m-d H:i:s",time())]);
    }

    private static function conditionList(array &$parameter)
    {
        return self::query()
            ->when($parameter['site_id'], function ($query) use (&$parameter) {
                $query->where('site_id', $parameter['site_id']);
            })
            ->when($parameter['state'], function ($query) use (&$parameter) {
                $query->where('state', $parameter['state']);
            })
            ->when($parameter['is_show'], function ($query) use (&$parameter) {
                $query->where('is_show', $parameter['is_show']);
            })
            ->when($parameter['title'], function ($query) use (&$parameter) {
                $query->where('title', 'like', '%' . $parameter['title'] . '%');
            })
            ->when($parameter['image'], function ($query) use (&$parameter) {
                $query->where('image', 'like', '%' . $parameter['image'] . '%');
            })
            ->when($parameter['address'], function ($query) use (&$parameter) {
                $query->where('address', 'like', '%' . $parameter['address'] . '%');
            })
            ->when($parameter['start_time'], function ($query) use (&$parameter) {
                $query->where('created_at', '<', $parameter['start_time']);
            })
            ->when($parameter['end_time'], function ($query) use (&$parameter) {
                $query->where('created_at', '>', $parameter['end_time']);
            });
    }

    public static function getAll(array &$parameter)
    {
        return self::conditionList($parameter)
            ->orderByDesc('id')
            ->when($parameter['page'], function ($query) use (&$parameter) {
                $query->offset(($parameter['page'] - 1) * $parameter['limit']);
            })
            ->limit($parameter['limit'])
            ->with('site')
            ->get();
    }

    public static function countAll(array &$parameter)
    {
        return self::conditionList($parameter)->count();
    }

    public static function find(int $id)
    {
        return self::query()->find($id);
    }
}