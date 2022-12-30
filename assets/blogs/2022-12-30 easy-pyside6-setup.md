---
title: "Easy PySide6 Setup"
created_at: "2022-12-30"
updated_at: "2022-12-30"
slug: "easy-pyside6-setup"
excerpt: "How to quickly setup PySide6 app development."
tags:
  - Python
  - Qt
  - PySide6
---

## Desktop applications and me

It has been a long time since I played with a desktop app framework.
A few years ago I have played with [wxPython](https://wxpython.org/) and [PySide2](https://doc.qt.io/qtforpython-5/).

![Author's Drawing of PySideX's logo](/images/blogs/hand-drawn-pyside-logo.png)

## The setup

After you installed Python...

**Always**, always use a virtual environment if you need to install any packages. There are quite a number of choices for virtual environments, e.g. [venv](https://docs.python.org/3/library/venv.html) (Python standard library), [virtualenv](https://virtualenv.pypa.io/en/latest/), [Pyenv](https://pipenv.pypa.io/en/latest/), [Poetry](https://python-poetry.org/), .etc.
[miniconda/Anaconda](https://docs.conda.io/en/latest/miniconda.html) could also be in consideration if you want fine control of the Python version.
I use Poetry most of the time. For this article, I'll use the default options for poetry.

Don't let the message below scare you, it just need a simple fix.

```sh
> mkdir pyside6-sandbox && cd pyside6-sandbox
>
> poetry init -n
> ls
pyproject.toml
> poetry add pyside6

The current project\'s Python requirement (>=3.10,<4.0) is not compatible with some of the required packages Python requirement:
  - pyside6 requires Python <3.12,>=3.7, so it will not be satisfied for Python >=3.12,<4.0

Because no versions of pyside6 match >6.4.1,<7.0.0
 and pyside6 (6.4.1) requires Python <3.12,>=3.7, pyside6 is forbidden.
So, because pyside6-sandbox depends on PySide6 (^6.4.1), version solving failed.

  • Check your dependencies Python requirement: The Python requirement can be specified via the `python` or `markers` properties

    For pyside6, a possible solution would be to set the `python` property to ">=3.10,<3.12"

    https://python-poetry.org/docs/dependency-specification/#python-restricted-dependencies,
    https://python-poetry.org/docs/dependency-specification/#using-environment-markers
```

To install PySide6, we specify the python version.

```sh
> poetry add --python '>=3.10,<3.12' pyside6
Using version ^6.4.1 for PySide6

Updating dependencies
Resolving dependencies... (0.4s)

Writing lock file

Package operations: 4 installs, 0 updates, 0 removals

  • Installing shiboken6 (6.4.1)
  • Installing pyside6-essentials (6.4.1)
  • Installing pyside6-addons (6.4.1)
  • Installing pyside6 (6.4.1)

> poetry shell
Spawning shell within some-where/virtualenvs/pyside6-sandbox-UCbHYWjN-py3.10
> (pyside6-sandbox-py3.10)
```

DONE!

## But wait! There's more!

The `pyside6` package included a bunch of tools.
Just make sure we are in our virtual environment.

- pyside6-assistant
- pyside6-deploy
- pyside6-designer
- pyside6-genpyi
- pyside6-linguist
- pyside6-lrelease
- pyside6-lupdate
- pyside6-metaobjectdump
- pyside6-project
- pyside6-qml
- pyside6-qmlformat
- pyside6-qmlimportscanner
- pyside6-qmllint
- pyside6-qmlls
- pyside6-qmltyperegistrar
- pyside6-qtpy2cpp
- pyside6-rcc
- pyside6-uic

If you are on Powershell, use this command to see what you get:

```powershell
> (pyside6-sandbox-py3.10)gcm -Name 'pyside6-*'
```

To use QtDesigner:

```sh
> (pyside6-sandbox-py3.10) pyside6-qtdesigner &  # launch in background with '&'
```

If you are new to the Qt ecosystem, make sure to checkout:

- pyside6-designer
- pyside6-rcc
- pyside6-uic

## Conclusion

I know webapps are gaining a lot of traction for a long while, but writing desktop application is always a fun thing to do for me.

What actually reinspark me to give Qt a look again is this tutorial by [freeCodeCamp.org](https://www.youtube.com/@freecodecamp).

<iframe
  width="1280"
  height="720"
  src="https://www.youtube.com/embed/Z1N9JzNax2k"
  title="Learn Python GUI Development for Desktop – PySide6 and Qt Tutorial"
  frameborder="0"
  allow="encrypted-media; picture-in-picture"
  allowfullscreen>
</iframe>

[video link](https://www.youtube.com/watch?v=Z1N9JzNax2k)

Although Qt's documentation is a little bit lacking in the Python side, Qt is a powerful and mature ecosystem for building desktop applications. Definitely worth give it a try!
