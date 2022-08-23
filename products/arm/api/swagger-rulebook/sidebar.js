module.exports = [{"type":"category","label":"BusinessFunction","link":{"type":"doc","id":"arm/swagger-rulebook/business-function"},"items":[{"type":"doc","id":"arm/swagger-rulebook/create-function","label":"Creates new business function.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-function","label":"Updates existing business function.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete-function","label":"Deletes business function.","className":"api-method delete"}]},{"type":"category","label":"MitigatingControls","link":{"type":"doc","id":"arm/swagger-rulebook/mitigating-controls"},"items":[{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-controls","label":"Gets a collection of available mitigating controls.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/add-mitigating-control","label":"Adds a new mitigating control.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-mitigating-control","label":"Updates an existing mitigating control.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-controls-bulk","label":"Mitigating Controls Bulk search.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-controls-by-account-id","label":"Gets a collection of available mitigating controls by AccountId.  For service client communication","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-controls-details-by-account-id","label":"Gets a collection of available mitigating controls details by AccountId.  For service client communication","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-control-details","label":"Gets a mitigating control.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/delete-mitigating-control","label":"Deletes a mitigating control.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/save-mitigating-rules","label":"Saves mitigating rules for specified mitigating control.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/add-mitigating-rules","label":"Adds new mitigating rules for the specified mitigating control.  It adds all or some of the rules depending on whether the rules are already mapped to the control.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete-mitigating-rule","label":"Deletes specified rule mitigating.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/save-rule-mitigation-entities","label":"Saves rule mitigation entities for specified rule mitigation.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/add-rule-mitigation-entities","label":"Adds new rule mitigation entities for the specified rule mitigation.  It adds all or some of the entities depending on whether the entities  are already mapped to the rule mitigation.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/get-mitigating-controls-for-rule","label":"Gets a collection of available mitigating controls for a particular rule and account.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rules-to-mitigating-controls-mapping","label":"Gets mapping for rules and mitigating controls for specified account.","className":"api-method get"}]},{"type":"category","label":"MultiSystemMitigations","link":{"type":"doc","id":"arm/swagger-rulebook/multi-system-mitigations"},"items":[{"type":"doc","id":"arm/swagger-rulebook/get-mitigations","label":"Gets a collection of available mitigations.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-multi-system-mitigation","label":"Gets a multisystem mitigation.  /// <param name=\"mitigationId\">Id of a multisystem Mitigation.</param>","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/delete-mitigating-rule","label":"Deletes specified rule mitigating.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/update-mitigation","label":"Updates an existing mitigating control.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/add-mitigation","label":"Adds a new MultiSystem Mitigation","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-risks","label":"Gets risks for a rulebook.","className":"api-method get"}]},{"type":"category","label":"MultiSystemRulebook","link":{"type":"doc","id":"arm/swagger-rulebook/multi-system-rulebook"},"items":[{"type":"doc","id":"arm/swagger-rulebook/get-rulebooks","label":"Gets a list of rulebooks for specified customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-model","label":"Gets a rulebook.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/update-rulebook","label":"Updates a rulebook.","className":"api-method put"},{"type":"doc","id":"arm/swagger-rulebook/create-rulebook","label":"Creates a rulebook.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/delete-rulebook","label":"Responsible for deleting a rulebook.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/queue-change-log","label":"Runs job on the background to collect all logs related to specified job item of \"Rulebook Change Log\" type.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/get-all-rulebook-systems","label":"Responsible for returning all rulebook systems, based on the supplied rulebookId.  This includes all systems from rulebook.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-systems","label":"Responsible for returning all rulebook systems, based on the supplied rulebookId and erpSystemType.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-risks","label":"Responsible for returning all risks, based on the supplied rulebookId.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-business-functions","label":"Responsible for returning all business functions, based on the supplied rulebookId.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebook-permissions","label":"Responsible for returning all rulebook permissions, based on the supplied rulebookId and erpSystemType.","className":"api-method get"}]},{"type":"category","label":"Portability","link":{"type":"doc","id":"arm/swagger-rulebook/portability"},"items":[{"type":"doc","id":"arm/swagger-rulebook/import-rulebook","label":"Importing rulebook file","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/export-rulebook","label":"Exports specified rulebook by its identifier.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/download-template-file","label":"Downloads blank multi-system rulebook file.","className":"api-method get"}]},{"type":"category","label":"Rule","link":{"type":"doc","id":"arm/swagger-rulebook/rule"},"items":[{"type":"doc","id":"arm/swagger-rulebook/create-rule","label":"Creates new rule.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-rule","label":"Updates the existing rule.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete","label":"Removes specified rule.","className":"api-method delete"}]},{"type":"category","label":"Rulebook","link":{"type":"doc","id":"arm/swagger-rulebook/rulebook"},"items":[{"type":"doc","id":"arm/swagger-rulebook/get-rulebooks","label":"Gets the rulebook list for current account.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/create-rulebook","label":"Creates new rulebook.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-rulebook","label":"Updates rulebook.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete-rulebook","label":"Deletes specified rulebook which should be related to user's selected account.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/delete-rulebooks","label":"Deletes specified rulebooks which should be related to user's selected account.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/add-rule","label":"Adds rule to the rulebook.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/remove-rule","label":"Removes rule from the rulebook.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebooks","label":"Gets the rulebook list for the specified account.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rulebooks","label":"Gets the rulebook list for the specified rulebooks' ids.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/logged-in-account-has-rulebook-for-provisioning","label":"Gets a value indicating whether the selected account for the logged-in user  has at least one rulebook marked for provisioning.","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/import-em-rulebook-file","label":"Imports Access Risk Management Rulebook file.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/import-grc-rulebook-file","label":"Imports SAP GRC Rulebook file.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/get-em-import-template","label":"Returns EM Import rulebook template file","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-grc-import-instructions","label":"Returns GRC Import rulebook instructions file","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/export-rulebooks","label":"Creates and runs job for exporting specified rulebooks","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/queue-change-log","label":"Runs job on the background to collect all logs related to specified job item of \"Rulebook Change Log\" type.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/get-risk-mappings","label":"Returns list of existing Rulebook Risk Mappings","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/update-risk-mappings","label":"Updates risk mappings of account","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/create-rulebooks-from-template","label":"Creates rulebooks and related data for specified account from template.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/delete-all-rulebook-data","label":"Removes all rulebooks and related data from specified account.","className":"api-method delete"}]},{"type":"category","label":"RulebookDasboard","link":{"type":"doc","id":"arm/swagger-rulebook/rulebook-dasboard"},"items":[{"type":"doc","id":"arm/swagger-rulebook/get-rules","label":"GetRules","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-rules-business-functions","label":"GetRulesBusinessFunctions","className":"api-method get"},{"type":"doc","id":"arm/swagger-rulebook/get-business-function-t-codes","label":"GetBusinessFunctionTCodes","className":"api-method get"}]},{"type":"category","label":"RulebookParameter","link":{"type":"doc","id":"arm/swagger-rulebook/rulebook-parameter"},"items":[{"type":"doc","id":"arm/swagger-rulebook/create-parameter","label":"Creates new rulebook parameter.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-parameter","label":"Updates existing rulebook parameter.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete-parameter","label":"Deletes specified rulebook parameter.","className":"api-method delete"}]},{"type":"category","label":"RulebookParameterDetails","link":{"type":"doc","id":"arm/swagger-rulebook/rulebook-parameter-details"},"items":[{"type":"doc","id":"arm/swagger-rulebook/create-detail","label":"Creates new detail for specified parameter.","className":"api-method post"},{"type":"doc","id":"arm/swagger-rulebook/update-detail","label":"Updates existing detail of specified parameter.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-rulebook/delete-detail","label":"Deletes specified detail.","className":"api-method delete"}]}];