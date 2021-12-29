---
date: 2017-07-12
tags: post
name: FullStack
type: conference
url: https://skillsmatter.com/conferences/8264-fullstack-2017-the-conference-on-javascript-node-and-internet-of-things#skillscasts
title: Take Your Http Server to Ludicrous Speed
slides_url:
recording_url: https://skillsmatter.com/skillscasts/10342-take-your-http-server-to-ludicrous-speed
city: Londong
country: United Kingdom
country_code: UK
language: English
recognitions:
image_header:
images:
---

Express, Hapi, Restify, or just plain Node.js core? Which framework should I choose? In my journey in nodeland, I always wonder about the cost of my abstractions. require(‘http’) can reach 25k requests/sec, Express 9k, and Hapi 2k.
I started a journey to write an HTTP framework with extremely low overhead, and Fastify was born. With its ability to reach an astonishing 20k requests/sec, Fastify can halve your cloud server bill.
How can Fastify be so.. fast? We will see start by analyzing flamegraphs with 0x, and then delve into --v8-options, discovering how to leverage V8’s feedback and optimize our code. We will discuss function inlining, optimizations and deoptimizations. We will discuss the tools and the libraries you can use to do performance analysis on your code. In Fastify we reach a point where even allocating a callback is too slow: Ludicrous Speed.
