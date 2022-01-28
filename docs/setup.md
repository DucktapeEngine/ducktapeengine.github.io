# Setup

There are two ways to setup Ducktape, one is to use the prebuilt binaries, the other is to build the source code from scratch and use those binaries.

If you want to use the prebuilt binaries, you can download the latest prebuilt binaries from [here](https://github.com/DucktapeEngine/Ducktape/releases/latest).

### Compiling Ducktape
:::info
If you're using the prebuilt binaries, you may skip this step. Feel free to move ahead to [Setting up the project](#setting-up-the-project).
:::

Compiling Ducktape requires you to have: Git, a C++ compiler, CMake, a build system like make.

Run the following commands to compile Ducktape:

Windows:
```bash
git clone https://github.com/ducktapeengine/ducktape.git
cd ducktape
.\build.bat
```

Linux:
```bash
git clone https://github.com/ducktapeengine/ducktape.git
cd ducktape
./build.sh
```

The build script will prompt you for the build tool to use, the build type (Release/Debug), and the path to your C++ compiler.
After the entering the above information, Ducktape will start compiling. The built binaries will be available in the `build` folder.

Now it's time to clean up stuff that you don't need. Feel free to delete all folders and files except the following ones:
- build
- include
- dependencies
- LICENSE

:::tip
These are the same files you get when you download the prebuilt binaries.
:::

### Setting up the project

Let's call the root directory of the project `root`. 
First, create a `root/lib` folder and copy `Ducktape/build/libducktape.a` to it. Then, create a `root/include` folder and copy all of the contents from the Ducktape's `include` folder to it.
And, make a `main.cpp` file in `root` and copy the following boilerplate code to it:
```cpp
#include <Ducktape/ducktape.h>

int main()
{
    DT::init();
    return 0;
}
```

How you actually link to these binaries differs with the build system you use. So it'll be up to you to figure out how to link the library. 
But essentially, you need to:
- Link to the `root/lib/libducktape.a` binary.
- Add `root/include` to the include path.

:::caution
It is crucial to add the `root/include` folder to the include path, otherwise the library won't be able to find the headers.
:::

Now for convenience, here's what a basic g++ build command will look like:
```bash
g++ -std=c++14 -I./include -L./lib -lducktape -o main.exe main.cpp
```

Now the including and linking *should* be done.
Try compiling the project now!

**But wait!**

You aren't done yet. You need to copy the contents of "Ducktape/dependencies" to the build folder (aka where the executable is set to be built). These binaries must stay in the same directory as the executable at all times for the executable to run.

:::note
Yes, we realize this is annoying, and we hope to fix it in a future release.
:::

*Now*, run the executable. It should print out the following:
```bash
Ducktape is ready to go!
Get Started: https://ducktapeengine.github.io/docs/intro
```

Congratulations! You've successfully set up Ducktape.

If you encountered any issues, please feel free to ask us on our [Community Discord Server](https://dsc.gg/ducktape).