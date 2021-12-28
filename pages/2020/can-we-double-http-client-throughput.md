---
date: 2021-11-02
tags: post
url: 
type: conference
title: NodeConf Remote 2020
slides_url:
recording_url: https://www.youtube.com/watch?v=D9xblqBAHO8
city: 
country: 
country_code: 
language: English
recognitions:
image_header:
images:
---

The Node.js HTTP client is a fundamental part of any application, yet many think it cannot be improved. I took this as a challenge and I’m now ready to present a new HTTP client for Node.js, undici, that doubles the throughput of your application
The story behind this improvement begins with the birth of TCP/IP and it is rooted in one of the fundamental limitations of networking: head-of-line blocking (HOL blocking). HOL blocking is one of those topics that developers blissfully ignore and yet it deeply impacts the runtime experience of the distributed applications that they build every day. Undici is a HTTP/1.1 client that avoids HOL blocking by using keep-alive and pipelining, resulting in a doubling of your application throughput.

