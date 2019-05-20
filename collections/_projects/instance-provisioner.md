---
title: Instance Provisioner
heading: Instance Provisioner - Cloud Management
description: Am update to an old and difficult to use feature of Cloud Management.
primary: false
company: RightScale
date: 2014-12-01
image: instance-provisioner.png
layout: lightbox
---
### Overview
Many of RightScale’s pages date back to the time before I started my five-year career at RightScale. These pages were created using Ruby on Rails, and generally followed a pattern of basic forms and static tables. While I had designed an improved server flow in my first year at RightScale, that interface was never adapted to be used for launching raw instances. In the past, we strongly encouraged users to launch servers rather than instances, but as the number of supported clouds grew, the need to launch raw instances increased, users had a greater need to launch raw instances.

### Project
This project was initiated shortly after we lost several UX team members. As a result, I was left to create both the interaction and visual design for the new UI. In addition, the UI needed to be built on top of our API and support approximately 8 different clouds, all with different requirements. I was tasked with developing the technical specifications and identifying areas where we needed to expand our API coverage in order to support a robust interface.

To begin the project, I performed the following tasks:
* Interview key internal stakeholders.
* Review our web analytics data to understand how users were using our current instance launch pages.
* Review the UI and API specifications for all of the supported clouds, such as AWS. This provided technical information on each cloud’s requirements and a competitive analysis of existing UIs.
* Review our own API documentation and speak with developers to understand exactly what we supported.

### Design
Once I understood the customer requirements and technical constraints, I began working on the design. It quickly became clear that a single, scrolling page could not handle the quantity of new features being rolled out by our cloud partners, so I adapted the Instance Provisioner to use a wizard-like flow. I moved quickly from simple sketches to a mid-fidelity prototype so I could gather feedback.

Elements of the design process included:
* Create a robust series of specifications, outlining the inputs necessary for AWS, with an eye towards the other supported clouds.
* Develop an initial visual design.
* Transform the design into a working interactive prototype with Axure RP.
* Get initial customer and internal feedback with informal usability tests.
* Work closely with developers to implement the Instance Provisioner for AWS.

### Release
The initial version of the Instance Provisioner was released for AWS. During this process, I was continuously iterating on the designs and specifications for the additional clouds while also gathering feedback from our initial users to tweak the overall design.

<a href="/contact-me">Contact me</a> if you are interested in seeing examples of deliverables.