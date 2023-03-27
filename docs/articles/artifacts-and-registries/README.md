# Artifacts & Registries
Artifacts are significant from a project management perspective as deliverables. The deliverables of a software project are likely to be the same as its artifacts with the addition of the software itself.

Simply said.. An artifact is a deployable component of your application

## About
Artifact, sometimes also called Derived Object, is a product of some process applied to the Code Repository. Originally they were called Build Artifacts, but as more processes were applied other than build to create them, the first word was simply dropped.

The major distinction is that artifacts can be recreated from the code repository using the same process, providing you have preserved the environment in which the process was applied. As this process can be time consuming and the environment can be preserved imperfectly to be able to recreate the artifacts in the exact same way, we started to store them in Artifact Repositories.

Storing them apart from Code Repository in an Artifact Repository is a design decision a DevOps engineer would make. Some companies, namely Perforce, suggest to use their Code Repository as Artifact Repository as well. There are different requirements in terms of access, auditing, object sizes, object tagging and scalability on each repository and so depending on situation it is often better to use two distinct products. For example Git repositories are copied in their entirety to every development machine and so storing artifacts in the code repository would increase its size beyond all reason, although lately there are ways to mitigate this. Another decision to make is which artifacts to store. Some companies store even intermediate artifacts as individual object files, to speed re-builds, others store simply just the final binaries. Not all artifacts have the same value. Artifacts resulting from a release build could have different requirements than artifacts resulting from a developer build.

Most common artifacts are results of the following processes: Configuration, Preprocessing, Compilation, Linking, Automated Testing, Archiving, Packaging, Media files creation and processing, Data File Generation, Documentation Parsing, Code analyzing, QA, etc.


## Advantages 
(some of them)

During development you generate a fair amount of different artifacts. These might include:

* The source code
* The compiled application
* Deployable packages
* Documentation
* and potentially others as well

While you could use a source control system to store all of them, it's usually massively inefficient, as source control systems are usually designed to handle text based files, and not binary files. You might be able to use them as a simple storage mechanism, if most of your releases are text based, and you don't have to store a lot of binary data. 

Also sources can take a considerable amount of storage size as they include development files such as test suites and the versionning history as well.

Artifact repositories however are designed to store all kinds of files, including binary ones. This includes anything from zipped up source codes, to build results, to things like docker images as well. Also, they usually not only store these artifacts but also help manage them using various additional functions, for example:


**Versioning support**: properly store some metadata, like when each artifact was built, what their version number is, store their hashes, etc.
Retention: make sure you only keep the important artifacts, and automatically delete ones that are only snapshots / not needed anymore, etc. based on various criteria you can set up.

**Access control**: set up who can publish and who can download the various artifacts

**Promotion**: ability to promote artifacts. For example you can have snapshot artifacts with a short retention period on a server near your coders, and a separate repository near the live servers, where only artifacts that have been deemed deployable appear. This also includes support for various version channels, and moving artifacts between them (like promoting a specific version from beta to stable).
Act as a native repository for the artifacts. Meaning you can use it as the main repository for maven, rubygems, docker, etc. This can also include caching of artifacts from the official repositories as well.


## Solutions

### DevOps tools
Your current devOps suite might support some kind of artifact or package management.

* [Gitlab](https://about.gitlab.com/) enterprise - 19$/month
* [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops) - Free

[azure-devops-vs-gitlab](https://docs.microsoft.com/en-us/azure/devops/learn/compare/azure-devops-vs-gitlab)

### Artifact repositories
To support all or most artifact types, an artifact repository is the way to go. 

* [Nexus](https://www.sonatype.com/product-nexus-repository)
    * Free tier
    * World's #1 Repository Manager
    * Store and distribute Maven/Java, npm, NuGet, RubyGems, Docker, P2, OBR, APT, GO, YUM components and more.
    * Compatible with popular tools like Eclipse, IntelliJ, Hudson, Jenkins, Puppet, Chef, Docker, and more.
* [ProGet](https://inedo.com/proget)
    * Free tier
* [Artifactory](https://jfrog.com/artifactory/)

### NPM Registries
If you only need npm packages, a simple npm registry can get the job done. 

**Exemples**:
* [verdaccio](https://verdaccio.org) - ightweight private npm proxy registry 
    * [youtube - Vienna.js, Introduction to Verdaccio, January 2019](https://www.youtube.com/watch?reload=9&v=hDIFKzmoCaA)
    * [medium - creating-a-free-private-npm-registry-with-verdaccio](https://medium.com/faun/creating-a-free-private-npm-registry-with-verdaccio-e1becdc542b)
    * [docker-verdaccio-s3](https://github.com/asynchrony/docker-verdaccio-s3)
* [cnpmjs](https://github.com/cnpm/cnpmjs.org) - Private npm registry and web for Enterprise, base on koa, MySQL and Simple Store Service.
    * low cost maintenance, easy to use, and easy to scale solution for private npm.
    * Only needs a store system and sql (sqlite3/mysql/PostGres/MariaDB)
* [npm-register](https://github.com/jdxcode/npm-register) - Your own private npm registry and backup server. Designed to be easy to set up and maintain, performant, and stable.

