**Read in other languages: [Українська](README.uk.md)**

# React homework template

This project was created using
[Create React App](https://github.com/facebook/create-react-app). For
familiarity and customize additional features
[refer to the documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Preparing a new project

1. Make sure the LTS version of Node.js is installed on your computer.
   [Download and install it](https://nodejs.org/en/) if needed.
2. Clone that repository.
3. Change the folder name from `react-homework-template` to your project name.
4. Create a new empty repository on GitHub.
5. Open your project in VSCode, run the terminal and link your project to the
   GitHub repository
   [according to the instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the basic dependencies of the project with the `npm install` command.
7. Start the development mode by executing the command `npm start`.
8. Go to the address [http://localhost:3000](http://localhost:3000) in your
   browser. This page will automatically reload after saving changes in the
   project files.

## Deployment

To set up a project deployment, you need to perform a few additional steps to
set up your repository. Go to the `Settings` tab and in the `Actions` tab,
select the `General` option.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll down to the last section, where you select the options as in the
following image and click `Save`. Without these options, the build will not have
enough permissions to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically linted, built and
deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch
is updated. For example, after a direct push or an accepted pool-request. To do
this you need to edit the field `homepage` in the file `package.json` by
replacing `your_username` and `your_repo_name` with your own and submit the
changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Next, you need to go into the GitHub repository settings (`Settings` > `Pages`)
and set it to distribute the production version of the files in the `/root`
folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
identifier.

- **Yellow** - the project is being built and deployed.
- **Green** - deployment completed successfully.
- **Red** - an error occurred during linting, build or deployment.

You can see more detailed information about the status by clicking on the icon,
and in the click on the `Details` link in the drop-down window.

![Deployment status](./assets/status.png)

### Live Page

After some time, usually a couple of minutes, the live page can be viewed at the
address specified in the edited `homepage` property. For example, here is a link
to the live version of this repository
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

If a blank page opens, make sure the `Console` tab does not contain errors
associated with incorrect paths to the CSS and JS files of the project
(**404**). Most likely you have the wrong value of the `homepage` property in
the `package.json` file.

### Routing

If your application uses the `react-router-dom` library for routing, you must
additionally configure the `<BrowserRouter>` component by passing in the prop
`basename` the exact name of your repository. The slashes at the beginning and
end of the line are mandatory.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) is launched from the `.github/workflows/deploy.yml`
   file.
2. All repository files are copied to the server, where the project is
   initialized and linted, and built before deployment.
3. If all steps are successful, the built production version of the project
   files is sent to the `gh-pages` branch. Otherwise, the script execution log
   will indicate what the problem is.
