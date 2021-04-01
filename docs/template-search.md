---
title: Template Searches
---

### What is a template search?

A template search is a pre-defined query that has been created and is ready to be used. Template searches allow you to search the database without constructing your own queries from scratch or understanding the underlying data structure. A library of template searches covering a full range of data is available.

A template search has a simple form with one or more entry fields. You can fill in these fields with your data or select a value from the available options. Each template uses default values for all required fields, allowing you to immediately run the query and check whether the search returns the data you want. Each template has a short name and an extended description underneath. The title helps you quickly scan available searches and find the one you need, while the description provides more details, including any restrictions on the values you can use to run the query. To access the template library, click on the Templates tab in the main menu bar. 

![Templates tab](/img/templates-tab-updated.png)

### Finding the template search that you want

There is a long list of pre-defined searches, and checking all available templates can be time-consuming. To find a template of interest, you can filter the templates list by keyword/description or data category.

![Filtering templates](</img/template-filtering (2).png>)

If you are unsure which category to use as a filter, category tags are shown at the bottom right corner of each template preview. 

![Category tags](</img/category-tags (2).png>)

### Running a template search

A template search provides you with a fillable form with one or more fields to set. Some entry fields may require entering a value, while others have a set of available choices in a drop-down list. Some templates offer optional search constraints that you can turn On and Off as desired. Once everything looks good, click **View &gt;&gt;** to expand the template details, including the results' preview and the constraints window. 

![](/img/view-templates.png)

![](</img/run-template (2).png>)

The “Lookup” means that you can use any sort of gene identifier or symbol. Genes usually have at least one identifier \(often more than one\) and an official symbol \(e.g. the human PPARG gene also has the identifiers 5468 and ENSG0000013217\). The lookup constraint means you do not have to specify whether you are providing a symbol or an identifier - you can give any of these.

The previous screenshot is only a preview that doesn't display full results; to access all results of a given template, click **View Rows.**  

![](/img/template-results-table-edited.png)

You can run a template search with a more complex set of constraints - i.e. optional constraints **ON**.

![Optional constraints](/img/template-constraints-2.png)

### How do I run a template search with one of my lists or a public list?

First, remember to **log in** to your account to view and use your saved lists. Every template can be run on relevant lists of objects by selecting the **In list** option. When you run a template on a given list, you are technically searching the database for information related to every item in that list. 

![](</img/in-list (2).png>)

If you have a private list of the correct type \(e.g. a list of genes\) or a public one that matches your needs exists, you can select your preferred list from the shown drop-down menu. 

![](</img/in-list-2 (1).png>)

There is also a “**Not in list**” option that you can use to exclude items \(e.g. genes\) from your search. This will search the database for all items except those in the list specified. 

![](</img/not-in-list (1).png>)

### Understanding your results

Template searches return results in a tabular format. Besides displaying query results, results tables are also powerful analysis tools. Check the [Results Tables](results-tables) section for more details on how to save or download your search results.

### Modifying a template search

Sometimes you may find that a template does not return everything you want in the results. Templates are a good starting point for building more complex searches. You can modify a template using [The Query Builder](the-query-builder) - click on **Edit Query** at the bottom of the **Results Preview** window to view the selected template in the query builder window. 

![](</img/edit-query-1 (2).png>)

![](/img/template-editing.png)

You need to understand how to use the query builder to modify your template - please check [The Query Builder](the-query-builder) section for more details. If you do not want to spend some time learning how to use the query builder, you can always [contact](https://intermine.readthedocs.io/en/latest/about/contact-us/) the InterMine team to help construct your desired search.

### Can’t find what you want - let us know!

If you can’t find a template search that you want or the available ones don’t entirely return everything you need, please do not hesitate to [Contact Us](contact-us). We can create a custom template for you or modify an existing one, assuming that the data is available in the database!

### TroubleShooting

#### My template returns no results - why?

All templates should return results with the default values provided. Please [Contact Us](contact-us) if you find any template that doesn’t.

* If you have entered your desired values and the template returns No Results in the results preview window, this means the data you are looking for is not available.
* For more complex searches with optional constraints, the way the search is constructed may affect the results - some of the required data might be missing resulting in no results. If you have activated multiple optional constraints, it is often a good idea to turn these On individually to see if one of them is causing the problem. By default adding a constraint means that the data **MUST** satisfy that constraint for the search to return results - take a look at [Outer Joins](the-query-builder#outer-joins) for more details about how constraints and joins can limit your results.

Please [Contact Us](contact-us) if you require further assistance. 

