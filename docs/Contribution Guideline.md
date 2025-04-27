# Contribution Guideline

Welcome! Thank you for your interest in contributing to this project.

Contributing to an open source project might seem daunting at first, but it's often a straightforward process. This guide will walk you through the basic steps.

## How to Contribute

There are many ways to contribute, not just by writing code!

* **Reporting Bugs:** If you find a bug, please report it!
* **Suggesting Features:** Have an idea for a new feature? Let us know!
* **Improving Content:** Is something incorrect or ambiguous in the content? Help us fix it.
* **Writing Code:** Fix bugs, add features, or improve existing code.
* **Reviewing Pull Requests:** Help us by reviewing code submitted by others.

## Contributing Content

We need members to help add accurate historical events and information, in addition to proof-reading existing content.  
If you want to help with this part of the project, please contact [ShoganA](https://github.com/AbedShowgan) or [Maher](https://github.com/abaza738).

Furthermore, we have a public [Google Drive Folder](https://drive.google.com/drive/u/3/folders/1KtSgGqa-YXcYUdCXHCGjqNHsNL14i1ay) which you can freely visit, and add content that you believe will be relevant to The Circassian Genocide, such as documents, images or videos.

## Contributing Code: A Step-by-Step Guide

### Git Workflow

If you want to contribute code, here's the typical workflow:

1.  **Fork the Repository:**
    * Go to the [repository page](https://github.com/abaza738/the-circassians).
    * Click the "Fork" button in the top right corner. This creates your own copy of the repository on your GitHub account.

2.  **Clone Your Fork:**
    * On your GitHub account, go to your forked repository.
    * Click the "&lt;&gt; Code" button and copy the HTTPS or SSH URL.
    * Open your terminal or command prompt and run:

        ```bash
        git clone [paste the URL you copied]
        ```
    * This downloads the repository to your local machine.

3.  **Set Up the Upstream Remote:**
    * Navigate into the cloned repository's directory:

        ```bash
        cd [your-repository-name]
        ```
    * Add a remote link to the original repository (the "upstream"):

        ```bash
        git remote add upstream https://github.com/abaza738/the-circassians.git
        ```
    * You can verify the remotes with `git remote -v`. You should see both `origin` (your fork) and `upstream` (the original).

4.  **Create a New Branch:**
    * Before making changes, create a new branch for your work. This keeps your changes organized and separate from the main branch. Choose a descriptive name for your branch (e.g., `fix/broken-link`, `feat/add-dark-mode`).

        ```bash
        git checkout -b [your-branch-name]
        ```

5.  **Make Your Changes:**
    * Now you can start making your code changes, improving documentation, etc.

6.  **Commit Your Changes:**
    * Stage your changes:

        ```bash
        git add .
        ```
        (or `git add [specific files]`)
    * Commit your changes with a clear and concise message. A good commit message helps others understand what you did.

        ```bash
        git commit -m "feat: Add a brief description of your changes"
        ```
        (Consider using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit message format).

7.  **Push Your Changes to Your Fork:**
    * Push the branch you created to your fork on GitHub:

        ```bash
        git push origin [your-branch-name]
        ```

8.  **Create a Pull Request (PR):**
    * Go to your forked repository on GitHub.
    * GitHub will usually show a banner suggesting you open a Pull Request since you just pushed changes. Click "Compare & pull request".
    * Alternatively, go to the "Pull requests" tab and click "New pull request".
    * Make sure the base repository is the original repository (`abaza738/the-circassians`) and the compare repository is your fork (`your_username/[your-repository-name]`) with the branch you created selected.
    * Give your Pull Request a clear title and description. Explain the changes you made and why. Link to any relevant issues.
    * Click "Create pull request".

9. **Review and Discussion:**
    * Someone from the project team will review your Pull Request. They might ask questions or suggest changes.
    * Participate in the discussion and be open to feedback.

10. **Making Further Changes (if needed):**
    * If you need to make changes based on feedback, make them in your local branch, commit them, and push to your fork again. The Pull Request will *automatically* update.

11. **Merging:**
    * Once your Pull Request is approved, someone with merge rights will merge your changes into the main branch of the original repository. Congratulations, you've contributed!

## Reporting Bugs and Suggesting Features

* Go to the [Issues tab](https://github.com/abaza738/the-circassians/issues)
* Click "New issue".
* Provide a clear title and detailed description. For bug reports, include steps to reproduce the issue. For feature requests, explain the problem you're trying to solve and how your suggested feature would help.

## Improving Content

You can follow the same code contribution workflow to improve content files.

*This section is W.I.P.*

## Community and Communication

If you have questions or want to discuss something before contributing, you can [open a dicussion](https://github.com/abaza738/the-circassians/discussions), [open an issue](https://github.com/abaza738/the-circassians/issues), or request to contact us via Discord.

## Thank You!

Your contributions are valuable and help make this project better for everyone. Thank you for your time and effort!
