<link href="/css/styles.css" rel="stylesheet" />


# Introduction

Since GDPR came into force, developement teams have been forced to seek for technics to ensure compliance with GDPR requirements. Into a large number of approaches, a branch have been proposed solutions for this compliances challages by using a GDPR data provenance model.

In this documentation, we intend to gather:

* a brief to the GDPR data provenance model proposed by Ujcich, Bates, and Sanders (2018);
* some analysis from original GDPR text that contribute for;
* extensions and improvements for that model; and
* finally, design patterns which explain who to use that model based in case studies.

## Provenance Background

<div class="quote">
    <p>
        The source or origin of an object; its history and pedigree; a record of the ultimate derivation and passage of an item through its various owners.
    </p>
    <span>
        Pronance definition by Oxford English Dictionary.
    </span>
</div>

In the literature, provenance mechanisms have been used to aid in meeting these requirement. Usually, provenance has been used in e-science contexts to help in tasks related to the interpretation and understanding of results, in reason to capture a set of processing steps that a piece of data has been submitted to.

The World Wide Web Consortium (W3C) describes the PROV, a family of documents that proprose standardizations and concepts for a provenance model. The PROV defines provenance as _"information about entities, activities, and people involved in producing a piece of data or thing, which can be used to form assessments about its quality, reliability, or trustworthiness."_

The PROV conceptual data model (PROV-DM) gathers provenance concepts (types and relations) into six components. Those components supply a vocabulary to describe provenance. For the proposes of this documents, we highlight the following three concepts:

* **entity** &#8212; _"a physical, digital, conceptual, or other kind of thing with some fixed aspects; entities may be real or imaginary [...]."_

* **activity** &#8212; _"something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities."_

* **agent** &#8212; _"something that bears some form of responsibility for an activity taking place, for the existence of an entity, or for another agent's activity."_

These three concepts could be comprehended as vertices of the provenance graph, while the remaining main concepts (relations) are edges that connect these vertices, as shown in <a href="#Figure1">Figure 1</a>.

<div id="Figure1" style="text-align:center;font-weight:900">
    <img src="/img/PROV.svg">
    <p class="caption">
        Figure 1: The PROV conceptual data model. House symbols represent agents; rectangles represent activities; ellipses represent entities; arrows represent relations; notes (in white) represent other properties
    </p>
</div>

## Related Work

Introduce here the GDPRrov, GConsent, and GPDRtEXT.
You should also approach the prior works that involve data privacy and protection with provenance 

<!--
## References

### Footnotes

[1#ujcich2018provenance] ujcich2018provenance 

[#aldeco2008provenance] aldeco2008provenance

[martin2012provenance] martin2012provenance

[#bartolini2015using] bartolini2015using
-->

