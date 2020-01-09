---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
tags: []
robots: index
draft: true
description: "write in quotes"
output:
  blogdown::html_page:
    toc: true
    fig_height: 3
    fig_width: 4
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE, fig.align='center')

if(!require(cutlery)) { devtools::install_github("amit-agni/cutlery"); library(cutlery)}
if(!require(pacman)) { install.packages("pacman"); library(pacman)}
p_load(here,data.table,tidyverse,tictoc,kableExtra,gridExtra)

varPlotCaption <- "© Data Learnings"
ggplot_color_theme <- "turquoise4"
```

<center>
	<!-- feature image -->

</center>
<hr>
