<link href="/css/styles.css" rel="stylesheet" />
<style>
    #gdpr-concepts table th:first-of-type {
        width: 20%;
    }
    #gdpr-concepts table th:nth-of-type(2) {
        width: 40%;
    }
    #gdpr-concepts table th:nth-of-type(3) {
        width: 40%;
    }
</style>

# GDPR Data Provenance Model

## GDPR Background

In this page, we introduce the GDPR Data Provenance Model proposed by Ujcich, Bates, and Sanders. The paper that they define such model was published in July 2018, in the 7th International Provenance and Annotation Workshop (IPAW). The authors start by identifying GDPR concepts. They present six rights they identify in the GPDR sections with provenance is applicable. They also identify one obligation, in which controllers must obey to get compliance with GDPR. We take those GDPR concepts of rights and obligations into <a href="#gdpr-concepts">Table 1</a>.

<div id="gdpr-concepts" class="table" >
    <p class="caption">
        Table 1: GDPR Concepts of Rights and Obligations as Applicable to Provenance, in Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
    <table>
        <tr>
            <th>Concept</th>
            <th>Explanation</th>
            <th>Provenance Applicability</th>
        </tr>
        <tr>
            <td>
                Right to Consent <br/> [1, Arts. 6-8]
            </td>
            <td>
                Controllers and processors can lawfully process personal data when subjects have given consent "for one or more specific purposes."
            </td>
            <td>
                Provenance can model the personal data for which consent has been given, the purposes for which consent is lawful, and the extent to which derived data are affected.
            </td>
        </tr>
        <tr>
            <td>
                Right to Withdrawal <br/> [1, Art. 7]
            </td>
            <td>
                Subjects can withdraw consent regarding their personal data’s use going forward but without affecting such data’s past use.
            </td>
            <td>
                Provenance can verify past compliance from before the withdrawal and prevent future use.
            </td>
        </tr>
        <tr>
            <td>
                Right to Explanation <br/> [1, Arts. 12-15]
            </td>
            <td>
                Subjects may ask controllers for explanations of how their data have been processed "using clear and plain language."
            </td>
            <td>
                Provenance-aware systems can naturally provide such explanations by capturing past processing.
            </td>
        </tr>
        <tr>
            <td>
                Right to Removal <br/> [1, Art. 17]
            </td>
            <td>
                Controllers must inform processors if subjects wish to remove or erase their data.
            </td>
            <td>
                Provenance can track when such removal requests were made, what data such requests affect, and to what extent derived data are affected.
            </td>
        </tr>
        <tr>
            <td>
                Right to Portability <br/> [1, Art. 20]
            </td>
            <td>
                Subjects can request their data from controllers or ask controllers to transmit their data to other controllers directly.
            </td>
            <td>
                A common provenance model would allow each controller to link its respective provenance records with others' records.
            </td>
        </tr>
        <tr>
            <td>
                Obligation of Minimality <br/> [1, Art. 25]
            </td>
            <td>
                Controllers must not use any more data than necessary for a process.
            </td>
            <td>
                Provenance can help analyze such data uses with respect to processes.
            </td>
        </tr>
    </table>
</div>

From this GDPR concepts, Ujcich, Bates, and Sanders recycle data-processing components of prior ontologies and define a GDPR data provenance model. Since controllers and processors must demonstrate that possessed-data processing is compliant with those GDPR concepts, thus the authors' model is controller-centric. <a href="#Figure2">Figure 2</a> shows this GDPR data provenance model with its high-level classes and their relations.

<div id="Figure2" class="figure">
    <img src="/img/gpdr_data_provenance_model.svg">
    <p class="caption">
        Figure 2: Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
</div>

Some of those high-level classes include sublcasses either because they are found in prior ontologies or because their concepts are straightforward taken from the GDPR text. We bring the tables <a href="#Table2">2</a>, <a href="#Table3">3</a> and <a href="#Table4">4</a> from the model paper because they include the explaintion for those high-level classes and describe the subclasses.

