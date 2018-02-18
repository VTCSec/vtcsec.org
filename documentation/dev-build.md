# How To Help:

So, you have poked around in the GitHub and you found the section that talks
about how to help VTCSEC with the website development. Great! You just need to properly [configure](https://help.github.com/articles/set-up-git/) your [git](https://git-scm.com/)
 do the following to get caught up and a few commands to start contributing.
1. Watch the video playlist [here](https://youtu.be/8oRjP8yj2Wo). This will help
you git goood and git, and help you improve on any skills you already have!

2. Clone the repository.

```
git clone https://github.com/VTCSec/vtcsec.org.git

```

3. Change directory into the cloned repository

```
cd vtcsec.org
```

4. Pull the repository before trying to work on anything, and also pull before
pushing with the command

```
git pull
```

5. Do your changes to the repository at this stage!

6. If you added new files use the following command to add your files to the
repository

```
git add <file>

or

git add <directory>
```

7. Use the following command to choose what you want to add and not add, and
don't forget to update the .gitignore if you do not want a certain file or file
type.

```
git add -p
```

8. Write some code and commit to the repository with a message that explains
what you did for example, I created a dev-build page...

```
git commit -m "Created dev-build Page"
```

9. Now pull and push the repository to the GitHub!

```
git pull && git push
```

10. Congrats, you have complete your first push in 10 Steps! If you run into any
 problems or you do not understand something, contact a web-dev for VTCSEC on
 IRC or email.
