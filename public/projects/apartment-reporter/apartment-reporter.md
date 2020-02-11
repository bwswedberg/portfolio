---
id: "apartment-reporter"
title: "Apartment Reporter"
lead: "Scraping the web for the apartment next door"
date: "2018-02-01"
description: "Scrapping the web to better understand local rent prices with Redfin inspired UI for visualization."
technologies: ["JavaScript", "React.js", "Redux.js", "D3.js", "Blueprint.js", "Webpack.js", "SASS", "OpenAPI/Swagger", "AWS APIGateway", "AWS Lambda", "AWS CloudFormation", "AWS CloudWatch", "AWS DynamoDB", "AWS S3", "AWS Cognito", "AWS IAM", "Cheerio.js"]
thumbnail: "preview.png"
images: []
---
*Apartment Reporter* is an web app that to better understand [Burke Shire Commons Apartment complex](https://www.burkeshirecommonsapts.com/) pricing strategy. The AWS backend scrapped the apartment complex listings daily, stored them in DynamoDB, and alerted me via email when a listing fit my criteria. I also built a Zillow/Redfin inspired React + Redux frontend for data exploration.

The web app paid off. After several months of web scrapping, I was alerted about an apartment literally across the hall. The price point was average per the historical data I had recorded.
