# Setup

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
In order to use Ducktape, you must have the following tools installed: [Git](https://git-scm.com/downloads), [a C++ compiler](https://sourceforge.net/projects/mingw/), [CMake](https://cmake.org/download/), Make (Comes with MinGW).
:::

Let's get started! 🏃

- Create an account if you don't have one already on [GitHub](https://github.com/signup)
- Use the [Ducktape template repository](https://github.com/DucktapeEngine/Template) to use as a starting point for your project.
![](https://i.imgur.com/XvXlyOB.png)
- Clone the repository into your local machine using the following command:
```bash
git clone https://github.com/<your username>/<your repository name>.git
```
- Change into the directory you just cloned using:
```bash
cd <your repository name>
```

- Run the following commands:

<Tabs>
<TabItem value="windows" label="Windows">

```bash
cd Ducktape
build
cd ..
cd ..
build
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
cd Ducktape
./build.sh
cd ..
cd ..
./build.sh
```

</TabItem>
</Tabs>

- Run built program

<Tabs>
<TabItem value="windows" label="Windows">

```bash
helloducktape
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
./helloducktape
```

</TabItem>
</Tabs>

It should output:

```bash
Ducktape is ready to go!
Get Started: https://ducktapeengine.github.io/docs/intro
```

Congratulations! You've successfully set up Ducktape. 👏

If you encountered any issues, please feel free to ask us on our [Community Discord Server](https://dsc.gg/ducktape).