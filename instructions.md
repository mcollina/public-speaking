Welcome to your new place on the web where all of your speaking engagements are tracked 🎉

How to get started?
1. Hit the green button on the top-right that says `Use this template` and create your own repository out of this one.
2. In your new repository, create a new file of your recent speaking activity. There's an [example file](./pages/2021/2021-01-01.md) at `pages/2021/2021-01-01.md` to give you an idea of the format, and structure. If in doubt, head over to the [gigsboat CLI repository](https://github.com/gigsboat/cli) for even more information.
3. Update [gigsboat.json](./gigsboat.json) so that `markdownFile` config option is set to `README.md`.
4. Commit the file changes, and push to the main branch. Every time you make changes that merge into the `main` branch, a GitHub Actions [workflow](.github/workflows/main.yml) executes, parses all the data files under the `pages` directory, and commits to the repository a newly generated `README.md` file.

