---
date: 2021-11-15
tags: post
name: JSConf India
url: https://www.jsconf.in/
type: conference
title: Multithreaded Logging with Pino
slides_url:
recording_url: 
city: 
country: 
country_code: 
language: English
recognitions:
image_header:
images:
---

Almost every developer thinks that adding one more log line would not decrease the performance of their server... until logging becomes the biggest bottleneck for their systems! We created one of the fastest JSON loggers for Node.js: pino. One of our key decisions was to remove all "transport" to another process (or infrastructure): it reduced both CPU and memory consumption, removing any bottleneck from logging. However, this created friction and lowered the developer experience of using Pino and in-process transports is the most asked feature our user. In this talk, we will show how we solve this problem and increase throughput at the same time: in pino v7 we released pino.transport() to start a worker thread that you can use to transfer your logs sfely to other destinations, without sacrificing neither performance nor the developer experience.a
