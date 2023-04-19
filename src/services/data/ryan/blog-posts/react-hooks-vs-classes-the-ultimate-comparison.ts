export default `
Lately, I’ve seen a lot of conflicting talk in React forums around class components and hooks. For junior and more advanced React devs, I would like to clarify by answering some of the most commonly asked questions around hooks vs. class components.

Stop using class components. Function components with hooks are the far better choice and have been for years.

React is a library that helps us create interactive UIs in the browser. Hooks are a tool within React that provides ways to manage state and react to changes within our application. React Hooks are not a special library—they’re just another tool built into React since version 16.8.

Yes. Well, sort of? 

It’s a bit more accurate to say function components with hooks replace class components. Hooks only work in function components, so if you want to use hooks, you cannot use class components. Aside from error boundaries, a function component with hooks can accomplish everything class components can with more readable and succinct code. 

First, I’ll address the class component. Though fairly basic, this example showcases data fetching, a prop related to data fetching, and the need to refetch data when a prop changes.

In this example of a function component with a custom hook, the combined code length is a bit shorter than with the class component, but there are more important advantages.

For one, we naturally create a custom hook that separates our fetching logic and can be reused elsewhere. Also, notice that the class component needs 2 sets of logic for when to fetch data, while the hook has one. The data will be fetched anytime the query value is new, including on first mount.

And now for the function component. By moving fetching out to a custom hook, you can see this file becomes much simpler than the class component above.

Hooks.

Initially, class components were widespread because they could keep track of state and respond to specific component lifecycle events. Functional components existed; however, they were limited since they could not access state. Functional components were commonly referred to as stateless components until the release of the React Hooks API in v16.

For many of us using React professionally before hooks were introduced, there was a lot of frustration with class components. Reusing data logic resulted in messy patterns like Higher-Order Components (HOCs) or hacks like Render Props. These were painful in large applications.

When the React team introduced hooks, it did not take long to realize the power and flexibility of hooks. Function components with hooks resulted in cleaner and more readable code. The company I worked at started replacing class components within months, and I knew we weren’t alone. I can’t think of another major change to a framework, library, or language that was embraced so quickly by its community.

You should absolutely focus on learning functional components with hooks. The majority of the professional React world transitioned to using hooks shortly after their introduction in React v16.8. That was back in early 2019. Except for error boundaries, I haven’t written a class component in over 3 years.

As of February 2023, the official React docs are sorely out-of-date. The React team has been working on a new version of their docs which should be released soon.

If the React docs you are looking at still use class components, we strongly urge you to use the React beta docs, where all explanations are written using Hooks rather than classes.

While the new docs may be live by the time you read this, many of you started learning while the old class component docs were still a thing. If you are currently using class components, I urge you to read the new docs and get familiar with the current way of doing things. There will be a bit of a learning curve as you unlearn lifecycle methods, render props, and higher-order components (HOCs), but the time will be worth it.

Absolutely, with one exception: Error boundaries must still be class components.

In order to create a class component, you need to extend React.Component. In the new version of the React docs, Component is listed under the Legacy section and links to a tutorial on moving to function components.

From the Legacy page of the new docs:

The hooks you’ll need are application specific, but below are some of the most common and popular ones. I’ve included real-world examples of useful React hooks that you can use in your projects.

The React team recently added the useId hook to provide stable and unique IDs for accessible form inputs. Labels need to link to form inputs. The most common way to do so is with unique IDs. Since React projects encourage reuse of components, this can be challenging when a form has multiple of the same input type. You can’t just use id="text-field" or even id="first-name" as that same ID might be used again on the same page.

Thanks to the useId hook, you can create a custom label + input component with a stable and unique ID to link the two parts together.

This is the most commonly used hook in most codebases. It provides a simple API to store state, for example:

data returned from fetching a list 

whether a menu should be open or closed

When something changes in your application, useEffect provides an interface to respond to that change. 

Component is mounted, respond by fetching required data from the server

Form value is selected that conflicts with another value, respond by changing to other value

Location has changed, respond by closing the navigation menu

The useEffect hook is essential but also the most overused and bug-prone of all hooks. To avoid issues with useEffect, here are some tips:

Installing eslint and eslint-plugin-react will get you warnings in your editor for missed dependencies and dependencies that need to be wrapped in useCallback or useMemo.

Know that useEffect can be used similarly to class component lifecycle methods, but they are not the same.

Be aware that setState will trigger another rerender, which then may trigger another useEffect, useMemo, or useCallback, which can cascade into multiple expensive rerenders or even an infinite loop. If the state value being set is a dependency of that same useEffect, it will absolutely cause an infinite loop.

A good rule of thumb is to ask yourself if the action needs to occur as a side effect of a state value change ( useEffect ) or if the action is a direct consequence of the user interacting with the UI ( event handler ).

In the above menu example, you could instead add an onClick to the link, which will run before navigation. In some cases, avoiding the useEffect is better and more predictable, though in this case, you could have other links in other parts of the page that the menu component is unaware of, so the useEffect is the better choice.

An example of this is a data table with filter options. When the user changes filters, it's common to see developers set the new filter state and have a useEffect detect the filter change, which then re-filters the table data and runs another set state. The problem is this component will run twice: once for the new filter value and again for the newly filtered table data. We want to avoid those unnecessary and expensive re-renders.

Instead, run your data transformation at the top of the component every time. If you are properly breaking down your components (think Single Responsibility Principle), then usually, any changes within the component state are going to cause the data filters to recalculate anyways.

Let’s start with the right way to handle a data transformation:

The following approach is the wrong way as it will trigger 2 renders for every change to the filter value.

If you still have some state or prop values triggering a rerender, but they don’t require the data to be re-filtered, look to useMemo.

When values change within a component, React will re-render said component. Generally speaking, this is exactly what we want, but there are exceptions. A particularly common example is a list of data that needs to be sorted or filtered.

When the sort order or filter values change, we want our component to get a fresh array of data and rerender with that new data set. All good. 

Taking the hook from the earlier example, let’s imagine we wanted to sort our list of stuff, and the server can’t do it for us. If we were dealing with thousands of items in our array, sorting through that data would be noticeably expensive. Without the useMemo, the sortedStuff value would be recomputed as soon as stuffQuery changed and then again when the fetch completed and set a new stuff value. By using the useMemo hook, we can limit and control when the value is rebuilt.

One major use for useMemo is to manage stability of a useEffect that depends upon a value, particularly objects, and arrays that are not held in a useState. Since the useEffect will re-run every time the value’s reference changes, useMemo ensures the useEffect doesn’t run too often by ensuring the value isn’t recreated too often.

Note that useMemo can also be used as a performance enhancement, and premature optimization is a bad idea. Don’t reach for useMemo just because you can. Rather, use it as a response to performance issues. Adding useMemo has a performance cost in itself, so overusing it can hurt performance.

Where useMemo is a stable place to maintain computed values, useCallback is a stable place to hold functions that use state and prop values. Like with useMemo, a useCallback stabilizes a useEffect when a derived function is a dependency.

Recreating functions has a cost and can cause descendant rerenders, so useCallback can also correct performance issues, but like useMemo, useCallback has a performance cost in itself. Overuse can hurt, rather than help, performance.

Using a reducer pattern similar to Redux, useReducer can be used to manage more complex states, especially when state values interact with each other. Actions are defined that can change multiple values within a complex state all at once. An example is a vehicle selection tool with dropdown for make, model, and trim level. When the user changes the make value, all of the other values should clear, and the options in those dropdowns should change. 

While you can orchestrate all of these state changes with multiple useState hooks, the useReducer hooks will give you more straightforward code while ensuring all changes occur at exactly the same time.

Reach for useState first and most of the time, but know that useReducer exists for your most complex components. When you do get to the point of reaching for useReducer, know that it is a complex interface to work with, and you might be better off reaching for a state library like Redux Toolkit. Also, consider refactoring your component instead of using useReducer. Breaking your component into multiple components can sometimes solve the complexity issue without needing a more complex state solution.

I’m not going to provide an example of useReducer because it is a more advanced hook than should be covered here. I suggest digging into the React docs if you think you might need it.

I hope I’ve answered some of your main React Hook questions. I think hooks were a great addition to React and that rich understanding of the available hooks is key to being a great React developer. The next step is learning how to build your own custom hooks.
`