<div id="Table2" class="table">
    <p class="caption">
        Table 2: GDPR Data Provenance Model <span class="model-class">Agent</span> Classes, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
    <table>
        <tr>
            <th>Class</th>
            <th>Explanation and Subclasses</th>
        </tr>
        <tr>
            <td>
                <span class="model-class">Subject</span>
            </td>
            <td>
                An "identifiable natural person [...] who can be identified, directly or indirectly, in particular by reference to an identifier" [1, Art. 4].
                <br/>
                <i>Subclasses</i>: <span class="model-class">Child</span> subjects who cannot consent on their own and <span class="model-class">Parent</span> subjects who can consent on their behalf [1, Art. 8].
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Controller</span>
            </td>
            <td>
                An organization "which [...] determines the purposes and means of the processing of personal data" [1, Art. 4].
                <br/>
                <i>Subclasses</i>: <span class="model-class">EURecipient</span> controllers (with country subclasses), <span class="model-class">NonEURecipient</span> controllers (with country subclasses). (Data processing or transmission that leaves the EU is subject to additional regulations [1, Arts. 44–50].)
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Processor</span>
            </td>
            <td>
                An organization "which processes personal data on behalf of the controller" [1, Art. 4].
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">SupervisoryAutority</span>
            </td>
            <td>
                "An independent public authority" [1, Arts. 4, 51–59] that can "monitor and enforce the application of" the GDPR and "handle complaints lodged by a data subject [...] and investigate" [1, Art. 57].
            </td>
        </tr>
    </table>
</div>

<div id="Table3" class="table">
    <p class="caption">
        Table 3: GDPR Data Provenance Model <span class="model-class">Activity</span> Classes, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
    <table>
        <tr>
            <th>Class</th>
            <th>Explanation and Subclasses</th>
        </tr>
        <tr>
            <td>
                <span class="model-class">Process</span>
            </td>
            <td>
                "Any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means" [1, Art. 4].
                <br/>
                <i>Subclasses</i>: <span class="model-class">Collect</span>, <span class="model-class">Store</span>, <span class="model-class">Retrieve</span>, <span class="model-class">Combine</span>, <span class="model-class">Disclose</span> to another controller or processor via transmission; <span class="model-class">Erase</span> to destroy personal data to fulfill the right to erasure [1, Art. 17]; <span class="model-class">Profile</span> using "any form of automated processing . . . to evaluate certain personal aspects relating to a natural person" [1, Art. 4]; or <span class="model-class">Pseudonymize</span> by "processing of personal data [so that it] can no longer be attributed to a specific data subject without the use of additional information" [1, Art. 4].
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Justify</span>
            </td>
            <td>
                The rationale that a controller uses in taking some action on personal data, which includes temporal notions of "start" and "end" times.
                <br/>
                <i>Subclasses</i>: a subject’s <span class="model-class">Consent</span> [1, Arts. 6–7]; a controller’s <span class="model-class">Obligation</span>, <span class="model-class">Interest</span>, or <span class="model-class">Authority</span> [1, Art. 6].
            </td>
        </tr>
    </table>
</div>

