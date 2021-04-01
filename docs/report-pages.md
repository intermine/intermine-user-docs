---
title: Report Pages
---

Report pages allow you to view all available information on a particular object, such as a protein or a publication, and provide links to other related items. Every item in your search results or lists has its own report page that you can access. For example, you can start by searching for the PPARG gene symbol and then click on that symbol to be directed to the gene’s report page. 

### Report page navigation

The sidebar navigation menu on the left of every report page allows quick navigation to the data you are interested in. You can navigate to a different section by clicking the section name from the left sidebar, and you can expand any section by clicking on the chevron down icon ⌄. The following image shows the PPARG gene report page.

![](</img/report-pages-pparg-1 (1).png>)

:::info
Remember that the sidebar navigation sections are not the same for all objects nor all intermine instances.
:::

#### Page URL

It is possible to keep a reference to a particular report page by copying its permanent URL. Permanent URLs use identifiers unique to the object and must be resolved to an object ID by InterMine. This makes them less suitable than object IDs for daily use; however, these URLs will stay valid even when new versions of the database are released.

![](/img/copy-url.png)

#### Sharing a report page

You can also share a report page with others by copying its permanent URL that is unique to every object. This provides the URL you should use to create a persisting link to a given page. 

### Summary

Each report page starts with a summary section providing key details of the object you are viewing, such as the primary and secondary identifiers, name, id, and symbol, among other information. Some data fields are interactive, such as the **Name** field that offers a link to perform a [region search](region-search). 

#### Sequence information

If you are viewing an object that has sequence information, you can view or download this data in **FASTA** format.  In the image below, the **Sequence Length** field allows you to view the sequence in a new window by clicking the arrow icon ▼. You can also download the data as a FASTA file by clicking on the **FASTA** button next to the Length.

![](/img/report-pages-summary-pparg-2.png)

### Data displayers

Report pages provide information in a variety of formats depending on the data. For example, they include several graphs or visualizations of data under some of the [main sections](report-pages#report-page-navigation). The following screenshot shows available visualization tools under the HumanMine Expression section. You can view any visualization by clicking on its title or the ➕ icon.

![](/img/visualizations-updated.png)

:::info
Remember visualization tools apply to all report pages for a specific class, such as Gene, and are not the same for different objects - classes - nor Intermine instances. 
:::

Report pages also include [results tables](results-tables) of other classes referenced from the current object's class. The image below shows the **Transcripts** class referenced from the PPARG gene - Gene class. 

![](/img/transcript-class-updated.png)

Report pages offer templates under some of the left sidebar [sections](report-pages#report-page-navigation). The results of embedded template searches provide [results tables](results-tables) with their full functionality, as shown in the screenshot. Use the **“Options”** button in the template header to expand the full result table options.

![](</img/go-template (1).png>)

### Interacting with report pages

Most of the data elements displayed on a given report page are interactive to some extent. For example, some data fields provide links to related objects that they reference, and bars or elements on a graph, such as the dots in the image below, often link to additional information.  

![](/img/exp-visualizer-updated.png)

### External links

Report pages provide two sorts of external links - links to other InterMine databases and links to external sources. Links to other InterMine databases are only available for genes. The link will be created either from the same gene object or the orthologous gene in the database you are linking to. For example, the _PPARG_ gene in HumanMine links to the _Eip75B_ gene in FlyMine - an integrated Drosophila genomics database. The orthology mapping is determined by the InterMine database you are linking to. The orthology datasets in each InterMine can be from different sources.

![](</img/report-pages-data-sources-updated (1).png>)

### Lists

Report pages also show if the current object is present in any lists. The lists shown could be lists you have created yourself or public lists that are available to everyone - view the [Lists](lists/lists) section for more details. The following image shows that the PPARG gene was found in 13 lists; 12 are public lists, and one is private. 

![](/img/report-pages-lists.png)

### **Data sources**

Report pages include a list of data sources. Some items in this list may offer links to a given data source, which opens in a new window. 

![](/img/report-pages-data-sources.png)
