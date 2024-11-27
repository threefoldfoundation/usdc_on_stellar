<h1> USDC on Stellar </h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [Website Content](#website-content)
- [URL](#url)
- [Branches](#branches)
- [Ops Scripts](#ops-scripts)
- [Deploy and Test Locally](#deploy-and-test-locally)
- [Contribute](#contribute)
  - [Branches and Forks](#branches-and-forks)
  - [Overview](#overview)
- [References](#references)

---

## Introduction

This repository contains the code to the USDC on Stellar website.

## Website Content

This website explains ways to acquire USDC on the Stellar blockchain.

## URL

The website is hosted at `usdc.threefold.io`.

## Branches

- `main`
  - production version
- `development`
  - staging version
- `development_<suffix>`
  - See `Contribute` section for details

## Ops Scripts

To install the prerequisites to build the website, you can use the `install.sh` script.

To build the website, you can use the `build.sh` script.

## Deploy and Test Locally

To deploy and test locally, refer to [this documentation](./website_content/README.md).

## Contribute

To optimize updates to this repository, we propose a uniform way to collaborate.

### Branches and Forks

To contribute to this repository, make a pull request of your changes. There are two main methods.

1. Fork the repository and make a pull request with your changes
2. If you have access, create a new branch in this repo and make a pull request with your changes

### Overview

- The production-ready content is published on the **main** branch
- The branch development contains the stagin version
- Any changes to main branch must go through a pull request (PR) to the development branch and its associated review from a different branch with the prefix `development_`
  - The name of the branch should indicate the work being done, e.g. working on the readme, `development_readme_work`

## References

This website is written with [Docusaurus](https://docusaurus.io/).