<div id="Table4" class="table">
    <p class="caption">
        Table 4: GDPR Data Provenance Model <span class="model-class">Entity</span> Classes, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
    <table>
        <tr>
            <th>Class</th>
            <th>Explanation and Subclasses</th>
        </tr>
        <tr>
            <td>
                <span class="model-class">PersonalData</span>
            </td>
            <td>
                An "identifier [of a subject] such as a name, an identification number, location data, an online identifier or to one or more factors specific to the [...] identity of that natural person" [1, Art. 4].
                <i>Subclasses</i>: <span class="model-class">DerivedData</span> simplifies identification of data derived wholly or in part from <span class="model-class">PersonalData</span> objects (by some <span class="model-class">Process</span>).
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Request</span>
            </td>
            <td>
                A request sent from a Subject to a Controller.
                <br/>
                <i>Subclasses</i>: <span class="model-class">ConsentRequest</span> [1, Art. 6], <span class="model-class">WithdrawRequest</span> [1, Art. 7], <span class="model-class">AccessRequest</span> [1, Art. 15], <span class="model-class">CorrectionRequest</span> [1, Art. 16], <span class="model-class">ErasureRequest</span> [1, Art. 17], or a <span class="model-class">RestrictionRequest</span> [1, Art. 18].
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Justification</span>
            </td>
            <td>
                A justification (beyond a subject’s consent) for lawful processing.
                <br/>
                <i>Subclasses</i>: <span class="model-class">LegalObligation</span> "to which the controller is subject," a <span class="model-class">VitalInterest</span> "of the data subject or of another natural person," a "performance of a task" in the <span class="model-class">PublicInterest</span>, an <span class="model-class">OfficialAuthority</span> "vested in the controller," a <span class="model-class">LegitimateInterest</span> "pursued by the controller," or a <span class="model-class">Contract</span> "to which the data subject is party" [1, Art. 6].
            </td>
        </tr>
    </table>
</div>

Along with those classes, authors summarize extensions to several W3C PROV-DM relations by extending their semantic meanings. Table <a href="#Table5">5</a> explain those relations semantics.


<div id="Table5" class="table">
    <p class="caption">
        Table 5: GDPR Data Provenance Model <span class="model-class">Relation</span> Semantics, from Ujcich, B., Bates, A., Sanders, W. A Provenance Model for the European Union General Data Protection Regulation. In IPAW 2018.
    </p>
    <table>
        <tr>
            <th>From</th>
            <th>Relation</th>
            <th>To</th>
            <th>Semantic Meaning</th>
        </tr>
        <tr>
            <td>
                <span class="model-class">Process</span>
            </td>
            <td>
                <span class="model-class">wasInformedBy</span>
            </td>
            <td>
                <span class="model-class">Justify</span>
            </td>
            <td>
                Data processing actions under the GDPR require justification; we can reason about why data exist or why data were removed.
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Justify</span>
            </td>
            <td>
                <span class="model-class">wasDerivedFrom</span>
            </td>
            <td>
                <span class="model-class">PersonalData</span>
            </td>
            <td>
                Data updates, such as corrections submitted by the subject as part of the right to rectification [1, Art. 16].
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">PersonalData</span>
            </td>
            <td>
                <span class="model-class">wasGeneratedBy</span> or
                <br/>
                <span class="model-class">wasInvalidatedBy</span>
            </td>
            <td>
                <span class="model-class">Process</span>
            </td>
            <td>
                Personal data have lifespans. For instance, a subject may request that personal data be deleted. Both generation and invalidation require reasoning, so we use both relations.
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Justify</span>
            </td>
            <td>
                <span class="model-class">used</span> or
                <br/>
                <span class="model-class">wasEndendBy</span>
            </td>
            <td>
                <span class="model-class">Request</span> or
                <br/>
                <span class="model-class">Justification</span>
            </td>
            <td>
                Justifications also have lifespans. For instance, a subject may withdraw his or her consent through a <span class="model-class">WithdrawRequest</span>, which stops further data processing activities from using the <span class="model-class">Justify</span> activity related to the withdraw request.
            </td>
        </tr>
        <tr>
            <td>
                <span class="model-class">Justify</span>
            </td>
            <td>
                <span class="model-class">wasAssociatedWith</span>
            </td>
            <td>
                <span class="model-class">Controller</span>
            </td>
            <td>
                <span class="model-class">Justify</span> activities are associated with controllers since controllers must keep such records for authorities; however, the information used to make the justification legal (i.e., a <span class="model-class">Request</span> or <span class="model-class">Justification</span> entity) can be attributed directly to the source that produced it (e.g., a Subject).
            </td>
        </tr>
    </table>
</div>

## Limitations & Extensions

In this section, we present discussions concerning the difficulties we have found in mapping GDPR concepts in this GDPR data provenance model. While we did that, we found some limitations, for which we introduce extensions. We also consider as a limitation explicitly notions in the GDPR text that this data provenance model lacks in propose as class or subclasses.

