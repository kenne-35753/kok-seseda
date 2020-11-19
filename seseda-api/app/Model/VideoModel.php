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
        'audit'  => 1,//待审核
        'show'   => 2,//已上架
        'hidden' => 3,//已下架
    ];

    public function video_label()
    {
        return $this->belongsToMany(LabelModel::class, 'video_label', 'video_id', 'label_id');
    }

    public function VideoLabelHasMany()
    {
        return $this->hasMany(VideoLabelModel::class, 'video_id', 'id');
    }

    public static function show(int $site_id)
    {
        return self::query()
            ->where('site_id', $site_id)
            ->where('status', self::STATUS['show']);
    }

    public static function lists(int $site_id, int $length, int $page = 0, int $category = 0, string $keyword = '', int $label_id = 0, int $rand = 0, $order = 'id')
    {
        return self::show($site_id)
            ->when($category, function (Builder $query) use ($category) {
                return $query->where('category_id', $category);
            })
            ->when($keyword, function (Builder $query) use ($keyword) {
                return $query->where('title', 'like', '%' . $keyword . '%');
            })
            ->when($label_id, function (Builder $query) use ($label_id) {
                $query->whereHas('VideoLabelHasMany', function (Builder $query) use ($label_id) {
                    $query->where('label_id', $label_id);
                });
            })
            ->when($rand, function (Builder $query) {
                //获取随机视频  分页
                $query->inRandomOrder();
            })
            ->when($page, function (Builder $query) use ($length, $page) {
                $query->offset($length * ($page - 1));
            })
            ->when($page == 0, function (Builder $query) {
                //获取随机视频  不分页
                $query->inRandomOrder();
            })
            ->limit($length)
            ->with('video_label')
            ->orderByDesc($order)
            ->get(['id', 'visit', 'time_long', 'title', 'image', 'video', 'domain']);
    }

    public static function randVideo(int $number)
    {
        return self::query()->inRandomOrder()->limit($number)->get(['id', 'visit', 'time_long', 'title', 'image', 'video', 'domain']);
    }

    public static function getByIds(array $id)
    {
        return self::query()->whereIn('id', $id)->get(['id', 'visit', 'time_long', 'title', 'image', 'video', 'domain']);
    }

    public static function count(int $site_id, int $category = 0, string $keyword = '', int $label_id = 0)
    {
        return self::show($site_id)
            ->when($category, function ($query) use ($category) {
                return $query->where('category_id', $category);
            })
            ->when($keyword, function ($query) use ($keyword) {
                return $query->where('title', 'like', '%' . $keyword . '%');
            })
            ->when($label_id, function (Builder $query) use ($label_id) {
                $query->whereHas('VideoLabelHasMany', function (Builder $query) use ($label_id) {
                    $query->where('label_id', $label_id);
                });
            })
            ->count();
    }

    /**
     * @param int $id
     * @return int
     */
    public static function visitSave(int $id)
    {
        return self::query()->where('id', $id)->increment('visit');
    }
}