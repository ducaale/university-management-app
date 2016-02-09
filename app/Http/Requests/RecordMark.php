<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class RecordMark extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          //  'student_id' => 'required',
          //  'course_id' => 'required',
          //  'exam_type_id' => 'required',
          //  'mark' => 'required',
          //  'exam_date' => 'required|date',
          //  'by_staff' => 'required'
        ];
    }
}
