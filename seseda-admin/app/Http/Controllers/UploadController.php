<?php

namespace App\Http\Controllers;

use App\Model\VideoModel;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload_image(Request $request)
    {
        $id = $request->input('id', 0);

        $video = VideoModel::find($id);

        if (is_null($video)) {
            return response([
                'code' => 1,
                'msg'  => '上传失败'
            ]);
        }

        $image_path = explode('/', $video->image);

        array_pop($image_path);

        $image_path = implode('/', $image_path);

        try {
            set_time_limit(500);

            if ($image_name = $request->file('file')->store($image_path, 'ftp')) {
                return response([
                    'code'   => 0,
                    'image'  => '/' . $image_name,
                    'image_' => $this::DOMAIN . $this->getSignedUrlPath('/' . $image_name, $this::SECURE_TOKEN, strtotime('+1 day')),
                ]);
            }
        } catch (\Exception $e) {
        }

        return response([
            'code' => 1,
            'msg'  => '上传失败'
        ]);
    }

    public function upload_adsimg(Request $request)
    {

        $image_path = env('UPLOAD_ADSIMG_PATH', 'img/adsimg');
        $img_url = env('IMG_URL', 'http://img.waytc1.com');

        try {
            set_time_limit(10);

            // if ($image_name = $request->file('file')->store($image_path, 'ftp')) {
            if ($image_name = $request->file('file')->store($image_path)) {
                return response([
                    'code'   => 0,
                    'image'  => $img_url . '/' . $image_name,
                    'image_' => $img_url . $this->getSignedUrlPath('/' . $image_name, $this::SECURE_TOKEN, strtotime('+1 day')),
                ]);
            }
        } catch (\Exception $e) {
        }

        return response([
            'code' => 1,
            'msg'  => '上传失败'
        ]);
    }
}
