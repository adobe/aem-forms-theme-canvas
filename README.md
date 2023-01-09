# af2-canvas-theme

This is the standard Canvas theme for Adobe Experience Manager (AEM) Forms.

This theme can be modified to customize the visual appearance of Adaptive Form.

## Structure

* `src/main.ts`: This is the main entry point of your JS & CSS theme.
* `src/site`: Files that are generic to the entire site.
* `src/components`: Files that are specific to components.
* `src/resources`: Associated files, like icons, logos, fonts.


## Complete development workflow

In order to make best use of theme-builder you have to run the live preview which provides proxy and browser sync functionalities. On top of that you need to make sure that you have additional watcher for your source files that triggers your theme build process which produces changes in the `dist` folder of your theme. This way after making change in your source file you will get your proxy page refreshed via browser sync.


### Build

Initialize the project with following command executed at the theme root:

```
npm install
```

### Environment Variables

Theme Builder scripts are based on the environment variables you provide. These variables are used to properly provide live preview and deploy functionality of the AEM Site Theme Builder. 

Here is the list of required variables:

```
AEM_URL=<URL of the AEM as a Cloud Service instance>
AEM_SITE=<name of the AEM site>
AEM_PROXY_PORT=<localhost proxy server port>
```
Here is the list of optional variables:

```
AEM_ADAPTIVE_FORM=<name of the AEM Form>
```
Recommended way to define site variables is to use / create `.env` file within your theme project repository.

### Launch

Run the local proxy server while working to preview your changes with the content from the production environment.

```
npm run live
```

 Once your work completed, check your changes into GitHub, and execute the deployment pipeline in Cloud Manager.

## Contributing

Contributions are welcomed! Read the [Contributing Guide](.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the MIT License. See [LICENSE](LICENSE.md) for more information.