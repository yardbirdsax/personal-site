---
title: Resume
draft: false
tags: []
---

Joshua E. Feierman \[joshua.feierman\]
======================================

------------------------------------------------------------------------

From the first line of code I wrote (an ExtraBasic script to automate generation of reports on a mainframe terminal), my passion has been combining technologies to provide value. I am a leader who enjoys tinkering with new technologies and helping others learn, whether by writing articles, presenting, or simple one on one conversations.

------------------------------------------------------------------------

- LinkedIn: [https://www.linkedin.com/in/joshuafeierman](https://www.linkedin.com/in/joshuafeierman)
- GitHub: [https://github.com/yardbirdsax](https://github.com/yardbirdsax)
- Personal Website: [https://josh.feiermanfamily.com](https://josh.feiermanfamily.com)

Experience
----------
### 2019 - Present: Turnberry Solutions

*March 2021 - Present: Principal DevOps Engineer*

-   Leading a team in an effort to migrate from an on-premise OpenStack based infrastructure to an AWS based one. This includes:
    - Designing infrastructure layout and building sets of re-usable Terraform modules for repeatable deployments
    - Creating a path to migrate from Hashicorp Nomad to Kubernetes for container orchestration, including the introduction of GitOps principles
    - Constructing a strategy for incremental service migration using Hashicorp Consul Connect Service Mesh as a traffic mediator
    - Implementing Hashicorp Vault as the exclusive secret store for all applications and infrastructure deployments
-   Breaking down multiple large Terraform repositories into smaller units for safer, faster, and more repeatable deployments.
-   Adding standardized AWS CloudWatch alarms to Terraform modules to ensure that monitoring and alerting is always included in deployments of related infrastructure.
-   Leading an effort to introduce centralized documentation of best practices around DevOps and Site Reliability Engineering within the organization.

*2019 - March 2021: Senior DevOps Engineer*

-   Implemented numerous CI/CD pipelines for database changes, containerized APIs, and React web application deployments using Azure DevOps, AWS Codebuild, AWS CodeDeploy, and FlywayDB, which allowed us to:
    - Move from manual execution of database scripts to automated release of database changes
    - Implement a Blue/Green rollout strategy for a containerized API
-   Created a set of standardized Azure DevOps templates, so that new CICD pipelines can be created extremely quickly while still following standard guidelines and patterns.
-   Achieved multiple AWS Certifications in the first 30 days of employment, including the Solutions Architect Associate and DevOps Engineer Professional.
-   Created a standardized ingestion pipeline for logs from Elastic Container Service and Lambda, using a combination of Kinesis Firehose streams, Python running in Lambda, and AWS Elasticsearch Service, allowing us to easily search log records, introduce proactive machine learning based alerting, and troubleshoot problems faster.
-   Created numerous Terraform modules for deploying common sets of infrastructure in a repeatable and standardized way, including automated testing using Terratest within Azure DevOps.


### 2014 - 2019: Gateway Ticketing Systems

*2017 - 2019: Manager of Technology Operations*

-   Implementing a simple Kanban based task workflow in Atlassian JIRA, which resulted in immediate productivity gains and a clear view of the work the team was being asked to do on a daily basis. -   Developed standardized procedures and documentation to ensure consistent delivery of work.
-   Lead the move of over 150 high traffic e-commerce web sites from a data center to a Microsoft Azure hosted environment in a three month period. Through a combination of deployment / task automation (we utilized Powershell scripts, Powershell DSC templates, and ARM templates) and an incredible effort by the team, we completed the move with nearly a week to spare. 
-   Leveraging the automation and lessons learned from the migration, reduced overall time to provision and deploy the required infrastructure for a new customer from several days to under a day of total hands-on time.
-   Established a regular cadence of meetings with our development teams (to ensure we were working on things at the right time to help them deliver their work).
-   Lead efforts to increase automation and introduce infrastructure as code (such as adopting Terraform) practices.
-   Lead the implementation of numerous new technologies (Kubernetes, Rancher, and Elasticsearch to name a few). 
-   Engaged in numerous side projects to continue my own learning process. 
    - Set up logging pipelines using Logstash running on Kubernetes to help ingest data from legacy systems into Elasticsearch, where it can more easily be queried and analyzed, including delving into the Machine Learning module (to help build proactive alerting for our web sites based on anomaly detection).
    - Analyzed a year's worth of Azure consumption data using Dask and Pandas, so that we could utilize Reserved Instances to reduce costs by upwards of 20%.
    - Used a combination of technologies ([k3s](https://k3s.io), [Azure IoT Hubs](https://azure.microsoft.com/en-us/services/iot-hub/), [Prometheus](https://prometheus.io/), and [Grafana](https://grafana.com/) to name a few) to help monitor our new family pet's health (see [bit.ly/projectfreddy](https://bit.ly/projectfreddy)).

*2014 - 2017: Senior SQL Server Database Administrator*

-   Standardized the maintenance jobs across all our SQL Server infrastructure, relying heavily on Ola Hallengren's amazing framework. 
-   Assisted development teams with improving their query performance, held group training sessions, and wrote a weekly column going in depth on various topics around using SQL Server to it's fullest capabilities.
-   Lead the migration of our main e-commerce hosting from a fully physical environment to one built on VMWare ESXi. 
    - Ensured that our new SQL Server clusters were built according to best practice standards, using AlwaysOn Availability Groups and consolidating workloads so as to save on licensing costs. 
    - Wrote and implemented a framework for easily setting up log shipping across our two environments, so that the downtime of web sites during the migration was reduced from an hour or more to under 30 minutes (in many cases less than 10).
-   Wrote a series of Powershell scripts that allowed us to deploy highly available SQL Server clusters on Microsoft Azure in less than 30 minutes of hands-on time. Later, as ARM templates became -   Migrated all our automation to using ARM templates, so that we could take advantage of the newer features that Microsoft constantly made available. 
-   Planned and executed our first deployment using the new Azure SQL Database platform, across four environments and three continents.
-   Helped customers ensure that their SQL Server infrastructure was being properly backed up, advised on best practices around performance, disaster recovery, and data extraction / transformation into various third party systems. 
-   Wrote a series of whitepapers on best practices around high availability and SQL Server maintenance, and wrote / implemented a standardized maintenance package that we installed for customers if they did not have their own solution.

### 2005 - 2014 : SEI Investments

*2012 - 2014: Database Developer and Architect*

-   Joined a specialized team of individuals dedicated to ensuring best practices were followed by development groups within SEI. Along with two other seasoned database professionals.
    - Built a comprehensive set of standards and guidelines around writing compliant Transact-SQL code, and implemented a standardized review process to ensure they were followed.
-   Wrote a Powershell framework that used a template-like language to easily generate code to do standard data manipulation and retrieval operations. This allowed teams to vastly reduce the time required to follow these standards, resulting in a much higher compliance rate.
-   Assisted numerous development teams delve deeply into long-standing performance issues, especially those around large scale data transformation and reporting. By refactoring their code to use more set-based logic, as well as implementing better indexing strategies throughout their databases, we reduced processing time by more than 90% in numerous cases, allowing teams to better meet critical SLAs for reporting and data processing systems.

Certifications
--------------

- Azure Administrator Associate
- Azure DevOps Engineer Expert
- AWS Solutions Architect Associate
- AWS DevOps Engineer Professional

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
