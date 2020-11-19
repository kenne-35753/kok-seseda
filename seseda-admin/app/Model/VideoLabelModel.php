<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VideoLabelModel extends Model
{
    protected $table = 'video_label';

    public $timestamps = false;

    protected $guarded = [];

    public function label()
    {
        return $this->belongsTo(LabelModel::class, 'label_id', 'id');
    }

    public static function deleteByLabelId(int $label_id)
    {
        return self::query()->where('label_id', $label_id)->delete();
    }

    public static function getLabelByVideoId(int $video_id)
    {
        return self::query()->where('video_id', $video_id)->with('label')->orderByDesc('id')->get();
    }

    public static function del(int $id)
    {
        return self::query()->where('id', $id)->delete();
    }

    public static function add(array $data)
    {
        try {
            return self::query()->create($data);
        } catch (\Exception $e) {
        }
        return false;
    }
}
