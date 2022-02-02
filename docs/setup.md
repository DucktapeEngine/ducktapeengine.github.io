# Setup

In order to use Ducktape, you must have the following tools installed: Git, a C++ compiler, CMake, Make.

### Compiling Ducktape

Run the following commands to compile Ducktape:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

```bash
git clone https://github.com/DucktapeEngine/Ducktape.git & cd ducktape & .\build.bat
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
git clone https://github.com/DucktapeEngine/Ducktape.git & cd ducktape & ./build.sh
```

</TabItem>
</Tabs>

The build script will prompt you for the build tool to use, and the path to your C++ compiler.
After the entering the above information, Ducktape will start compiling. The built binaries will be available in the `build` folder.

### Setting up the project

Ducktape requires you to use [CMake](https://cmake.org/), we hope to have support for other build systems in the future, but for now, we'll have to stick with CMake.

I'm honestly not sure how to word this documentation, so I'll just be straight forward and provide the steps as bullet points.
So first of all, lets call the root directory of your project "root" just for the sake of this tutorial. Then follow the steps given below:
- Copy the entire `Ducktape` folder into the `root` directory.
- Create a `CMakeLists.txt` file in the `root` directory.
- In the `CMakeLists.txt` file, add the following lines:
```cmake
cmake_minimum_required (VERSION 3.12)

project(myproject LANGUAGES CXX)
set(executable_name "myproject")

add_executable(myproject main.cpp)

set(DTROOT "${PROJECT_SOURCE_DIR}/Ducktape")
set(PROJECT myproject)
include(${DTROOT}/cmake/ducktape.cmake)
```

:::info For your information:
In this CMake script, we're setting the `DTROOT` variable to the Ducktape directory, and the `PROJECT` variable to the cmake project. After this, you may include the `ducktape.cmake` file in your CMake script — which is an easy to way to include + link all of the required Ducktape files.
:::

- Create a `main.cpp` file in the `root` directory.
- In the `main.cpp` file, add the following lines:
```cpp
#include <Ducktape/Ducktape.h>
using namespace DT;

int main()
{
    DT::init();
    return 0;
}
```

Time for compiling. Run the following commands to compile the project:

```bash
mkdir build & cd build & cmake .. & make
```

Now, run the executable using `ducktaptest`. It should print out the following:
```bash
Ducktape is ready to go!
Get Started: https://ducktapeengine.github.io/docs/intro
```

Congratulations! You've successfully set up Ducktape.

If you encountered any issues, please feel free to ask us on our [Community Discord Server](https://dsc.gg/ducktape).