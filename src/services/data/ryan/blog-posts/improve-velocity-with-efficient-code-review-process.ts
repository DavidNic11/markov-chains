export default `
You’re a Product Owner or an Engineering Team Lead. You are judged on a variety of metrics, but much of it boils down to 3 things:

How quickly your team produces new features

How accurately you hit your deadlines

How many show-stopping bugs your project has

There is a lot of time pressure on you to produce, and quality often suffers. You do just enough to avoid major bugs, but dozens of tiny things build up while users suffer. In my experience, focusing on the code review process is usually the single best way to improve a team’s velocity and quality simultaneously. Bonus: your teammates will be happier too.

Code review is a part of the software development process where developers check each other's code to ensure that it follows best practices and does what it is supposed to. By having a second person interpreting the request, code review also mitigates the wasted effort caused by miscommunication of specifications.

Code reviews generally take place in a “pull request” or “merge request,” depending on the system you use. It’s industry standard to require a code review before accepting new code into a production system.

Find bugs before they hit production

Verify the requested specs are satisfied

Another person to consider code logic and check for security issues

Developers learn by seeing the code of others

Code review is essential; however, it can also be one of the biggest velocity killers. Code review takes time, and a poor code review process uses precious time inefficiently.

Reviewers can’t work on their own tasks while reviewing
team-velocity
Reviewers can get stuck trying to understand the code additions and their purpose

Authors have to spend time trying to find a reviewer

Authors have to respond to reviewer questions

Authors have to make code changes when reviewers find issues

When the review process takes a long time, authors and reviewers struggle with lots of context switching and a demotivating feeling of being unproductive

Now that you’ve identified the areas of improvement for your code review process, you can begin designing an efficient code review procedure that saves time rather than wasting it.

Many teams require code review but never bother to define the process. How often should code be reviewed? Who should review the code? Do we care about semicolons?

When the process has no definition, the team either has speed or quality issues, often both.

Code review requires a time commitment. In order to make that time commitment worthwhile, we need a clearly defined process to get maximum value with minimal time input.

Speed and quality are often considered opposites in the software world, but planning and communication will improve both (while also improving developer happiness).

Code review is a team effort: author, reviewer, team lead, and Product Owner. Each has a role to play, and by properly and thoroughly doing their part, they streamline the process for their teammates. If all members work effectively, more features will be added to the project faster and with fewer errors.

The underlying goal for each person should be to make everyone else’s job quick and painless.

With a good process, code should move from pull request to merged within hours, rarely more than a day. The team lead and Product Owners should work together to ensure that developers have time in their day to review each other’s code and push to make sure code reviews happen promptly. Daily standups are a good time to remind devs of PRs in waiting.

A good code review process starts with the Product Owner. It is imperative that both the code author and reviewer understand the details of the requested code change. The Product Owner must spell out expected behaviors in the request so the reviewer can understand what they are reviewing.

Short tickets are generally faster to code and faster to review. Seeing tickets get checked off faster motivates developers to keep work in small, logical chunks.

By keeping tickets short, they are also easier to understand and minimize the risk of missing pieces. I can’t tell you how many times I’ve seen code merged to have a Product Owner ask why one of the specifications wasn’t met. Yes, developers need to make sure they cover all the specs in the ticket, but as the request size grows, so does the likelihood that pieces will be missed.

If the feature requires hitting a new service in some special way, include that in the ticket. If you want to mimic the behavior of another site, say so and include a link. For complicated behavior, consider creating a screen recording with your voice description that the developers can refer back to.

If the feature/change request involves the UI, the ticket should include mockups of the changes or at least neatly annotated screenshots. Don’t forget mobile versions too.

Not only will detailed specs make development faster for the author, but the reviewer will have an easier time ensuring the new code does what it should.

Just as crucial as a good Product Owner, a talented Team Lead can dramatically improve the code review process. The lead role needs to coach the team and keep the process moving. Teach team members what good code review looks like and remind them to review quickly.

Leads need to make time for developers to review code. If developers are overloaded with tasks or meetings, the lead needs to push back and make space for the code review process. The lead should also push devs to review quickly and encourage even the most junior developers to be part of the process.

Simplify the code review by removing parts that can be handled by a machine. Code reviews shouldn’t be discussions of formatting or whether this code will adversely affect other parts of the app. We have tools like formatters, linters, and automated tests to handle these questions.

Code authors want to complete their tasks, and the pull request is their last hurdle, but a PR shouldn’t be rushed. Code authors are responsible for making the code review as easy as possible.

Developers must read the ticket and thoroughly understand the problem before starting. Ask questions as they come up. Make sure to cover each listed spec, and don’t be afraid to ask to split a task up into multiple tickets if the request feels too big. Keeping your pull requests small will make it easier to ensure you’ve covered everything while also making it easier for your reviewer.

Mistakes happen, but try not to waste the reviewer’s time because you forgot something.

Unfortunately, many developers are taught how to make a pull request but not taught how to make a good one. Just hitting the “Create Pull Request” button and hoping all works out is the definition of a bad process.

Whether you use Github or another version control site, you will have a space to add a description to your pull request. The author’s goal should be to minimize the time needed to review by adding clarity to the PR. The author must help the reviewer by filling this section out with the following:

Link to the related ticket

Brief overview of the changes made

Summary of any unusual patterns and why they were used

If there are UI changes—screenshots of both desktop and mobile

GitHub lets you create templates to remind developers what to include in a PR description. Encourage your team to create their own and find the best format for your project.

After creating a PR, a developer should immediately review it themselves and understand what the reviewer will see. The author might catch small mistakes and not waste the reviewer’s time with them.

They should also take this opportunity to answer questions before they are asked. If it's likely that the reviewer will ask a question about a particular section of code, the author should comment on it first. This speeds up the process. Otherwise, the reviewer would have to ask the question and then come back for the response. Eliminate the reviewer having to return to the PR to save developer time while getting code merged faster.

The last hurdle in the coding process, the code reviewer can be seen as an opponent, but they shouldn’t be. The code reviewer’s job is to defend the quality of the product, but that’s everyone else’s job too. Quality is a team effort.

All developers on a team need to set aside time to review code. Fast feedback makes everyone’s lives easier. When asking about a piece of code, do you think the author will have a better answer an hour after they open the PR or a day after? When requesting a change, do you think the author will be able to do it more quickly while the code is fresh or after they’ve started working on a different feature?

If you want something changed, be specific and provide examples. GitHub provides a suggestion feature, so you can write the code you want to see. If they agree, they just hit the approve button, which changes their PR.

New team members may not be familiar with project patterns, so if you want them to change code to match some other project section, provide a link to that code.

Detailed doesn’t mean picky. If a developer requests changes to working code because it is not how they would do it, that’s not an efficient use of time.

A code review isn’t just about making sure the code works; it's also about making sure the code does what it is supposed to do. Read the description and follow the link to the ticket. Reviewers need to verify that all of the specifications are covered.

The finer details of a great code review are beyond the scope of this post. If you’re looking to become an expert code reviewer, check out this post: What does a good code review look like

Okay. Your code review process is up and running. Are you ready to save even more time?

When creating a PR, GitHub (or whatever you use) can run automated processes against your code. You can even create processes that run on each developer’s machine that runs some automation before pushing code to Github. The details are beyond the scope of this post, but let’s do a quick overview of some of our favorite automations.

Developers can run another developer's code on their own computer, but testing it on a server is much easier. CI/CD systems can be made to deploy to demo environments so that every PR is demo-able before it merges. This offers a major advantage, especially with UI changes, as Product Owners or designers can see the real product before it merges. If a reviewer has questions about a requirement, they can send the Product Owner to the demo site to ensure the app does what they meant.

Tabs vs. spaces. Indentation. We used to debate these things in every PR, but formatting doesn’t cause bugs, and talking about it wastes time.

It’s 2023, and we don’t bother with those debates anymore.

Your project should have a tool that automatically formats code. We like Prettier, but StandardJS is good too. It doesn’t matter. Pick something, use it, and don’t waste more time talking about it.

These tools should run on your developers' machine every time they save, and then your CI/CD system should verify formatting when the code is pushed to Github.

Your developers should create automated tests to ensure the code keeps doing what it is supposed to, even as it evolves and grows. A good CI/CD setup will run those tests against new code and block a PR with broken code.

VRT is an amazing tool for advancing visual quality in a web application, but it isn’t for everyone. The setup requires some time, and ensuring it doesn’t slow down the process is a commitment, but if your project is very UI-driven and ensuring pixel perfection is important to you, then it can be a powerful tool.

VRT uses a computer to find UI differences. The system can flag tiny variations that can slip by even the best QAs. With a tool like Percy, Product Owners and designers can get involved with the review process.

By logging into the Percy website, they can see and approve changes linked to GitHub pull requests. Designers can block PRs and request changes, which connects developers to the UI/UX team, opening up conversations that enhance UI quality.

Where this system can break down is when the Product Owner or designer doesn’t have time to review within hours of the PR being created. Remember, we are trying to shorten the PR feedback loop. If VRT blocks ticket completion, it will reduce team velocity and sap developer morale.

You can learn more here: Improve Your Web App Quality at Scale with Visual Regression Testing

Is that all? No, of course not. Teams and products differ, so finding the exact process that works for you will be a process in and of itself. This guide should help you get to a good place, but keep trying new things to find the best methods for your team.

Ensuring quality will always reduce velocity. But with these helpful tips, you will elevate your process and maximize your time.

Bitovi has expert React Consultants who are eager to help set up code review processes and train your team. If you need a hand, we’re here to help.

An effective code review process can increase product quality, while a bad or poorly defined process can bog a team down and hurt morale. Product Owners must clearly define requirements. Team Leads must make time for reviews, push to get them completed promptly, and automate away the little things. Authors must make their PRs friendly to reviewers. Reviewers must be prompt and clear with their feedback.
