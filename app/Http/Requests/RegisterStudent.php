<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class RegisterStudent extends Request
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
            'name' => 'required',
            'tel' => 'required'
            //'enrollment_date' => 'required|date',
            //'date_of_birth' => 'required|date',
            //'guardians_id' => 'required'
        ];
    }
}
