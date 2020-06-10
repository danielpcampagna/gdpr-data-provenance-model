<link href="/css/styles.css" rel="stylesheet" />

# Design Patterns

In this section, we explain _who_ to use the GDPR data provenance model.
We do it by presenting a bunch of design patterns that, such as the authors of this model do, are based on the examples from prior works. That example involves collecting personal data for a retail shop. These following design patterns describe such provenance model representing a customer, Alice, interacting with that retail shop by registering, making purchases, and subscribing to marketing information.

The design patterns 1-3 are proposed by Ujcich, Bates, Sanders. The next ones, we have introduced together with the analysis of the limitations and extensions the original model present (see more [here](/gdpr-data-provenance-model/#limitations-extensions)).

## 1. Data Collection and Consent by a Subject

<div id="Figure1" class="figure">
    <img src="/img/design-pattern01-original_paper.svg">
    <p class="caption">
        Figure 1: Alice registers her personal data with a retail shop and consents to use of her data for storage, purchases, and marketing. Note that Alice does not consent to use of her credit card number for being shared for marketing purposes, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
</div>

This current design patter assumes that Alice, at time &tau;, registers her personal data to the retail shop, along with her consent. Note in <a href="Fugure1">Figure 1</a> that the provenace graph represents that register as a <span class="model-class">Collect</span> activity. Since GDPR lays down that a lawful processing must have a given specific consent for that purpose, such graph represents that purpose by mapping <span class="model-class">Collect</span> activity to <span class="model-class">Consent</span> activity with the <span class="model-class">wasInformedBy</span> relation and that <span class="model-class">Consent</span> activity to <span class="model-class">ConsentRequest</span> entities with the <span class="model-class">used</span> relations. Also note in <a href="Fugure1">Figure 1</a> that Alice does not consent to use her credit card information for marketing purposes, bu she does allow it to be used for making purchases or for being stored by the retail shop (_e.g._, to simplify future purchases).

## 2. Data Transfers Among Controllers and Processors

<div id="Figure2" class="figure">
    <img src="/img/design-pattern02-original_paper.svg">
    <p class="caption">
        Figure 2: The retail shop uses Alice’s data for marketing purposes by employing a third-party marketer. The retail shop uses Alice’s consent to receive marketing in allowing the processor to receive Alice’s name and address. (For simplicity, portions of the provenance graph from Figure 2 that are not relevant are not shown.), from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
</div>

This second design pattern represents the case in which the retail shop, at time &tau; + 1, transfers some of Alice's data to a third-party that provide marketing services. The provenance graph, which <a href="Figure2">Figure 2</a> shows, represents that transfering by using <span class="model-class">Disclose</span> activity. Note that, since Alice does not consent to use of her credit card number for it purposes, this personal data is not shared for marketing.

## 3. Withdrawal by a Subject

<div id="Figure3" class="figure">
    <img src="/img/design-pattern03-original_paper.svg">
    <p class="caption">
        Figure 3: Alice no longer wishes to receive marketing information, so she withdraws her consent for use of her personal data for marketing purposes. Future marketing activities that attempt to use the “Consent to Marketing” as justification will be noncompliant, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
</div>

This design pattern describe the case in which Alice informs to retail shop, at time &tau; + 2, she no longer wish to receive any further marketing. This case should be represented by connecting <span class="model-class">WithdrawRequest</span> entity to the Consent to Marketing activity, through <span class="model-class">wasEndedBy</span> relation. Since the provenance model persists that connection, future <span class="model-class">Disclose</span> processes, which use this <span class="model-class">Justify</span> activity, after time &tau; + 2, will not occur. <a href="Figure3">Figure 3</a> shows this case.

## 4. Transfer Data to an International Controller

<div id="Figure4" class="figure">
    <img src="/img/design-pattern01.svg">
    <p class="caption">
        Figure 4: Holding Alice’s consent, the retail shop intends to transfer Alice’s data to an international retail shop. Note that Alice does not consent to use of her credit card number for being shared for a third party.
    </p>
</div>

After time &tau;, the retail shop intends to transfer Alice's data to an international retail controller. Notice that now there is an association between controllers, which make it easier to identify the existence of the relation between those, through <span class="model-class">wasAssociatedWith</span>. The <a href="#Figure5">Figure 5</a> shows the provenance graph generated from those activities.

## 5. Further Process for a Purpose Other

<div id="Figure5" class="figure">
    <img src="/img/design-pattern02.svg">
    <p class="caption">
        Figure 5: At the time &tau; + 1, the retail shop intends to calculate the number of addresses in the same city by using personal data. Note that the subject did not consent for that purpose when its data were collected. Thus, that calculation uses pseudonymized data, and its purpose was considering compatible with Alice’s consent for storing data. Take note also that, before time &tau; + &delta;, Alice can beinformed the period in which her data will be stored.
    </p>
</div>

At the time &tau;, Alice registers with and provides her data to the retail shop, along with her consent. At the same time, Alice informs her wish that her data must be erased at the time &tau; + &delta;.

At the time &tau; + 1, the retail shop intends to calculate the number of customers that share the same city by using the address of all customers for statistical purposes. Thus, the retail shop uses customers' pseudonymized-address. We represent those pseudonymized addresses in the provenance graph through the <span class="model-class">PseudonymizedData</span> entity, as shown in <a href="Figure5">Figure 5</a>. There must be only a single pseudonymized-address entity (regardless of the number of registered customers), which represents all customers' pseudonymized-address generated by <span class="model-class">Pseudonymize</span> processes. This design pattern introduces ambiguity into relationships between data and data owners while enabling the subject to be aware of further processing. The lastest design pattern presented in this example is the compatibility relationship between two different purposes. <a href="model-class">Figure 5</a> shows that the purpose of calculating the number of customers that share the same city <span class="model-class">wasCompatibleWith</span> Alice's consent to store her data.

## Using new the extensions

