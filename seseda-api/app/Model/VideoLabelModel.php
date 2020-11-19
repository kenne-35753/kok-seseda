<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class VideoLabelModel extends Model
{
    protected $table = 'video_label';

    public static function label(int $video_id)
    {
        return self::query()->where('video_id', $video_id)->pluck('label_id');
    }

    public static function link(array $label_id, int $length)
    {
        return self::query()
            ->whereIn('label_id', $label_id)
            ->inRandomOrder()
            ->limit($length)
            ->pluck('video_id');
    }
}