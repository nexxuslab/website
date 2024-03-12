# Dynamic Website Template

Template for building dynamic websites within Nexxus Lab.

## Requirements

If your computer is running on Windows OS, you will need to activate [Windows Subsystem for Linux 2 (WSL2)](https://learn.microsoft.com/en-us/windows/wsl/install) to create a good developer environment.

Our repositories will make use of [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for authentication, so make sure that they are added to your ssh-agent by running the following commands _after_ you've created it:

```bash
user@DEVICE:~/$ eval $(ssh-agent -s)
user@DEVICE:~/$ ssh-add <path-to-ssh-key>
```
