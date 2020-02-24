---
title: Resume
published: true
tags: []
---

Joshua E. Feierman \[joshua.feierman\]
======================================

------------------------------------------------------------------------

From the first line of code I wrote (an ExtraBasic script to automate generation of reports on a mainframe terminal), my passion has been combining technologies to provide value. I am a leader who enjoys tinkering with new technologies and helping others learn, whether by writing articles, presenting, or simple one on one conversations.

------------------------------------------------------------------------

- LinkedIn: [https://www.linkedin.com/in/joshuafeierman](https://www.linkedin.com/in/joshuafeierman)
- GitHub: [https://github.com/yardbirdsax](https://github.com/yardbirdsax)

Experience
----------
### 2019 - Present: Turnberry Solutions

*2019 - Present: Senior DevOps Engineer*

-   In December of 2019, I made the decision to return to a technical role and have been working on a small project based consulting team ever since.
-   I implemented an automated CI/CD pipeline for database changes using Azure DevOps, AWS Codebuild, and FlywayDB, which allowed us to move from manual execution of database scripts to automated release of database changes.
-   I achieved multiple AWS Certifications in the first 30 days of employment, including the Solutions Architect Associate and DevOps Engineer Professional.
-   I created a standardized ingestion pipeline for logs from Elastic Container Service and Lambda, using a combination of Kinesis Firehose streams, Python running in Lambda, and AWS Elasticsearch Service. This allows us to easily search log records and troubleshoot problems faster.

### 2014 - 2019: Gateway Ticketing Systems

*2017 - 2019: Manager of Technology Operations*

-   In May of 2017, Gateway decided to split our internal IT group into two teams: one responsible for Corporate IT, and one that managed all customer facing hosted systems. I quickly realized that I had two options: be moved to the team as an individual contributor, or apply for and hopefully be given the chance to lead the team. I chose the latter, and gratefully was given the opportunity to lead.
-   Before the team was formed, task management was non-existent. Requests were e-mailed or often simply done over IM chats, with no tracking of time spent or visibility into the work being done. My first step was implementing a simple Kanban based task workflow in Atlassian JIRA, which resulted in immediate productivity gains and a clear view of the work the team was being asked to do on a daily basis. Over the next year, I led the team in developing standardized procedures and ensuring consistent delivery of work.
-   In March of 2018, we were given a mandate: move over 150 high traffic e-commerce web sites from a data center to a Microsoft Azure hosted environment, and do it in three months. Through a combination of deployment / task automation (we utilized Powershell scripts, Powershell DSC templates, and ARM templates, many of which I wrote) and an incredible effort by the team, we completed the move with nearly a week to spare. It was a proud moment for me to see the team shine. Even today, we continue to see the benefit of investing in automation, in our ability to rapidly deliver new customer implementations and other high value work to our business.
-   From the beginning, my goal was to mold the team into a true DevOps model, and since July of 2018 that was my focus. In that time, we established a regular cadence of meetings with our development teams (to ensure we're working on things at the right time to help them deliver their work), continued our efforts at automation and infrastructure as code (we're now adopting Terraform as an example), and implemented numerous exciting new technologies (Kubernetes, Rancher, and Elasticsearch to name a few). Throughout that time, I contributed in both leadership and technical ability, driving the team towards continuous learning (we reserve Fridays for training, and I protect it mercilessly) and growth.
-   Despite a full plate's worth of management duties (such as managing the second largest budget in the company), I made a point to continue my own learning process, because I believe firmly that maintaining technical skill is a necessity in leading technical teams. To name a few examples: I've set up logging pipelines using Logstash running on Kubernetes to help ingest data from legacy systems into Elasticsearch, where it can more easily be queried and analyzed, including delving into the Machine Learning module (to help build proactive alerting for our web sites based on anomaly detection); I learned Dask and Pandas, to analyze a year's worth of Azure consumption data, so that we can utilize Reserved Instances to reduce costs by upwards of 20%; I've even used a combination of technologies ([k3s](https://k3s.io), [Azure IoT Hubs](https://azure.microsoft.com/en-us/services/iot-hub/), [Prometheus](https://prometheus.io/), and [Grafana](https://grafana.com/) to name a few) to help monitor our new family pet's health (see [bit.ly/projectfreddy](https://bit.ly/projectfreddy)).

*2014 - 2017: Senior SQL Server Database Administrator*

-   When I was brought on board, Gateway had never had a true DBA resource. From day one, I began looking for ways to improve the existing processes and codebase, as well as contributing to troubleshooting long-standing problems. One of my first accomplishments was standardizing the maintenance jobs across all our SQL Server infrastructure, relying heavily on Ola Hallengren's amazing framework. I also helped the development teams with improving their query performance, held group training sessions, and even wrote a weekly column going in depth on various topics around using SQL Server to it's fullest capabilities.
-   In early 2015, we migrated our main e-commerce hosting from a fully physical environment to one built on VMWare ESXi. During that process, I helped by ensuring that our new SQL Server clusters were built according to best practice standards, using AlwaysOn Availability Groups and consolidating workloads so as to save on licensing costs. I also wrote and implemented a framework for easily setting up log shipping across our two environments, so that the downtime of web sites during the migration was reduced from an hour or more to under 30 minutes (in many cases less than 10).
-   In late 2015, we began our journey with Microsoft Azure. At the time, there was no standardized way to deploy infrastructure, so I wrote a series of Powershell scripts that allowed us to deploy highly available SQL Server clusters in less than 30 minutes of hands-on time. Later, as ARM templates became available, I migrated all our automation to using them, so that we could take advantage of the newer features that Microsoft constantly made available. I also helped plan and execute our first deployment using the new Azure SQL Database platform, across four environments and three continents.
-   Throughout this period, a large portion of my time was spent working directly with our customers in a consulting-like capacity. I helped them ensure that their SQL Server infrastructure was being properly backed up, advised on best practices around performance, disaster recovery, and data extraction / transformation into various third party systems. To help our front-line teams better answer customer inquiries, I wrote a series of whitepapers on best practices around high availability and SQL Server maintenance, and wrote / implemented a standardized maintenance package that we installed for customers if they did not have their own solution.

### 2005 - 2014 : SEI Investments

*2012 - 2014: Database Developer and Architect*

-   In 2012, after several years as a database administrator, I was asked to join a specialized team of individuals dedicated to ensuring best practices were followed by development groups within SEI. Along with two other seasoned database professionals, I helped build a comprehensive set of standards and guidelines around writing compliant Transact-SQL code, and implemented a standardized review process to ensure they were followed.
-   To help development teams more easily follow our standard of using stored procedures for all data access, I wrote a Powershell framework that used a template-like language to easily generate code to do standard data manipulation and retrieval operations. This allowed teams to vastly reduce the time required to follow these standards, resulting in a much higher compliance rate.
-   I helped numerous development teams delve deeply into long-standing performance issues, especially those around large scale data transformation and reporting. In many cases, I personally helped to refactor their code to use more set-based logic, as well as implementing better indexing strategies throughout their databases. This resulted in reductions in processing time of more than 90% in numerous cases, allowing teams to better meet critical SLAs for reporting and data processing systems.

Writing
-------

I believe writing is one of the best ways to both learn new things personally and to help others to learn.

*Simple-Talk*

<https://www.simple-talk.com/author/joshua-feierman/>

Author of articles on applying the scientific method to SQL Server performance tuning and enterprise database administration.

*SQL Server Central*

<http://www.sqlservercentral.com/Authors/Articles/Joshua_Feierman/424128/>

Author of a series on effective communication between DBAs and developers.

*Medium*

<https://medium.com/@yardbirdsax>

Non-technical and technical content on various subjects.

Education
---------

Franklin & Marshall College - 2003
:   B.A. in Neuroscience

Interests
---------

I love writing, both technical / non-fiction and fiction, and reading (especially science fiction). I also enjoy outdoor activities including kayaking, gardening, and hiking.

------------------------------------------------------------------------

josh@sqljosh.com • (484) 938-8272
