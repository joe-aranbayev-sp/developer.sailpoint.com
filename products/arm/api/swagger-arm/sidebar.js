module.exports = [{"type":"category","label":"AccessContext","link":{"type":"doc","id":"arm/swagger-arm/access-context"},"items":[{"type":"doc","id":"arm/swagger-arm/get-available-columns","label":"Gets all available column names for access contexts.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-contexts-by-customer","label":"Gets contexts for specified customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-all-contexts-by-customer","label":"Gets all contexts for specified customer. Includes deleted contexts.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-contexts-by-user","label":"Gets contexts for specified user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-context-by-id","label":"Gets context by ID.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/delete-context","label":"Deletes access context.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/create-context","label":"Creates access context using specified metadata.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/update-context","label":"Updates access context using specified metadata.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-arm/are-access-contexts-enabled","label":"Determines if access contexts are enabled for specified customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/enable-access-contexts","label":"Enables access contexts for the customer.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/disable-access-contexts","label":"Disables access contexts for the customer.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/assign-user","label":"Assigns user to the access context.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/unassign-user","label":"Unassigns user from the access context.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/assign-access-context-list-for-user","label":"Assigns user to the access context.","className":"api-method post"}]},{"type":"category","label":"AccessReview","link":{"type":"doc","id":"arm/swagger-arm/access-review"},"items":[{"type":"doc","id":"arm/swagger-arm/get-access-reviews","label":"Returns Access Reviews for a given erp system. OData endpoint.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-reviewer-access-reviews","label":"Returns Access Reviews for a current user as a reviewer. OData endpoint.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-details","label":"Returns Access Review administrator details.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-reviewer-review-details","label":"Returns Access Review details for a current user as a reviewer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-completed-and-overdue-reviews","label":"Returns Completed and Overdue Access Reviews.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/create-review","label":"Creates a new access review.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/update-review","label":"Updates an access review.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-arm/submit-review","label":"Submits the specified access review.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-reviewer-statuses","label":"Returns Reviewer Statuses for a given review.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-user-to-role","label":"Returns the Access Review items for a given review of type 'UserToRole'.  Supports OData.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-role-to-tcode","label":"Returns the Access Review items for a given review of type 'RoleToTcode'.  Supports OData.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-t-code-risks","label":"Returns Role To TCode Review item rules.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-user-to-risk","label":"Returns the Access Review items for a given review of type 'UserToRisk'.  Supports OData.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risk-roles","label":"Gets roles related to specified UserToRisk review item.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-risk-to-mitigating-control","label":"Returns the Access Review items for a given review of type 'RiskToMitigatingControl'.  Supports OData.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-rulebook-details","label":"Returns the Access Review items for a given review of type 'RulebookDetails'.  Supports OData.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-review-items-columns","label":"Gets the column names of the available access review items  that are needed for the presentation layer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-rulebook-details-business-functions","label":"Returns Rulebook Details item Business Functions.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-rulebook-details-mitigating-controls","label":"Returns Rulebook Details item Mitigating Controls.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-role-rules","label":"Returns User to Role Review item rules.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-role-rule-business-functions","label":"Returns User to Role Review Rule Business Functions.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-role-t-codes","label":"Returns User to Role Review item TCodes.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-roles-to-remove","label":"Returns User Role review items to be removed. OData endpoint.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/decide-review","label":"Approves, rejects, or resets review item with comment.  Supports group approvals for User to Role and User to Risk reviews.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/delegate-review","label":"Delegates Access Review to the New Reviewer with the specified comment.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/delegate-review-items","label":"Delegates Access Review Items to the New Reviewer with the specified comment.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-sap-users","label":"Gets users for specified SAP system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-sap-users-template","label":"Gets HR information template for specified SAP system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/import-sap-users","label":"Import SAP users to ERP system from file.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/save-reviewer-comment","label":"Saves the reviewer comment.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/delete-review","label":"Deletes a review.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/send-reviewer-initial-email","label":"Sends the reviewer initial email.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/schedule-action-log","label":"Schedules a Review Action Log","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/schedule-report","label":"Schedules a Review Report","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/schedule-roles-removal","label":"Schedules Roles Removal","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/download-roles-removal","label":"Download Roles Removal Report","className":"api-method get"}]},{"type":"category","label":"ChangeLogs","link":{"type":"doc","id":"arm/swagger-arm/change-logs"},"items":[{"type":"doc","id":"arm/swagger-arm/upload-change-logs","label":"Uploads change logs for specified job to storage.","className":"api-method post"}]},{"type":"category","label":"CompatibilityMatrix","link":{"type":"doc","id":"arm/swagger-arm/compatibility-matrix"},"items":[{"type":"doc","id":"arm/swagger-arm/get-compatibility-matrix-by-system-type","label":"Get the list of compatibilities for a specific system Type","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/delete-compatibility-matrix-by-system-type","label":"Delete the compatibilities for a specific erp system type","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/create-compatibility-matrix-by-system-type","label":"Save the compatibilities for a specific erp system type","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/update-compatibility-matrix-by-system-type","label":"Update the compatibilities for a specific erp system type","className":"api-method patch"},{"type":"doc","id":"arm/swagger-arm/get-compatibility-matrix-by-system-id","label":"Get the list of compatibilities for a specific erp system","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/delete-compatibility-matrix-by-system-id","label":"Delete the compatibilities for a specific erp system","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/create-compatibility-matrix-by-system","label":"Save the compatibilities for a specific erp system","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/update-compatibility-matrix-by-system","label":"Update the compatibilities for a specific erp system","className":"api-method patch"},{"type":"doc","id":"arm/swagger-arm/get-compatibility-matrix-for-all-systems","label":"Get the entire list of system that a user has for a specific account and its compatibilities","className":"api-method get"}]},{"type":"category","label":"CustomerSettings","link":{"type":"doc","id":"arm/swagger-arm/customer-settings"},"items":[{"type":"doc","id":"arm/swagger-arm/get-idle-timeout","label":"Gets an Idle timeout value for a customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/set-idle-timeout","label":"Sets an Idle timeout value for a customer.","className":"api-method post"}]},{"type":"category","label":"Dashboard","link":{"type":"doc","id":"arm/swagger-arm/dashboard"},"items":[{"type":"doc","id":"arm/swagger-arm/get-user-risks-by-rating","label":"This endpoint returns user risks by rating.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risks-by-business-process","label":"This endpoint returns user risks by business process.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risks-history","label":"This endpoint returns the user risk history.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risksby-highest-unmitigated-executed","label":"This endpoint returns the count of users with risks by highest unmitigated executed.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-risks-count","label":"This endpoint returns the count of roles with risks.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-status","label":"This endpoint returns the status of the analysis.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-risk-snapshots","label":"Gets the list of risk snapshots for selected erp system.","className":"api-method get"}]},{"type":"category","label":"DataStorage","link":{"type":"doc","id":"arm/swagger-arm/data-storage"},"items":[{"type":"doc","id":"arm/swagger-arm/download-file","label":"Returns a file using the metadata passed in to identify the location and destination","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/download-file","label":"Returns a file by its External Reference.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/download-file-for-erp-system","label":"Returns a file by its External Reference for a specified ERP System.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/delete-file","label":"Removes a file using the metadata passed in to identify the location and destination","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/get-files","label":"Gets a list of files of specified type for specified ERP SAM system.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/download-distribution-file","label":"Downloads a distribution file from cloud storage with the specified key.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-file-metadata-for-job","label":"Get file info for a specific job.","className":"api-method get"}]},{"type":"category","label":"EmergencyAccessManagement","link":{"type":"doc","id":"arm/swagger-arm/emergency-access-management"},"items":[{"type":"doc","id":"arm/swagger-arm/update-request","label":"Updates existing EAM request.","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/add-new-request","label":"Creates a new EAM request.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-request","label":"Gets a particular EAM request.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/retract","label":"Retracts specified EAM request.","className":"menu__list-item--deprecated api-method delete"},{"type":"doc","id":"arm/swagger-arm/get-request-state","label":"Get the state of a particular EAM request.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-comments","label":"Gets the comments of an EAM Request.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/add-comment","label":"Adds a comment on an EAM Request.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-comment-attachment","label":"Gets the attachment of an EAM Request Comment.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-comment-attachment-content","label":"Gets the attachment content of an EAM Request Comment.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/execute-action","label":"Executes the specified action for the specified EAM request.","className":"menu__list-item--deprecated api-method patch"},{"type":"doc","id":"arm/swagger-arm/execute-eam-action","label":"Executes the specified action for the specified EAM request.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-arm/download-request-report","label":"Downloads report related to the specified EAM request.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-profiles","label":"Gets all available EAM profiles for the specified system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-current-user-profiles","label":"Gets all available EAM profiles for the specified system and logged-in user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-profiles","label":"Gets all available EAM profiles for the specified system and user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/export-profile-users","label":"Creates a CSV file with a report of the profile users for the specified system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-profile","label":"Gets an existing EAM profile.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/delete-profile","label":"Deletes an existing EAM profile.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/update-profile","label":"Updates an existing EAM profile.","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/add-profile","label":"Creates a new EAM profile.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-profile-change-logs","label":"Gets change logs for an existing EAM profile.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-profile-change-logs-file-stream","label":"Gets change logs (in a csv) for an existing EAM profile.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-dashboard-data","label":"Gets the user's EAM dashboard data.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-eam-requests-for-utilization-attachment","label":"Gets the EAM dashboard data for utilization auto-attach and manual-upload.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-eam-requests-ids-for-utilization-attachment","label":"Gets EAM Requests Candidates Ids for utilization auto-attach and manual-upload.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-history-data","label":"Gets the user's EAM history data.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-profile-requests-per-month","label":"Gets an aggregated report of profile requests by month.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-profile-requests-per-user","label":"Gets an aggregated report of profile requests by user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-deltas","label":"Gets deltas of specified ERP system for specified dates range and reviewer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/are-deltas-available","label":"Determines if deltas available on specified ERP system for specified dates range and reviewer (reviewer inferred from the session).","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/are-deltas-available-for-reviewer","label":"Determines if deltas available on specified ERP system for specified dates range and a reviewer (specified on the route).","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/are-deltas-available-in-system","label":"Determines if deltas available on specified ERP system for specified dates range.  Available only for service users.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/execute-utilization-auto-attachment","label":"Starts the execution of a utilization auto attachment for the specified request.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/execute-utilization-manual-upload","label":"Executes the attachment of a manually uploaded utilization file.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/send-admin-awaiting-review-reminder","label":"Sends an EAM Admin Awaiting Review reminder email for provided user and customer.","className":"api-method post"}]},{"type":"category","label":"ErpSystemBlacklists","link":{"type":"doc","id":"arm/swagger-arm/erp-system-blacklists"},"items":[{"type":"doc","id":"arm/swagger-arm/get-erp-system-blacklist-types","label":"Returns list of ERP System Blacklist Types.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/save-erp-system-blacklist-items","label":"Creates ERP System Blacklist Items.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-erp-system-blacklist-items-for-erp-system","label":"Returns list of Blacklist Items of an Erp System based on erpSystemId.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/bulk-delete-erp-system-blacklist-items","label":"Delete ERP System Blacklist Items based on ids.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-erp-system-blacklist-items-for-erp-system-and-type","label":"Returns list of Blacklist Items of an ERP System based on erpSystemId and ErpSystemBlacklistType.","className":"api-method get"}]},{"type":"category","label":"ErpSystemData","link":{"type":"doc","id":"arm/swagger-arm/erp-system-data"},"items":[{"type":"doc","id":"arm/swagger-arm/get-users","label":"Gets users for specified ERP system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/is-user-active","label":"Determines if user is active.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-roles","label":"Gets ERP roles for specified ERP system.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-user-roles","label":"Gets user-ro-role relationships for specified ERP system.","className":"api-method post"}]},{"type":"category","label":"ErpSystems","link":{"type":"doc","id":"arm/swagger-arm/erp-systems"},"items":[{"type":"doc","id":"arm/swagger-arm/get-erp-systems","label":"Gets the list of available ERP systems for the authenticated user's account.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-erp-systems-with-connection-info","label":"Gets the list of available ERP systems for the authenticated user's account with option to include connection info.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-erp-system","label":"Gets an ERP system by Id.  Doesn't return sensitive information like passwords.","className":"api-method get"}]},{"type":"category","label":"FilteredDashboard","link":{"type":"doc","id":"arm/swagger-arm/filtered-dashboard"},"items":[{"type":"doc","id":"arm/swagger-arm/get-user-risks-by-rating","label":"Returns a list of user risks grouped by rating.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risks-by-process","label":"Returns a list of user risks grouped by business process.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-risks-history","label":"Returns the history of user risks.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-highest-user-risks","label":"Returns the highest unmitigated user risks.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-status","label":"Returns the status of analysis for users and roles.","className":"api-method get"}]},{"type":"category","label":"ImportResults","link":{"type":"doc","id":"arm/swagger-arm/import-results"},"items":[{"type":"doc","id":"arm/swagger-arm/get-import-results","label":"Gets the import file results for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/upload-file","label":"Uploads import result file to storage.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/upload-file","label":"Uploads import result file to storage.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/set-job-id","label":"Sets JobId property for import result record with specified identifier.","className":"api-method patch"}]},{"type":"category","label":"Lookups","link":{"type":"doc","id":"arm/swagger-arm/lookups"},"items":[{"type":"doc","id":"arm/swagger-arm/get-erp-product-versions","label":"Gets a list of erp product versions, based on the supplied parameters.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-supported-date-formats","label":"Gets a list of supported date formats, based on the supplied parameters.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-supported-languages","label":"Gets a list of supported languages, based on the supplied parameters.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-supported-timezones","label":"Gets a list of supported time zones, based on the supplied parameters.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-assigned-accounts","label":"Gets a list of accounts assigned to user, based on the supplied parameters.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-eam-request-options","label":"Gets the configuration options for EAM Requests","className":"api-method get"}]},{"type":"category","label":"RealTimeReports","link":{"type":"doc","id":"arm/swagger-arm/real-time-reports"},"items":[{"type":"doc","id":"arm/swagger-arm/get-real-time-what-if-for-single-user","label":"Fetch Whatif data for a single user in realtime","className":"api-method post"}]},{"type":"category","label":"ReportLayouts","link":{"type":"doc","id":"arm/swagger-arm/report-layouts"},"items":[{"type":"doc","id":"arm/swagger-arm/get-report-layout","label":"Gets the user-saved or default report layout for the specified report type.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/set-report-layout","label":"Sets the user report layout for the specified report type.","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/get-multi-system-report-layout","label":"Returns the user-saved or default report layout for the specified ErpSystem and report type.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/set-multi-system-report-layout","label":"Sets the user report layout for the specified ErpSystem and report type.","className":"api-method put"}]},{"type":"category","label":"Reports","link":{"type":"doc","id":"arm/swagger-arm/reports"},"items":[{"type":"doc","id":"arm/swagger-arm/get-user-summary","label":"Gets the user summary dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-risk-summary","label":"Gets the risk summary dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-risk-summary","label":"Gets the risk summary dataset for the specified job id.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/get-risk-level-details","label":"Gets the risk level details dataset for the specified job id.  This endpoint will receive the filterable parameters from the  odata formatted url.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-conflict-matrix","label":"Gets the User TCode level risk details dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-business-function-hits","label":"Gets the business function hits dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-business-function-hits","label":"Gets the business function hits dataset for the specified job id.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-recommendations","label":"Gets the User Recommendations dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-summary","label":"Gets the Role Summary dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-execution-summary-monthly","label":"Gets the Utilization Summary Monthly dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-execution-summary","label":"Gets the Utilization Summary dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-recommendations","label":"Gets the Role Remediations dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-security-roles-reports","label":"Gets the Role Member TCode Executions dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-conflict-matrix","label":"Gets the Role TCode Level risk details dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-riskiest-role-summary","label":"Gets the Roles Ranked By Risk dataset for the specified job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-daily-change-document-summary","label":"Gets the daily change document summary for the specified job.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-risk-descriptions","label":"Gets the risk descriptions for the specified job.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-business-function-descriptions","label":"Gets the business function descriptions for the specified job.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-mitigating-controls","label":"Gets the mitigating controls for the specified job.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/export-report","label":"Exports the report.  May be used as an OData endpoint.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/get-role-details","label":"Gets a collection of Role Details, based on the supplied job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-inherent-risk-details","label":"Gets a collection of Role Inherent Risk Details, based on the supplied job id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-user-permission-level-details","label":"Gets a collection of user permision Details","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-authorization-hits","label":"Gets the role authorization hits, based on the supplied job id.","className":"api-method get"}]},{"type":"category","label":"SapSystem","link":{"type":"doc","id":"arm/swagger-arm/sap-system"},"items":[{"type":"doc","id":"arm/swagger-arm/get-role-info","label":"Returns sap system roles","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/get-roles","label":"Returns roles for specified SAP system.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/get-role-locations","label":"Returns role locations for selected customer id","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/add-role-location","label":"Create a role location for selected customer id","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/update-role-location","label":"Update a role location for selected customer id","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/delete-role-location","label":"Update a role location for selected customer id","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/update-role","label":"Update sap system role","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/export-roles","label":"Exports the specified ERP system's roles in a .xlsx file.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/import-roles","label":"Imports an Excel document containing SAP roles.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/refresh-roles","label":"Schedules a LoadSapInfoJob to refresh the SAP roles  for the latest security extract.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"arm/swagger-arm/update","label":"Updates an existing SAP system based on the specified parameters.  Returns the object model of the updated system.","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/create","label":"Creates a new SAP system based on the specified parameters.  Returns the object model of the newly created system.","className":"api-method post"}]},{"type":"category","label":"SecurityExtract","link":{"type":"doc","id":"arm/swagger-arm/security-extract"},"items":[{"type":"doc","id":"arm/swagger-arm/upload-extract","label":"Uploads new security extract.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/refresh-extract-info","label":"Refreshes extract info for specified ERP system.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/schedule-load-extract-info-job","label":"Schedules new LoadExtractInfo job.","className":"api-method post"}]},{"type":"category","label":"Service","link":{"type":"doc","id":"arm/swagger-arm/service"},"items":[{"type":"doc","id":"arm/swagger-arm/get-erp-system","label":"Gets ERP system by Id. Returns all ERP system related information, including sensitive.","className":"api-method get"}]},{"type":"category","label":"SuccessFactorsSystem","link":{"type":"doc","id":"arm/swagger-arm/success-factors-system"},"items":[{"type":"doc","id":"arm/swagger-arm/update-system","label":"Updates an existing SF ERP system.","className":"api-method put"},{"type":"doc","id":"arm/swagger-arm/create-new-system","label":"Creates a new SF ERP system. Returns the unique identifier of the new system.","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/delete-system","label":"Deletes a SF ERP system.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-arm/validate-connection-information","label":"Validates connection parameters","className":"api-method post"},{"type":"doc","id":"arm/swagger-arm/validate-connection-information","label":"Validates saved connection parameters by ERP System ID","className":"api-method get"}]},{"type":"category","label":"UserCustomerSettings","link":{"type":"doc","id":"arm/swagger-arm/user-customer-settings"},"items":[{"type":"doc","id":"arm/swagger-arm/get-eam-admin-review-reminder-email-settings","label":"Returns email settings for EAM Admin Awaiting Review Reminders.","className":"api-method get"},{"type":"doc","id":"arm/swagger-arm/update-admin-review-reminder-email-settings","label":"Updates email settings for EAM Admin Awaiting Review Reminders.","className":"api-method post"}]},{"type":"category","label":"UserManagement","link":{"type":"doc","id":"arm/swagger-arm/user-management"},"items":[{"type":"doc","id":"arm/swagger-arm/export-user-details","label":"Creates a CSV file with a report of the users details for the specified customer.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-arm/export-user-details-excel","label":"Creates an Excel file with a report of the users details for the specified customer.","className":"menu__list-item--deprecated api-method get"}]}];