---
date: 2017-06-01
tags: post
name: Web Rebels
url: https://2017.webrebels.org/
type: conference
title: Scaling State 
slides_url:
recording_url: https://2017.webrebels.org/
city: Oslo
country: Norway
country_code: NO
language: English
recognitions:
image_header:
images:
---

The world is real-time: our users expect to receive live notifications, updates, and use extremely reactive interfaces. In a real-time world, we might want to connect physical things, each of them with their own live connection to the cloud. Delivering live notifications has always been a complex task, but tools like WebSockets and Socket.io have enabled a wide range of applications to flourish. 

Scaling those systems often turns out to be problematic. Generally an external publish/subscribe broker is leveraged to deliver the messages, with our application or the framework acting as a proxy. These brokers are usually central points of failure, and extremely difficult to scale. 

UpRing is a distributed system framework for building applications on top of a Consistent Hashring. In other words, UpRing is a P2P system for cloud applications. With UpRing, all the notifications for a single element are routed through the same server, removing the central point of failure and allowing for fine-grained elastic scalability in ratio to the amount of current users.
