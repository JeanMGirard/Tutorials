## Advantages
--------------------------------------------------
### Planet Scale
**Kubernetes is never outgrowned**: 
Designed on the same principles that allows Google to run billions of containers a week, Kubernetes can scale without increasing your ops team.

### Storage orchestration
Automatically mount the storage system of your choice, whether from local storage, a public cloud provider such as GCP or AWS, or a network storage system such as NFS, iSCSI, Gluster, Ceph, Cinder, or Flocker.

### Automated rollouts and rollbacks
Kubernetes progressively rolls out changes to your application or its configuration, while monitoring application health to ensure it doesn’t kill all your instances at the same time. If something goes wrong, Kubernetes will rollback the change for you. Take advantage of a growing ecosystem of deployment solutions.

### Service discovery and load balancing
No need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.

### Self-healing
Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don’t respond to your user-defined health check, and doesn’t advertise them to clients until they are ready to serve.

### Secret and configuration management
Deploy and update secrets and application configuration without rebuilding your image and without exposing secrets in your stack configuration.

### Horizontal scaling
Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.

--------------------------------------------------
### It’s portable and 100% open source
Kubernetes can practically be deployed on any infrastructure. Run your containers in one or more public cloud environments, on your dedicated virtual machines or on bare metal. You can use the same orchestration tool for all your different environments. Kubernetes’ compatibility across several platforms avoids infrastructure and cloud provider lock-in and makes a multi-cloud strategy and setup not only possible, but highly usable and flexible as well. The project is 100% open source, providing you with even more flexibility. Should you decide to hire external experts to help you implement and maintain your Kubernetes solution, you can easily switch providers if you are unsatisfied with their quality of service (provided you don’t use a specific commercial platform built upon Kubernetes).


### Workload Scalability
Kubernetes is known to be efficient in its use of infrastructure resources and offers several useful features for scaling purposes:
– Horizontal infrastructure scaling: Kubernetes operates at the individual server level to implement horizontal scaling. New servers can be added or removed easily.
– Auto-scaling: With auto-scaling you can automatically change the number of running containers, based on CPU utilisation or other application-provided metrics.
– Manual scaling: You can manually scale the number of running containers through a command or the interface.
– Replication controller: The Replication controller makes sure your cluster has a specified number of equivalent pods (a group of containers) running. If there are too many pods, the Replication Controller terminates the extra pods. If there are too few, it starts more pods.

### High Availability
Kubernetes is designed to tackle the availability of both applications and infrastructure, making it indispensable when deploying containers in production:
– Health checks and self-healing: Kubernetes guards your containerised application against failures by constantly checking the health of nodes and containers. Kubernetes also offers self-healing and auto-replacement: if a container or pod crashes due to an error, Kubernetes has got you covered.
– Traffic routing and load balancing: traffics routing sends requests to the appropriate containers. Kubernetes also comes in with built-in load balancers to distribute your load across multiple pods, enabling you to (re)balance resources quickly in order to respond to outages, peak or incidental traffic and batch processing. It’s also possible to use external load balancers.

### Designed for deployment
One of the main benefits of containersation is the ability to speed up the process of building, testing, and releasing software. Kubernetes is designed for deployment, and offers several useful features:
– Automated rollouts and rollbacks: Want to roll-out a new version of your app or update its configuration? Kubernetes will handle it for you without downtime, while monitoring the containers’ health during the roll-out. In case of failure, it automatically rolls back.
– Canary Deployments: Canary deployments enable you to test the new deployment in production in parallel with the previous version, before scaling up the new deployment and simultaneously scaling down the previous deployment.
– Programming languages and frameworks support: Kubernetes support a wide spectrum of programming languages and frameworks like Java, Go, .Net, etc. Kubernetes also has a lot of support from the development community, who maintain additional programming languages and frameworks. If an application can run in a container, it should run well on Kubernetes.

### And more
Yes, there is more. Kubernetes offers DNS management, resource monitoring, logging and storage orchestration (automatically mount the necessary storage system, be it local storage, or public cloud provider storage). Kubernetes also offers features to address security, for example by making sure sensitive information like passwords or ssh keys, are stored securely in Kubernetes secrets. Both the secrets and the configuration of applications are deployed and updated without having to reconstruct the image or expose confidential information. New features are being released constantly, and can be found on the Kubernetes GitHub page.


--------------------------------------------------

## Kubernetes VS other container management systems

### Impressive heritage
Kubernetes has a very mature and proven underlying architecture. Its design is built on over 10 years of operational experience of the Google engineers who helped build and maintain the largest container platform in the world.

### Outstanding community and industry support
Kubernetes’ broad adoption, growth, support and popularity stands out among all other container orchestration solutions. The project gained a very large active user and developer open source community, as well as the support of global enterprises, IT market leaders and major cloud providers.

### Rich feature set and application support
Kubernetes has a very rich feature set compared to other container management systems. It supports a wide spectrum of workloads, programming languages and frameworks, enabling stateless, stateful, and data-processing workloads. and making Kubernetes flexible enough to meet the needs of a wide range of users and use cases.

### Ongoing development
Soon after its first release, Kubernetes gained a very large and active community. With about 2000 Github contributors at the moment, varying from engineers working at fortune 500 companies to individual developers and engineers, new features are being released constantly. The large and diverse user community also steps in to answer questions and foster collaboration.
