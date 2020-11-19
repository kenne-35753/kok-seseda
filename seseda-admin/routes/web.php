<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Model\VideoLabelModel;
use App\Model\VideoModel;
use Illuminate\Database\Eloquent\Builder;

Route::match(['get', 'post'], 'login', 'IndexController@login')->name('login');

Route::group(['middleware' => \App\Http\Middleware\CheckLogin::class], function () {
    //视频入库
    Route::get('ruku', function () {
        exit('暂停');
        set_time_limit(0);
        //$result = Illuminate\Support\Facades\DB::connection('video_source')->select('select title,time_long,image,video,label from video where status = 31');
        $result = Illuminate\Support\Facades\DB::connection('video_source')->select('select title,time_long,image,video,label from video where status = 11');
        $data   = $data2 = [];
        foreach (array_flip(array_column($result, 'label')) as $key => $value) {
            foreach (explode(' ', trim(strtoupper($key))) as $v) {
                $data2[$v] = [
                    'name' => $v
                ];
            }
        }
        if ($data2) {
        //    \App\Model\LabelModel::query()->insert($data2);
        }
        $i = 0;

        foreach ($result as $item) {
            $data[] = [
                'site_id'     => mt_rand(1, 10),
                'category_id' => 0,
                'status'      => 1,
                'visit'       => mt_rand(1, 1000),
                'title'       => trim($item->title),
                'image'       => str_replace(['/var/wwwroot/seseda/zhua'], '', $item->image),
                'video'       => str_replace(['/var/wwwroot/seseda/zhua'], '', $item->video),
                'label'       => trim($item->label),
                'update_time' => time()
            ];
            $i++;
            if ($i == 5000) {
                App\Model\VideoModel::query()->insert($data);
                $data = [];
                $i    = 0;
            }
        }
        if ($data) {
            App\Model\VideoModel::query()->insert($data);
        }
    });
    //视频标签匹配
    Route::get('biaoqian', function () {
        exit('暂停');
        $i         = 0;
        $data      = [];
        $labelList = App\Model\LabelModel::query()->pluck('id', 'name');
        //如果库记录的话id（video 的id），筛选条件就是以id>当前最大的id
        foreach (App\Model\VideoModel::query()/*->where('id','>' 1)*/->get(['id', 'label']) as $item) {
            $item['label'] = str_replace([' ', "\t", "\n", '，'], ',', strtoupper($item['label']));
            foreach (explode(',', $item['label']) as $value) {
                if ($value) {
                    $data[] = [
                        'video_id' => $item['id'],
                        'label_id' => $labelList[$value],
                    ];
                    $i++;
                    if ($i == 20000) {
                        App\Model\VideoLabelModel::query()->insert($data);
                        $data = [];
                        $i    = 0;
                    }
                }
            }
        }

        if ($data) {
            App\Model\VideoLabelModel::query()->insert($data);
        }
    });
    Route::get('fenlei', function () {
        exit('暂停');
        $list = VideoModel::query()->where('category_id', 0)->whereHas('video_label', function (Builder $query) {
            $query->where('label_id', 262);
        })->get(['id'])->toArray();



        dd(VideoModel::query()->whereIn('id', $list)->update([
            'category_id' => 1
        ]));
    });

    Route::get('/', 'IndexController@index')->name('index');

    //广告
    Route::prefix('advertising')->group(function () {
        //广告首页
        Route::get('index', 'AdvertisingController@index')->name('advertising_index');
        Route::get('list', 'AdvertisingController@list')->name('advertising_list');
        Route::match(['get', 'post'], 'add', 'AdvertisingController@add')->name('advertising_add');
        Route::match(['get', 'post'], 'edit', 'AdvertisingController@edit')->name('advertising_edit');
        Route::get('del', 'AdvertisingController@del')->name('advertising_del');
        Route::get('show', 'AdvertisingController@show')->name('advertising_show');
        Route::get('status_update', 'AdvertisingController@setStatus')->name('advertising_status_update');
    });

    Route::prefix('video')->group(function () {
        Route::get('index', 'VideoController@index')->name('video_index');
        Route::get('list', 'VideoController@list')->name('video_list');
        Route::get('play', 'VideoController@play')->name('video_play');
        Route::match(['get', 'post'], 'edit', 'VideoController@edit')->name('video_edit');
        Route::get('detailed', 'VideoController@detailed')->name('video_detailed');
        Route::get('status_update', 'VideoController@setStatus')->name('video_status_update');

        Route::prefix('label')->group(function () {
            Route::get('index', 'VideoController@label_index')->name('video_label_index');
            Route::get('list', 'VideoController@label_list')->name('video_label_list');
            Route::get('del', 'VideoController@label_del')->name('video_label_del');
            Route::get('list_n', 'VideoController@label_list_n')->name('video_label_list_n');
            Route::post('add', 'VideoController@label_add')->name('video_label_add');
        });
    });

    Route::prefix('site')->group(function () {
        Route::get('index', 'SiteController@index')->name('site_index');
        Route::get('list', 'SiteController@list')->name('site_list');
        Route::post('edit', 'SiteController@edit')->name('site_edit');

        Route::prefix('category')->group(function () {
            Route::get('index', 'SiteController@category_index')->name('site_category_index');
            Route::get('list', 'SiteController@category_list')->name('site_category_list');
            Route::get('del', 'SiteController@category_del')->name('site_category_del');
            Route::get('list_n', 'SiteController@category_list_n')->name('site_category_list_n');
            Route::post('add', 'SiteController@category_add')->name('site_category_add');
            Route::get('hot_gif', 'SiteController@category_hot_gif')->name('site_category_hot_gif');
            Route::get('sort', 'SiteController@category_sort')->name('site_category_sort');
        });

        Route::prefix('label')->group(function () {
            Route::get('index', 'SiteController@label_index')->name('site_label_index');
            Route::get('list', 'SiteController@label_list')->name('site_label_list');
            Route::get('del', 'SiteController@label_del')->name('site_label_del');
            Route::get('list_n', 'SiteController@label_list_n')->name('site_label_list_n');
            Route::post('add', 'SiteController@label_add')->name('site_label_add');
        });

        Route::prefix('link')->group(function () {
            Route::get('index', 'SiteController@link_index')->name('site_link_index');
            Route::get('list', 'SiteController@link_list')->name('site_link_list');
            Route::get('del', 'SiteController@link_del')->name('site_link_del');
            Route::get('list_n', 'SiteController@link_list_n')->name('site_link_list_n');
            Route::post('add', 'SiteController@link_add')->name('site_link_add');
        });
    });

    Route::prefix('category')->group(function () {
        Route::get('index', 'CategoryController@index')->name('category_index');
        Route::get('list', 'CategoryController@list')->name('category_list');
        Route::post('edit', 'CategoryController@edit')->name('category_edit');
        Route::post('add', 'CategoryController@add')->name('category_add');
    });

    Route::prefix('label')->group(function () {
        Route::get('index', 'LabelController@index')->name('label_index');
        Route::get('list', 'LabelController@list')->name('label_list');
        Route::post('edit', 'LabelController@edit')->name('label_edit');
        Route::post('add', 'LabelController@add')->name('label_add');
        Route::get('del', 'LabelController@del')->name('label_del');
    });

    Route::prefix('link')->group(function () {
        Route::get('index', 'LinkController@index')->name('link_index');
        Route::get('list', 'LinkController@list')->name('link_list');
        Route::post('edit', 'LinkController@edit')->name('link_edit');
        Route::post('add', 'LinkController@add')->name('link_add');
        Route::get('del', 'LinkController@del')->name('link_del');
    });

    Route::post('upload/image', 'UploadController@upload_image')->name('upload_image');
	Route::post('upload/adsimg', 'UploadController@upload_adsimg')->name('upload_adsimg');

    Route::get('cache/empty', 'IndexController@cache_empty')->name('cache_empty');
});
