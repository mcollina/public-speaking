---
date: 2021-05-21
tags: post
name: RedisConf
url: https://redis.com/redisconf
type: conference
title: Solving Head-Of-Line blocking with auto pipelining
slides_url:
recording_url: https://www.youtube.com/watch?v=0L0ER4pZbX4
city: 
country: 
country_code: 
language: English
recognitions:
image_header:
images:
---

ioredis is a popular client for Node.js. Node.js is an asynchronous runtime that can process multiple requests per second, all of which could be hitting Redis. All the TCP and network overhead negatively affects performance. Commands are stuck in the send queue until the previous ones are correctly delivered to the server. This is a problem known as Head-Of-Line blocking (HOL). NearForm added a new feature to ioredis called “auto pipelining.” When enabled, all commands issued during an event loop iteration are enqueued in a pipeline. At the end of the iteration, the pipeline is executed and all commands are sent to the server at the same time. This feature can dramatically improve throughput and avoids HOL blocking, with NearForm's benchmarks showing 35-50% improvement.
