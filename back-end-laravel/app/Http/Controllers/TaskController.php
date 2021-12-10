<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $result =  Task::where('user_id', $request->user->id)->get();
        return json_decode($result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
       return Task::create([
            'description' => $request->description,
            'user_id' => $request->user->id,
        ]);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    private function show($id)
    {
       return json_decode(Task::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request ,$id)
    {
        

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        
        Task::find($id)->update($request->all());
        $result = $this->show($id);
        return response([$result],201);
    }

    public function search (Request $request) {
        $search = $request->query('q');
        $result =  Task::where('user_id', $request->user->id)->where('description' ,'like', "%$search%")->get();
        return json_decode($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Task::destroy($id);
        return response(null,204);
    }
}
