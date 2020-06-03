# Welcome

Since GDPR came into force, developement teams have been forced to seek for technics to ensure compliance with GDPR requirements. Into a large number of approaches, a branch have been proposed solutions for this compliances challages by using a GDPR data provenance model.

In this documentation, we intend to gather:

* a brief introduction to the GDPR data provenance model proposed by Ujcich, Bates, and Sanders (2018);
* some analysis from original GDPR text that contribute for;
* extensions and improvements for that model; and
* finally, design patterns which explain who to use that model based in case studies.

## Background

In the literature, provenance mechanisms have been used to aid in meeting these requirements \cite{ujcich2018provenance, aldeco2008provenance, martin2012provenance, bartolini2015using}. According to the \textit{Oxford English Dictionary}, provenance is 

> "the source or origin of an object; its history and pedigree; a record of the ultimate derivation and passage of an item through its various owners."

Usually, provenance has been used in e-science contexts to help in tasks related to the interpretation and understanding of results \cite{freire2008provenance}, in reason to capture a set of processing steps that a piece of data has been submitted to.

The W3C provenance model PROV defines provenance as

> "information about entities, activities, and people involved in producing a piece of data or thing, which can be used to form assessments about its quality, reliability, or trustworthiness." \cite{moreau13provdb}

The PROV conceptual data model (PROV-DM) gathers provenance concepts (types and relations) in six components. For this paper, we highlight the concept of the \textbf{entity} as

> "a physical, digital, conceptual, or other kind of thing with some fixed aspects; entities may be real or imaginary [...]." \cite{moreau13provdb}

the concept of the \textbf{activity} as

> "something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities." \cite{moreau13provdb}

and the concept of the \textbf{agent} as 

> "something that bears some form of responsibility for an activity taking place, for the existence of an entity, or for another agent's activity." \cite{moreau13provdb}

These three concepts could be comprehended as vertices of the provenance graph, while the remaining main concepts (relations) are edges that connect these vertices, as shown in Figure \ref{fig:provdb}.

## Reference

[1]: ...