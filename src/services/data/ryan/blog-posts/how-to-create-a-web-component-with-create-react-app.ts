export default `
Have you ever felt the need to put some React code on a site that isn't React? Enter react-to-webcomponent, a free library from Bitovi that makes it easy to put a React application inside of a web component. Anywhere you can insert a <script /> tag, you can use a web component.

There are many ways to set up React apps, but Create React App (CRA) is one of the most popular methods. Let's look at how to go from CRA to a web component, and then add it to a platform like HubSpot, Wordpress, or Shopify.

The instructions for other platforms like WordPress and Shopify should be identical until the last part. 

Let's assume you've done this before and just need the commands to drop in your terminal.

I created a basic to-do list to showcase what react-to-webcomponent can do.

Passing in checklist items as an attribute shows how to map attributes to props

MUI is used to demonstrate pulling in 3rd party libraries

Typescript is used to show you can, but you can use JavaScript if you prefer

You can see the code here.

You won't need any configuration magic to get a web component out of CRA

CRA should now be displaying your web component at http://localhost:3000 with live updates as you code. If you made a checklist just like me, it should look something like this:

It works! Wait, how did you get that into HubSpot?

Yes, that is the actual React code wrapped in a web component and added to HubSpot. Let's look at how.

First, you need to build your application and deploy it to a publicly accessible host. I'm going to use GitHub Pages because it's quick, reliable, and free. Plus, I'm keeping the code repo there:

Create a GitHub repo and push your code. Then, install the GitHub Pages tool:

Set the "homepage" value in your package.json to the name of your repo. This will tell Create React App that your build will be in a subfolder so links can be created properly. Also, add these 'predeploy' and 'deploy' scripts:

With your web component loose on the internet, you're ready to add it to your CMS.

First, you need to find the script tag that loads your deployed code. You'll add that along with your web component tag to your HubSpot or whichever other site you want. To find the script tag, open up your deploy GitHub Pages link and "View Source". The tag should look like

This is where HubSpot, WordPress, Shopify, etc. will differ. Whichever system you are using, you need to either find an "Embed" section or paste the script and web component tags directly into your content.

Add your script and web component tags and a preview should appear.

Once your web component is embedded, you can click on it to see and adjust the size settings. If you have a component that grows dynamically, like this list, then you probably want to give it a large height value.

That's it. Your component is now in your HubSpot page. Using the same script and web component tags, you should be able to inject your web component-wrapped React app in blogs, ecommerce sites, Angular apps and anywhere else that JavaScript runs!

The problem is, CRA adds a fresh hash value into the file name on each build.

It's a feature, not a bug. But it's a feature that doesn't quite work for us. We need to create a stable main.js file, without a hash, that contains our new version.

In this shell script, you're going to use a wildcard to find your main JavaScript file and rename it without the hash. Rename it to just main.js, ensuring you always have a stable filename to point to for our embeds.

There's something off with the styling... Good catch. With web components, you have to choose between the light or the shadow.

With the light DOM, your component is open to the rest of the page for both JavaScript and CSS. Globally defined styles will apply to the inner workings of your component. That is what is happening on this checklist—the input looks off because a CSS definition in the CMS theme is resizing it in a way that conflicts with MUI.

The light side is causing a problem in this particular use because it uses an opinionated design framework. If it had used plain HTML instead, it would be a flexible web component that could be embedded into any site and would pick up the surrounding style automatically. While that's a really cool feature, it's not right for this particular instance.

To solve this, let's use the shadow DOM. By activating the shadow DOM, the CSS and JavaScript of the component is shut off from the rest of the page. The components will act a bit like they are in an iframe, separated from the page.

Create React App (CRA) was chosen for this post because it's beginner-friendly and lots of existing projects use it. After reading this, you should be able to take a project you already have and turn it into a web component! However, for new projects we believe there are better build options available today, such as Vite.

Stay tuned for our next react-to-webcomponent post where we will be working with a production-ready Vite build.
`