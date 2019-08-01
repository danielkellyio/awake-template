---
title: Newsletter Signup
subtitle: Awake Integrates with Mailchimp for Easy Newsletter Management
category:
  - Third Party Integrations
author: Daniel Kelly
date: 2019-08-01T03:49:49.295Z
featureImage: /uploads/mailchimp.jpg
---
You're publishing great content! Make sure people can get it easily right in their inbox with Awake's ready to go Mailchimp integration. Follow these instructions to get your newsletter up and running

## 1. Signup with Mailchimp

If you don't already have a mailchimp account, head on over to [mailchimp.com](https://mailchimp.com) and sign up (don't worry they have free tiers that will give you all you probably need).

## 2. Create a New Campaign

Go to "Campaigns" in the main navigation of the Mailchimp dashboard and then click the "Create Campaign" button on the top right.

## 3. Start Signup Form

From the modal overlay that appears choose "Signup Form", then click "Begin" under "Embedded Form"

![Mailchimp create signup form](/uploads/screen-shot-2019-08-01-at-1.03.08-pm.png)

## 4. Get Form Action

Under "Copy/paste onto your site" you'll see the markup  for the newsletter form. Just copy the form action value from the form

![copy form action from mailchimp](/uploads/screen-shot-2019-08-01-at-1.05.09-pm.png)

## 5. Add the Action to the Awake Site Configuration

```
// Can be the form action on a mail chimp form, a hubspot form,
// or any other url you want to post the form data tomailchimp: {
    on: true,
    formAction:'enter url here'
}
```
