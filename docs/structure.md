# Structure

Now that you've understood how to set up a Ducktape project, now it's time to dive into how the engine is structured and how you use it.

A Ducktape project is just like a tree. A project contains multiple scenes, which in turn contain  entities, which in turn contain components.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scenes  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entitities  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
&nbsp;&nbsp;&nbsp;&nbsp;Components  

You add Scenes through `SceneManager::LoadScene<>()`, Entities through `Entity::Instantiate()`, and Components through `Entity::AddComponent<>()`.

Refer to the following API docs for more usage information:
- [`SceneManager`](https://ducktapeengine.github.io/API/class_d_t_1_1_scene.html#details)
- [`BehaviourScript`](https://ducktapeengine.github.io/API/class_d_t_1_1_behaviour_script.html#details)

Honestly that's it. You can think of a Ducktape project as a tree, where each node is a scene, and each branch is an entity. There's nothing more to cover in this document.

Next, we'll cover rendering, cheers!