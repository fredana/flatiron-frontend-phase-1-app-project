# flatiron-frontend-phase-1-app-project
My Flatiron Phase 1 App Project

NAME: 
Booking A Room App

DESCRIPTION:
This app can be used to book a room in a hotel or guesthouse with information about the guest's details and checking / checkout dates; also send them a reservation confirmation.

INSTALLATION INSTRUCTION: 
Global setup:
  Download and install Git
  git config --global user.email EMAIL_ADDRESS
      
Next steps:
  mkdir PROJECT_NAME
  cd PROJECT_NAME
  git init
  touch README
  git add README
  git commit -m 'first commit'
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master
      
Existing Git Repo?
  cd existing_git_repo
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master

You may also want to track the master branch for easy pull/push
  git config branch.master.merge refs/heads/master
  git config branch.master.remote origin

HOW TO USE THE APP
This is an app for booking a room in a Hotel / Guesthouse

CONTRIBUTOR'S GUIDE

Make changes locally
Fork the repository.
Using GitHub Desktop:

Getting started with GitHub Desktop will guide you through setting up Desktop.
Once Desktop is set up, you can use it to fork the repo!
Using the command line:

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
Install or update to Node.js, at the version specified in .node-version. For more information, see the development guide.

Create a working branch and start with your changes!

Commit your update
Commit the changes once you are happy with them. Don't forget to self-review to speed up the review process⚡.

Pull Request
When you're finished with the changes, create a pull request, also known as a PR.

Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
Don't forget to link PR to issue if you are solving one.
Enable the checkbox to allow maintainer edits so the branch can be updated for a merge. Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
As you update your PR and apply changes, mark each conversation as resolved.
If you run into any merge issues, checkout this git tutorial to help you resolve merge conflicts and other issues.
Your PR is merged!
Congratulations 🎉🎉 The GitHub team thanks you ✨.

Once your PR is merged, your contributions will be publicly visible on the GitHub docs.

Now that you are part of the GitHub docs community, see how else you can contribute to the docs.

Windows
This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

Regular Expressions: Windows uses \r\n for line endings, while Unix-based systems use \n. Therefore, when working on Regular Expressions, use \r?\n instead of \n in order to support both environments. The Node.js os.EOL property can be used to get an OS-specific end-of-line marker.
Paths: Windows systems use \ for the path separator, which would be returned by path.join and others. You could use path.posix, path.posix.join etc and the slash module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write scripts in JavaScript instead of Bash.
Filename too long error: There is a 260 character limit for a filename when Git is compiled with msys. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
Update Git configuration: git config --system core.longpaths true
Consider using a different Git client on Windows
