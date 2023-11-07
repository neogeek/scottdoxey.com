---
layout: case-study.liquid
---

# Tangle

![](/images/projects/tangle/header.png)

> **Role:** Programmer, Designer, Dev Ops

## Summary

Tangle's original implementation goal was to create a simple authentication system allowing a single user account to log into different Unity applications, similar to Battle.net's authentication system. It soon grew into a complex system that supported schema-less data stores, server management, file uploads, payment processing, and more.

## Objectives

-   Allow users to log into Tangle and join a server where other members are also using Tangle.
-   Allow users to create post-its, image uploads, links, etc and have that data be visible to other users as well a persist.
-   Allow users to manage servers and their memberships.
-   Allow users to invite users to servers and those users to accept or decline invites.
-   Allow users to manage subscription payments via third party payment processing.
-   Ensure users information is secure and that they only have access to the information they allowed to access and modify.
-   Ensure users connections to the audio/video servers are secure using authentication webhooks.

## Implementation

<div class="multiple-images">
    <img src="/images/projects/tangle/tangle-admin-login.png" />
    <img src="/images/projects/tangle/tangle-admin-home.png" />
</div>

## Results

```mermaid
graph LR;
    unityApp["Unity App"]
    adminDashboard["Admin
Dashboard"]
    uptimerobotStatus["UptimeRobot
Status"]
    cloudDNS["Cloud DNS"]
    cloudFunctions["Cloud Function"]
    cloudStorage["Cloud Storage"]
    loadBalancer["Google Cloud
Load Balancer"]
    vercel["Vercel"]
    cloudMemorystore["Google Cloud
Memorystore"]
    cloudSQL["Google Cloud
SQL"]

    unauthenticatedRequests["Unauthenticated
Requests"]
    authenticatedRequests["Authenticated
Requests"]
    authentication["Authentication"]
    rateLimiter["Rate Limiter"]
    dateValidation["Data Validation"]
    routes["Routes"]
    responses["Paginated HTTP
Responses and
Status Codes"]

    unityApp-->cloudDNS
    adminDashboard-->cloudDNS
    uptimerobotStatus-->cloudDNS
    cloudDNS-->loadBalancer
    loadBalancer-->cloudFunctions
    loadBalancer-->cloudStorage
    loadBalancer-->vercel
    cloudFunctions-->api

    subgraph api ["API"]
        unauthenticatedRequests-->rateLimiter
        authenticatedRequests-->authentication
        authentication<-->cloudMemorystore
        authentication-->rateLimiter
        rateLimiter-->dateValidation
        cloudSQL<-->routes
        dateValidation-->routes
        routes-->responses
    end
```

## Challenges and Solutions

### Custom Rate Limiter

### Error Codes

### Data Validation

### Emails

### Automation

#### GitHub Actions

### Cross-team Collaboration

### Payment Processing

### Testing

### API Versioning

## References
