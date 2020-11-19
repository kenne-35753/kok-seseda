<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SiteLabelModel extends Model
{
    protected $table = 'site_label';

    protected $guarded = [];

    public $timestamps = false;

    public function label()
    {
        return $this->belongsTo(LabelModel::class, 'label_id', 'id');
    }

    public static function getLabelBySiteId(int $site_id)
    {
        return self::query()->where('site_id', $site_id)->with('label')->orderByDesc('id')->get();
    }

    public static function deleteByLabelId(int $label_id)
    {
        return self::query()->where('label_id', $label_id)->delete();
    }

    public static function del(int $id)
    {
        return self::query()->where('id', $id)->delete();
    }

    public static function add(array $data)
    {
        return self::query()->create($data);
    }
}