Those efforts to propose extensions for the limitations we found, we did a non-systematic read and interpretation of the GDPR text. While that, we tried to map the GDPR concept we identify in terms of this data provenance model. In case where it is not clear how should be this mapping, we introduce an extension.

In summary, we have found eleven limitations in which the GDPR model does not cover some concept. We have classified all limitations and extensions into three types according to their impact on the model: 

The first one are plumbing extensions, which represent the deepest one, because they affect how the GDPR model works and also append new elements (Table <a href="#Table6">6</a> summarizes them). The remaining, porcelain and wallpaper extensions, Tables <a href="#Table7">7</a> and <a href="#Table8">8</a>, respectively, explain them. Both intend to clarify and enrich this GDPR data provenance model by either suggesting new subclasses that represent the semantic meanings of some part of the GDPR text or appending further information detailed in the law.

<div id="Table6" class="table">
    <p class="caption">
        Table 6: Plumbing extensions change the GDPR data provenance model high-level classes or relations by adding new elements or changing their use.
    </p>
    <table>
        <tr>
            <th>GDPR Text</th>
            <th>Limitation</th>
            <th>Extension</th>
        </tr>
        <tr>
            <td>
                "Where personal data relating to a data subject are collected from the data subject, the controller shall provide [...] the fact that the controller intends to transfer personal data to a thirdcountry or international organization [...]." [Council of European Union 2016, point f) of Art. 13(1)].
            </td>
            <td>
                The GDPR model enables subjects to know whether the controller intends to transfer their data; however, the model does not provide a direct relationship between the controllers.
            </td>
            <td>
                i) A new self-relationship (<span class="model-class">wasAttributedTo</span>) for <span class="model-class">Controller</span>; and ii) <span class="model-class">useDiscloseclass</span> to represent this transfer.
            </td>
        </tr>
        <tr>
            <td>
                "The controller shall [...] provide the data subject with [...] the period for which [its] personal data will be stored, or if that is not possible, the criteria used to determine that period" [Council of EuropeanUnion 2016, point a) of Art.13(2)].
            </td>
            <td>
                Although it is possible to represent when a purpose ends,the GDPR model authors’ design patterns explicitly suggest the obtention of that purpose-ending information does not occur at the beginning.
            </td>
            <td>
                When a personal data are obtained, both <span class="model-class">startedAtTime</span> and <span class="model-class">endedAtTime</span> relations should be created with their <span class="model-class">Time</span> annotation, denoting the Valid Time [Ozsoyoglu and Snod-grass 1995], those personal data will be stored.
            </td>
        </tr>
        <tr>
            <td>
                "Where the controller intends to further process [...] for a purpose other than that for which the personal data were collected, the controller shall" reveal to data subject its intentions. [Council of EuropeanUnion 2016, Art. 13(3)].
            </td>
            <td>
                The GDPR model does not inform whether a <span class="model-class">Justify</span> is compatible with another one.
            </td>
            <td>
                i) A new self-relationship (<span class="model-class">wasCompatibleWith</span>) for <span class="model-class">Justify</span>; ii) A new <span class="model-class">PseudonymizedData</span> class, a subclass of <span class="model-class">PersonalData</span>; and iii) that all processes informed by a <span class="model-class">Justify</span> that <span class="model-class">wasCompatibleWith</span> another must only use <span class="model-class">PseudonymizedData</span> [Council of European Union 2016, pointe) of Art. 6(4)].
            </td>
        </tr>
    </table>
</div>

