---
title: Getting Started
---

import { Youtube } from '@site/src/components/embed';

This quick guide will walk you through the key functions of the InterMine - BlueGenes application UI. 

You can use this guide to:

* Take a general overview of the BlueGenes interface.
* Take a closer look at the key sections of the homepage.
* Understand the basics of using InterMine and its main sections 

:::info
This concise overview is geared mainly for new users. For more information about a particular topic, view its relevant section in the documentation. 
:::

### The Basics

The InterMine query interface provides various ways to view and analyse data. Whether you are looking at a single gene, a list of genes, transcription factor binding sites, or protein interactions, it is useful to understand the following terminology to understand the interface. 

Intermine allows you to work with **single items \(objects\)** and **multiple items \(lists\)**:

* **Object:** A single item in the database. This can be anything, a gene, protein or binding site.
* **List:** Multiple items of the same type. For example, a list of genes or a list of proteins.

:::info
This user guide demonstrates the workflow in all sections using HumanMine as a reference.
:::

### Homepage

Below is a quick description of different sections and their associated functionalities of the BlueGenes homepage: 

![The BlueGenes UI Homepage](</img/homepage (2).png>)

* [**Home**](https://www.humanmine.org/humanmine): the homepage of the interface offers a search feature for any term, access to popular queries, documentation, the InterMine blog, external tools, and more.
* [**Upload**](/docs/lists/upload-a-list): to upload a new list as a free text or from an existing file.
* [**Lists**](/docs/lists/lists): a list in InterMine refers to multiple items of the same type - for example, a list of genes or a list of binding sites.
* [**Templates**](/docs/template-search): a pre-defined query that provides a simple form with one or more variables for you to define; defaults are always provided so you can see exactly how the template works.
* [**Regions**](/docs/region-search): a tool for looking at genomic regions and the features they contain, allowing you to upload a set of regions and search for features mapped to these regions.
* [**Query Builder**](/docs/the-query-builder): an advanced query building tool - you can use this to construct your own searches. You can even turn them into your own template searches.
* [**Keyword Search**](/docs/keyword-search): a search box appears on the menu bar of all pages and the home page. You can search for any identifier, name, symbol or keyword.
* [**HumanMine**](https://www.humanmine.org/humanmine): an integrated database of Homo sapiens genomic data. You can change HumanMine to a different InterMine instance. Check this [registry](http://registry.intermine.org/) for available instances.
* [**Account**](/docs/account): your personal InterMine account where you can manage your lists, queries, templates, etc.

### InterMine search tools

* [Keyword Search](/docs/keyword-search)
* [Template Searches](/docs/template-search)
* [The Query Builder](/docs/the-query-builder)
* [Regions Search](/docs/region-search)

### Viewing search results

To view data resulting from these searches, intermine provides the following interfaces:

* [Report Pages](/docs/report-pages):  a report page can be viewed for any object, such as gene or protein, allowing you to view all information available for that particular object and providing links to related objects.
* [List analysis pages](/docs/lists/list-analysis-pages): every list has an associated list analysis page. A list analysis page is analogous to a gene report page and provides collated information about all the items in your list.
* [Results Tables](/docs/results-tables): results tables are not only for displaying your search results but are also powerful analysis tools, allowing you to summarise, filter, add or remove columns, create lists and download data.
* [Regions Search Results](/docs/region-search): regions search provides results in a tabular format. The resulting table displays each of your regions in turn with all features found and their genomic location.

### How everything links together?

Although the above tools and interfaces are described separately, they all interact together in various ways. 

For example, you could run [Template Searches](/docs/template-search) to find all genes regulated by a specific transcription factor. Using the resulting [Results Table](/docs/results-tables), you could [Upload a list](/docs/lists/upload-a-list) of these regulated genes. This list could then be analysed using the [List analysis pages](/docs/lists/list-analysis-pages). You could also run further [Template Searches ](/docs/template-search)using this list as the input.

Alternatively, you may start by [Uploading a list](/docs/lists/upload-a-list) of genes. Through the graphs and tables provided on the [List analysis pages](/docs/lists/list-analysis-pages), you may filter this list according to particular criteria \(e.g. expressed in the brain\) to create a smaller list. You may then run a series of [Template Searches](/docs/template-search) or build your own queries using [The Query Builder](/docs/the-query-builder) to find out more about this set of genes. You may also browse the information available on the [Report Pages](/docs/report-pages) for any genes that may seem interesting to you!

Likewise, you may start by entering a gene identifier for a gene you have picked up in an experiment into the [Keyword Search](/docs/keyword-search) box and browse all the information for this gene on its [Report Pages](/docs/report-pages). From here, you learn that this gene has orthologues in fish, mouse and rat. You click the link for the mouse orthologue and, this takes you to the report page for this orthologous gene in a related intermine, MouseMine, and so on.

### Video tutorial

<Youtube id="6ZjJKDszhBs"/>
