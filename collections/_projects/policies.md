---
title: Policies for Gartner MQ
heading: Governance Policies - Gartner Magic Quadrant requirement
description: Built a completely new product in under 6 months for the Gartner Magic Quadrant.
primary: false
company: RightScale
date: 2018-06-01
image: policies.png
layout: lightbox
---
### Overview
RightScale was at risk of falling behind in the rapidly evolving Cloud Management Platform (CMP) space as Amazon, Microsoft, and Google evolved their offerings at a breakneck pace, with over 100 product and feature launches at Amazon's annual reInvent conference alone. At the same time, customers were finding a greater need for governance around cloud costs and security and needed to be able to implement some sort of customized policies to monitor and take action on their accounts. Finally, Gartner was preparing to offer its first Cloud Management Magic Quadrant, and RightScale needed to score well, yet did need meet many required capabilities around Governance. Thus, RightScale decided to tackle an ambitious project: create a powerful, flexible policy engine in just 6 months.

### Challenges
* An extremely tight timeline; with approximately just 6 months to design and develop a complex new engine.
* Limited resources - due to recent employee departures, I needed to handle much of the design and some development on top of existing obligations.
* Short runway - discovery and usability testing happened concurrently with architecture and development.
* During the process, architectural limitations forced us to be creative with some design choices that we knew were not the ideal user experience.

### Results
The RightScale engineering team and I delivered a working policy engine and supporting UI and catalog in time for the Gartner MQ evaluation. The feature enabled RightScale to significantly expand its reach due to the flexible nature of policies and the ability to connect to any RESTful API. Most importantly, policies played a significant role in RightScale's top score in the [Gartner 2019 Magic Quadrant](https://www.rightscale.com/lp/cloud-management-platform-magic-quadrant){:target="_blank"} and the valuation of the company during its [acquisition by Flexera](https://www.forbes.com/sites/janakirammsv/2018/09/26/flexera-acquires-rightscale-the-multi-cloud-management-platform-company/#66493c354336){:target="_blank"}.

For more information about RightScale policies, see the [documentation](https://docs.rightscale.com/policies/){:target="_blank"}.

### Process
To began, I worked closely with the assigned product manager and select engineers to conduct several discovery sessions with internal stakeholders and key customers to understand their needs around governance and policies. I also began meeting regularly with the engineering architecture team to better understand the engine that they were already busy constructing.

Taking the information from the discovery sessions and existing personas, I worked with product management and engineering to whiteboard a number of design ideas during several brainstorming meetings. We quickly decided that we needed a catalog and dashboard, as well as a place to view and manage the policies and the incidents they created. Based on our interviews, we knew that users would also need a place to design and test policy templates before adding them to the catalog. I created a flowchart to capture the user path through the policy-making process.

From here, I created one of the more complex prototypes I have every designed, including 5 interactive pages with many states and repeaters. This allowed me to present a rich, mid-fidelity HTML prototype to both internal users and customers. These discussions played a key role in identifying 'gotchas' from the initial engineering architecture design in time to make changes. For example, the initial permissions were designed in such a way that only administrators could access an important feature, which would not work for many of our customers. At this point, I also worked closely with the team's product manager to develop KPIs for the policies feature.

Soon development had begun on the UI. I worked closely with our front-end engineer and my UI designer to ensure that the screens being developed were in line with my designs and customer needs. Some modifications were necessary based on back-end API limitations, so I worked closely with engineering to ensure that we accommodated limitations and created stories to address the limitations in the future. For example, we had to scope views to specific accounts rather than allowing a view of policies across all of the users' accounts in one place. 

Once the policies UI was on our staging server, I used Heap Analytics to set up events and reports to track KPIs. Following the launch, I iterated for several more months to add new features that didn't make the initial release, such as policy action approval, which I ended up writing the CSS for due to resource constraints. We also tracked which KPIs were not being met and scheduled additional discovery interviews to get further information on problems that customers were facing.

### My artifacts and deliverables
* Brainstorming notes
* Discovery customer interview notes
* Flowchart
* Mid-fidelity prototype
* Confluence Wiki page
* Usability testing write-up
* CSS code

<a href="/contact-me">Contact me</a> if you are interested in seeing examples of deliverables.