<div id="Table7" class="table">
    <p class="caption">
        Table 7: Porcelain extensions are focused on improving the GDPR data provenance model understanding by providing new subclasses to express specific points of the GDPR articles.
    </p>
    <table>
        <tr>
            <th>Limitation</th>
            <th>Extension</th>
        </tr>
        <tr>
            <td>
                The further processing for archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes are often cited in the text of the law [Council of European Union 2016, Art. 5, 9,14, 17, 21, 89].
            </td>
            <td>
                A new <span class="model-class">ArchivingResearchingStatisticalPurposesJustify</span> class, as sublclass of <span class="model-class">Justify</span>,which represents those purposal.
            </td>
        </tr>
        <tr>
            <td>
                Article 9 lists a set of purposes categories of personal data, which demands special justification to process. [Council of European Union 2016, Art. 9(1)]
            </td>
            <td>
                We suggest the following new classes, all of them subclasses of <span class="model-class">PersonalData</span>: 
                <span class="model-class">RacialEthnicData</span>, 
                <span class="model-class">PoliticalOpinionsData</span>, 
                <span class="model-class">BeliefData</span>, 
                <span class="model-class">MembershipData</span>, 
                <span class="model-class">GeneticData</span>, 
                <span class="model-class">BiometricData</span>, 
                <span class="model-class">HealthData</span>, 
                <span class="model-class">SexLifeData</span>, and 
                <span class="model-class">SexualOrientationData</span>.
            </td>
        </tr>
        <tr>
            <td>
                Points b), d), e), and i) of Article 9 explain situations in which the special categories of personal data must not be prohibited [Council of European Union 2016, Art. 9(2)].
            </td>
            <td>
                We suggest the following new classes: <span class="model-class">EmploymentSecurityObligation</span>, as a subclass of <span class="model-class">LegalObligation</span> (point b));<span class="model-class">CommunityInterest</span> (point b)) and <span class="model-class">PublicHealthInterest</span> (point i)), both subclasses of <span class="model-class">PublicInterest</span>; and <span class="model-class">PublicData</span>, as a subclass of <span class="model-class">PersonalData</span>, and <span class="model-class">Publish</span>, as a subclass of <span class="model-class">Process</span> (point e)).
            </td>
        </tr>
        <tr>
            <td>
                Article 16 lay down rectification processes;however, the GDPR model does not proposea class representing that.
            </td>
            <td>
                A new <span class="model-class">Rectification</span>, as a subclass of <span class="model-class">Process</span>,that represents a processing of rectification.
            </td>
        </tr>
        <tr>
            <td>
                Article 21 defines the right of objection; however, the GDPR model does not propose a class to represent this right.
            </td>
            <td>
                A new class <span class="model-class">ObjectionRequest</span>, as a subclass of <span class="model-class">Request</span>, that represents a subject’s objection.
            </td>
        </tr>
    </table>
</div>

<div id="Table8" class="table">
    <p class="caption">
        Table 8: Plumbing extensions change the GDPR data provenance model high-level classes or relations by adding new elements or changing their use.
    </p>
    <table>
        <tr>
            <th>GDPR Text</th>
            <th>Limitation</th>
            <th>Extension</th>
        </tr>
        <tr>
            <td>
                "The data subject shall have the right to obtain from the controller [...] any available information as to their source." [Council of European Union 2016, point g) of Art. 15(1)].
            </td>
            <td>
                The GDPR model does not present any information about the data source.
            </td>
            <td>
                A new <span class="model-class">SourceExplanation</span> entity, in which a <span class="model-class">PersonalData</span> is associated with it, representing a document that describes the source of this data.
            </td>
        </tr>
        <tr>
            <td>
                "The data subject shall have the right to obtain from the controller [...] the existence of automated decision-making [...] [and] meaningful information about the logic involved [...]." [Council of European Union 2016, point h) of Art. 15(1)]
            </td>
            <td>
                The GDPR model does not present any that different information about the existence of automated decision-making.
            </td>
            <td>
                A new <span class="model-class">AlgorithmExplanation</span> entity, in which an automated <span class="model-class">Process</span> is associated with it, representing a document that describes the logic involved in that process.
            </td>
        </tr>
        <tr>
            <td>
                "Where personal data are transferred [...] the data subject shall have the right to be informed of the appropriate safeguards [...]." [Council of European Union 2016,  Art.15(2)] such as describe Art. 46, 47, and 49, also "the means by which to obtain a copy of them or where they have been made available" [Council of European Union 2016,   point f) of Art.13(1), 14(1)].
            </td>
            <td>
                The GDPR model does not represent any information about the appropriate safeguards of the controller, by concerning their    availability to lawfully transfer of personal data.
            </td>
            <td>
                A new <span class="model-class">EvaluationOfAdequacy</span> entity,  in which a <span class="model-class">Controller</span> is associated with it, representing a document that describes that required information.
            </td>
        </tr>
    </table>
