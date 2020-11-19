<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class SiteLabelModel extends Model
{
    protected $table = 'site_label';

    public function label_belongs_to()
    {
        return $this->belongsTo(LabelModel::class, 'label_id', 'id');
    }

    public static function label(int $site_id)
    {
        return self::query()
            ->where('site_id', $site_id)
            ->with('label_belongs_to')
            ->get();
    }

    public static function getLabels(int $site_id)
    {
        return self::query()
            ->where('site_id', $site_id)
            ->pluck('label_id');
    }
}