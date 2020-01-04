---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
tags: []
draft: true
robots: "noindex,nofollow"
description: "write in quotes"
output:
  blogdown::html_page:
    toc: true
    fig_height: 5
    fig_width: 5
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE, fig.align='center')

if(!require(pacman)) { install.packages("pacman"); library(pacman)}
p_load(here,data.table,tidyverse,tictoc,kableExtra)
p_load(cutlery)

varPlotCaption <- "© Data Learnings"
ggplot_color_theme <- "turquoise4"
```

<center>
	<!-- feature image -->

</center>