</div>

<!-- ### 2 &mdash; -->
### Provide the data subject with the period for which their data will be stored

Our first concern addresses the period for which each personal data will be stored.Both articles 13 and 14 [Council of European Union 2016, Arts 13, 14] prescribe what further information the controllers must provide to subjects whose personal data are collected. Into those, we found that the GDPR model does not cover the point a), which forces controllers to inform to subjects "the period for which [their] personal data will be stored [...]" [Council of European Union 2016, point a) of Article 12(2)].Currently, the GDPR model represents this period into the <span class="model-class">startedAtTime</span> and <span class="model-class">endedAtTime</span> relations, which connects <span class="model-class">Justify</span> entities to <span class="model-class">Time</span> annotation, thus preserving the timing information of activity compliance. However, as far as we understand it, the text of this provenance model design suggests that those relations should be created either when its <span class="model-class">Justify</span> entity is logically present in the database (i.e., creating <span class="model-class">startedAtTime</span> relation) or when a specific <span class="model-class">Request</span> is made (i.e., creating <span class="model-class">endedAtTime</span> relation).This method to capture timing information is known in the literature by <b>Transaction Time</b> [Ozsoyoglu and Snodgrass 1995]. An example that enforces this understanding isthe first design pattern introduced by Ujcich, Bates, and Sanders, which describes the use of this provenance model when a user "registers with and provides [its] personaldata [...], along with [its] consent" [Ujcich et al. 2018, p. 5]. We notice that the GDPR model creates only <span class="model-class">startedAtTime</span> relation, at this moment.

In order to represent the period that personal data will be stored, we understand that it is enough to create both <span class="model-class">startedAtTime</span> and <span class="model-class">endedAtTime</span> relations, with their <span class="model-class">Time</span> annotation denoting the <b>Valid Time</b> [Ozsoyoglu and Snodgrass 1995]. In a word, at the time the personal data are collected, along with its consents, controllers must inform to GDPR data provenance model of the real-time period between this data could be stored. In terms of this provenance model, it means the creation of both <span class="model-class">startedAtTime</span> and <span class="model-class">endedAtTime</span> relations, at the time of data collection.

<!-- ### 3 &mdash; -->
### Reveal to data subject further processes

Another limitation we have found in this model is concerning to the representation of the personal data use for a purpose other than the one for which they were collected.Article 5 establishes that "personal data shall be [...] collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes". However, Article 5 lays down that some types of "further processing[...] shall, in accordance with Article 89(1), not be considered to be incompatible withthe initial purposes" [Council of European Union 2016, point b) of Art. 5(1)]. Therefore, we conclude that some types of treatments can be processed, regardless of they holding a specific justification for them, whereas their justification is compatible with another valid one. In addition, the subject should be aware "prior to that further processing with information on that other purpose and with any further relevant information [...]" [Council of European Union 2016, Art. 13(3)]. The problem is that since Article 89 requires pseudonymization [Council of European Union 2016, Art. 4(5)], it is impossible to attribute who is the owner of data, whose data will suffer those further processing. In conclusion, in order to represent the compatibility between two justifications, we propose the auto-relation <span class="model-class">wasCompatibleWith</span> for <span class="model-class">Justify</span>, in which Article 6(4) prescribes the rules for valid compatibility. Secondly, in order to represent those further processing, which they are subject to Article 89, we also propose the <span class="model-class">PseudonymizedData</span> entity, which can not be attributed to a <span class="model-class">Subject</span>, and it is generated by all <span class="model-class">Pseudonymize</span> processes, which used data from any subject.