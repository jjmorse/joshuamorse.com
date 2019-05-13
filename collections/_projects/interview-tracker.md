---
title: Customer Interview Tracker
heading: Customer interview tracking tool
description: A hackathon project I designed and coded myself to fill an internal company need.
primary: true
company: RightScale
date: 2016-01-01
image: interview-tracker.png
layout: lightbox
---
### Overview
The RightScale product team (PM and UX) conducted regular customer interviews as part of discovery, design, and follow-up, but documentation was scattered across Google documents, Confluence pages, Evernote files, Dropbox, and other locations, making them hard for team members to find. Customer requests were tracked in Jira tickets, but there was little context. In addition, other departments at RightScale, particularly sales, were often unaware of these customer sessions, which sometimes lead to miscommunications. I had identified this as a critical gap and determined that the company needed a unified tool for the team.

### Challenges
* I tackled this project as part of RightScale's bi-annual hackathon, which allowed for just one day (and some change) to design and develop a working solution and present it to the company.
* With management responsibilities dominating my workload, I hadn't engaged in significant JavaScript coding, and my skills were rusty.
* The interview tracker needed to be very easy and fast to use to encourage adoption across the product team.
* I needed to use multiple disparate and sometimes poorly documented APIs, including Confluence, Jira, Salesforce, and Slack (webhooks).

### Results
At the end of the hackathon, I had a working (if a bit rough) version of the interview tracker that I demonstrated in front of the company. Over the next several weeks, I refined it in my spare time. It immediately became the defacto tool used by the product team to track customer interviews. 

Over the next several months, other company employees particularly in engineering, sales, and support, expressed gratitude for the easy of tracking product-customer interactions and the reduction in customer miscommunications. By connecting Jira tickets with customer interviews, product could also more clearly identify important roadmap items and lobby for them in management meetings.

### Process
Unlike most projects listed here, this was largely a development endeavor in an extremely constrained time period, though it had significant product and UX benefits. As a result, I took a different approach.

Before the hackathon officially began, I reviewed the respective APIs for Jira, Confluence, and Salesforce, as well as potential Javascript libraries. I also sketched out a rough design and noted the necessary inputs and outputs.

During the hackathon itself, I spent ~12 hours writing HTML, CSS, and JavaScript code to achieve a working application. After the conclusion of the hackathon and my presentation of the interview tracker, I continued refining it in my free time. In a future hackathon, I added limited recording transcription using the YouTube API.

### My artifacts and deliverables
The application delivered tracked the following interview fields:
* Interviewer(s) (autocompleted)
* Customers/users interviewed (Name and email autocompleted from Salesforce records)
* Interview notes with rich text formating (pasteable)
* Upload an interview recording
* Link relevant Jira tickets (autocompleted from Jira records)

After submitting an interview, the following events occurred:
* A new Confluence page was created with notes and the recording
* Customer Salesforce records were updated with a new event record linking to the Confluence page.
* Jira records were linked to the new Confluence page (and vice versa)
* A message was sent to the product-communication Slack channel noting the interview and linking back to the Confluence page (could be toggled off).
* In a later version, recording transcription was done by YouTube and added to Confluence.

<a href="/contact-me">Contact me</a> if you are interested in seeing a demo of the interview tracker.